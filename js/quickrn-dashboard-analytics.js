/* QuickRN dashboard analytics: one source of truth for local submitted-answer and completed-exam metrics. */
(function (root) {
  'use strict';
  const STATE_KEY = 'quickrn_student_state';
  const RANGE_KEY = 'quickrn_dashboard_range';
  let dashboardChart = null;
  let detailedChart = null;
  let activeRange = 'all';
  const $ = id => root.document.getElementById(id);
  const safeNumber = value => Number.isFinite(Number(value)) ? Number(value) : 0;
  const readState = () => { try { return JSON.parse(root.localStorage.getItem(STATE_KEY) || '{}'); } catch (_) { return {}; } };
  const statsOf = state => state && state.studentStats && typeof state.studentStats === 'object' ? state.studentStats : {};
  const normalizePercent = (value, fractionWhenUnit = false) => {
    if (value === null || value === undefined || value === '') return null;
    const n = Number(value);
    if (!Number.isFinite(n)) return null;
    const scaled = fractionWhenUnit && n >= 0 && n <= 1 ? n * 100 : n;
    return Math.max(0, Math.min(100, scaled));
  };
  function isCompleted(record) {
    if (!record || typeof record !== 'object') return false;
    const status = String(record.completionStatus || record.status || '').toLowerCase();
    return record.completed === true || String(record.completed).toLowerCase() === 'true' ||
      record.isFinished === true || record.finished === true ||
      ['completed','complete','finished','submitted'].includes(status) ||
      !!(record.completedAt || record.finishedAt);
  }
  function modeOf(record, fallback) {
    return String(record.mode || record.examMode || record.type || fallback || '').toLowerCase();
  }
  function uniqueKey(record, fallback) {
    const stable = record.sessionId || record.attemptId || record.examId || record.id;
    if (stable) return String(stable);
    return [record.completedAt || record.finishedAt || record.timestamp || record.date || '',
      modeOf(record, fallback), record.totalAnswered || record.itemsAnswered || record.totalItems || record.total || '',
      record.scorePercent ?? record.accuracyPercent ?? record.score ?? ''].join('|');
  }
  function getCompletedHistory(state) {
    const stats = statsOf(state), rows = [], seen = new Set();
    const add = (list, fallback) => {
      (Array.isArray(list) ? list : []).forEach(record => {
        if (!isCompleted(record)) return;
        const key = uniqueKey(record, fallback);
        if (seen.has(key)) return;
        seen.add(key);
        const mode = modeOf(record, fallback);
        const rawDate = record.completedAt || record.finishedAt || record.timestamp || record.date || record.createdAt;
        const date = rawDate ? new Date(rawDate) : null;
        if (!date || !Number.isFinite(date.getTime())) return;
        let accuracy = normalizePercent(record.accuracyPercent ?? record.itemAccuracyPercent ?? record.scorePercent ?? record.percentage, false);
        if (accuracy === null && record.accuracy !== undefined) accuracy = normalizePercent(record.accuracy, true);
        if (accuracy === null && record.score !== undefined) accuracy = normalizePercent(record.score, true);
        if (accuracy === null) {
          const correct = Number(record.correctCount ?? record.fullyCorrect ?? record.correct);
          const total = Number(record.totalAnswered ?? record.itemsAnswered ?? record.totalItems ?? record.total ?? record.attempted);
          if (Number.isFinite(correct) && Number.isFinite(total) && total > 0) accuracy = Math.max(0, Math.min(100, correct / total * 100));
        }
        const probability = normalizePercent(record.passingProbability ?? record.passProbability ?? record.readinessProbability, true);
        rows.push({ ...record, _mode: mode, _date: date, _accuracy: accuracy, _probability: probability, _key: key });
      });
    };
    add(stats.examHistory, 'exam');
    add(stats.predictorHistory, 'predictor');
    return rows.sort((a,b) => a._date - b._date);
  }
  function withinRange(record) {
    if (activeRange === 'all') return true;
    const days = Number(activeRange);
    const cutoff = new Date();
    cutoff.setHours(0,0,0,0);
    cutoff.setDate(cutoff.getDate() - (days - 1));
    return record._date >= cutoff && record._date <= new Date();
  }
  function getLedgerTotals() {
    try {
      const ledger = root.QuickRNQuestionMetrics && root.QuickRNQuestionMetrics.totals();
      if (ledger && safeNumber(ledger.attempts) > 0) return { attempts: safeNumber(ledger.attempts), correct: safeNumber(ledger.correct), available: true };
    } catch (_) {}
    return { attempts: 0, correct: 0, available: false };
  }
  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function setRange(range) {
    activeRange = ['7','30','90','all'].includes(String(range)) ? String(range) : 'all';
    try { root.localStorage.setItem(RANGE_KEY, activeRange); } catch (_) {}
    root.document.querySelectorAll('[data-quickrn-range]').forEach(button => {
      const selected = button.getAttribute('data-quickrn-range') === activeRange;
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
      button.classList.toggle('bg-emerald-50', selected);
      button.classList.toggle('border-emerald-300', selected);
      button.classList.toggle('text-emerald-800', selected);
    });
    refresh();
  }
  function renderStats(state, history) {
    const stats = statsOf(state), ledger = getLedgerTotals();
    const answered = ledger.available ? ledger.attempts : Math.max(0, safeNumber(stats.totalSolved));
    const correct = ledger.available ? Math.min(answered, ledger.correct) : Math.min(answered, Math.max(0, safeNumber(stats.correctCount)));
    const accuracy = answered ? Math.round(correct / answered * 100) : 0;
    const filtered = history.filter(withinRange);
    const cat = filtered.filter(x => /cat/.test(x._mode) && !/predictor/.test(x._mode));
    const predictor = filtered.filter(x => /predictor/.test(x._mode));
    const pool = Number(root.totalQuestionsInPool);
    const poolText = Number.isFinite(pool) && pool > 0 ? ' / ' + pool : '';
    const solved = $('stat-solved-display');
    if (solved) solved.innerHTML = escapeHTML(answered) + (poolText ? '<span class="text-sm font-semibold text-slate-400">' + escapeHTML(poolText) + '</span>' : '');
    if ($('stat-accuracy')) $('stat-accuracy').textContent = accuracy + '%';
    if ($('stat-exams')) $('stat-exams').textContent = cat.length;
    if ($('stat-predictor-count')) $('stat-predictor-count').textContent = predictor.length;
    if ($('analytics-answered')) $('analytics-answered').textContent = answered.toLocaleString();
    if ($('analytics-accuracy')) $('analytics-accuracy').textContent = answered ? accuracy + '%' : '—';
    if ($('analytics-cat')) $('analytics-cat').textContent = cat.length;
    if ($('analytics-predictor')) $('analytics-predictor').textContent = predictor.length;
  }
  function renderHistory(records) {
    const host = $('quickrn-analytics-history');
    if (!host) return;
    if (!records.length) { host.innerHTML = '<p class="text-xs text-slate-500">No completed exams in this date range.</p>'; return; }
    host.innerHTML = records.slice().reverse().map((r, index) => {
      const name = /predictor/.test(r._mode) ? 'NCLEX Predictor' : /cat/.test(r._mode) ? 'CAT Exam' : (r.type || r.mode || 'Practice Exam');
      const score = r._accuracy === null ? 'Score not recorded' : r._accuracy.toFixed(1) + '% accuracy';
      return '<article class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3"><div><strong class="block text-xs text-slate-800">' + escapeHTML(name) + '</strong><span class="text-[10px] text-slate-500">' + escapeHTML(r._date.toLocaleString()) + '</span></div><span class="text-xs font-bold text-slate-700">' + escapeHTML(score) + '</span></article>';
    }).join('');
  }
  function drawChart(canvasId, records, current) {
    const canvas = $(canvasId);
    if (!canvas) return null;
    const parent = canvas.parentElement;
    const plotRecords = records.filter(r => r._accuracy !== null);
    const labels = plotRecords.map((r,i) => r._date.toLocaleDateString(undefined,{month:'short',day:'numeric'}) + ' · ' + (i+1));
    const scores = plotRecords.map(r => Number(r._accuracy.toFixed(1)));
    const probabilities = plotRecords.map(r => r._probability);
    const note = $(canvasId === 'quickrnScoreChart' ? 'quickrn-score-chart-note' : 'quickrn-analytics-note');
    if (note) note.textContent = plotRecords.length
      ? 'Showing ' + plotRecords.length + ' completed exam(s). Only submitted results with a recorded score are plotted.'
      : 'No scored completed exams in this date range. Finish an exam to build your trend.';
    if (typeof root.Chart === 'undefined') {
      if (parent) parent.innerHTML = '<div class="h-full flex items-center justify-center text-xs text-slate-400">Chart library unavailable. Saved results are still shown in exam history.</div>';
      return null;
    }
    const previous = current === 'dashboard' ? dashboardChart : detailedChart;
    if (previous) { try { previous.destroy(); } catch (_) {} }
    const instance = new root.Chart(canvas, {
      type: 'line',
      data: { labels, datasets: [
        { label: 'Accuracy', data: scores, borderColor: '#16a34a', backgroundColor: 'rgba(22,163,74,.08)', borderWidth: 2, fill: true, tension: .25, pointRadius: 3, pointHoverRadius: 5, pointBackgroundColor: '#16a34a', spanGaps: false },
        { label: 'Passing estimate', data: probabilities, borderColor: '#d97706', backgroundColor: 'transparent', borderWidth: 2, borderDash: [5,4], fill: false, tension: .25, pointRadius: 2, pointHoverRadius: 4, pointBackgroundColor: '#d97706', spanGaps: false }
      ]},
      options: { responsive:true, maintainAspectRatio:false, interaction:{mode:'index',intersect:false},
        plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>ctx.dataset.label+': '+(ctx.parsed.y===null?'Not recorded':ctx.parsed.y+'%')}}},
        scales:{y:{min:0,max:100,grid:{color:'rgba(148,163,184,.16)'},ticks:{stepSize:25,callback:v=>v+'%',font:{size:10}}},x:{grid:{display:false},ticks:{autoSkip:true,maxTicksLimit:7,maxRotation:0,font:{size:10}}}}
      }
    });
    return instance;
  }
  function refresh() {
    const state = readState(), history = getCompletedHistory(state);
    renderStats(state, history);
    const filtered = history.filter(withinRange);
    dashboardChart = drawChart('quickrnScoreChart', filtered, 'dashboard');
    detailedChart = drawChart('quickrnAnalyticsChart', filtered, 'analytics');
    renderHistory(filtered);
  }
  function init() {
    try { activeRange = root.localStorage.getItem(RANGE_KEY) || 'all'; } catch (_) { activeRange = 'all'; }
    if (!['7','30','90','all'].includes(activeRange)) activeRange = 'all';
    root.document.querySelectorAll('[data-quickrn-range]').forEach(button => {
      button.addEventListener('click', () => setRange(button.getAttribute('data-quickrn-range')));
    });
    root.addEventListener('quickrn:question-metric', refresh);
    root.addEventListener('quickrn:exam-completed', refresh);
    root.addEventListener('quickrn:student-state-updated', refresh);
    root.addEventListener('storage', event => { if (!event.key || event.key === STATE_KEY || event.key === 'quickrn_question_metrics_v1') refresh(); });
    root.addEventListener('focus', refresh);
    root.addEventListener('pageshow', refresh);
    root.document.addEventListener('visibilitychange', () => { if (!root.document.hidden) refresh(); });
    root.setInterval(() => { if (!root.document.hidden) refresh(); }, 15000);
    setRange(activeRange);
  }
  root.QuickRNDashboardAnalytics = Object.freeze({ refresh, setRange, getCompletedHistory });
  // The legacy inline initializer calls this hook on DOMContentLoaded; route it through the single chart owner.
  root.initQuickRNScoreChart = refresh;
  if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', init, { once:true });
  else init();
})(window);
