// QuickRN Core Application Logic & Unfinished Exam Handler
class QuickRNApp {
    constructor() {
        this.currentTab = 'dashboard';
        this.activeExam = null;
        this.unfinishedExam = null;
        this.clientNeedsChart = null;
        this.init();
    }

    init() {
        this.loadUserData();
        this.setupSecurityListeners();
        this.renderDashboard();
        this.renderPracticeCategories();
        this.renderCalendar();
        this.initChart();
    }

    setupSecurityListeners() {
        document.addEventListener('contextmenu', (e) => {
            if (this.activeExam || e.target.closest('.secure-test-area')) {
                e.preventDefault();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (this.activeExam) {
                if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A' || e.key === 'p' || e.key === 'P')) {
                    e.preventDefault();
                    alert('Security Policy: Copying and printing are disabled during active NCLEX simulations.');
                }
            }
        });
    }

    enableWatermark(username = "Candidate #8842") {
        const container = document.getElementById('watermark-grid-container');
        container.innerHTML = '';
        for (let i = 0; i < 12; i++) {
            const div = document.createElement('div');
            div.className = 'watermark-item';
            div.textContent = `QUICK-RN SECURE • ${username} • ${new Date().toLocaleDateString()}`;
            container.appendChild(div);
        }
        document.getElementById('watermark-layer').style.display = 'block';
    }

    disableWatermark() {
        document.getElementById('watermark-layer').style.display = 'none';
    }

    openSecurityModal() {
        document.getElementById('security-modal').classList.remove('hidden');
    }

    closeSecurityModal() {
        document.getElementById('security-modal').classList.add('hidden');
    }

    loadUserData() {
        const savedHistory = localStorage.getItem('quickrn_history');
        this.examHistory = savedHistory ? JSON.parse(savedHistory) : [];

        const savedRoadmap = localStorage.getItem('quickrn_roadmap');
        this.roadmap = savedRoadmap ? JSON.parse(savedRoadmap) : DEFAULT_ROADMAP_PLAN;

        const savedExamDate = localStorage.getItem('quickrn_exam_date');
        this.exactExamDate = savedExamDate || '';

        const savedUnfinished = localStorage.getItem('quickrn_unfinished_exam');
        this.unfinishedExam = savedUnfinished ? JSON.parse(savedUnfinished) : null;

        const savedAnsweredItems = localStorage.getItem('quickrn_answered_items');
        this.answeredItems = savedAnsweredItems ? JSON.parse(savedAnsweredItems) : [];
    }

    saveUserData() {
        localStorage.setItem('quickrn_history', JSON.stringify(this.examHistory));
        localStorage.setItem('quickrn_roadmap', JSON.stringify(this.roadmap));
        localStorage.setItem('quickrn_exam_date', JSON.stringify(this.exactExamDate));
        
        if (this.unfinishedExam) {
            localStorage.setItem('quickrn_unfinished_exam', JSON.stringify(this.unfinishedExam));
        } else {
            localStorage.removeItem('quickrn_unfinished_exam');
        }

        localStorage.setItem('quickrn_answered_items', JSON.stringify(this.answeredItems));
    }

    updateExamDate(dateStr) {
        this.exactExamDate = dateStr;
        this.saveUserData();
        this.renderCalendar();
    }

    switchTab(tabId) {
        if (this.activeExam) {
            if (!confirm('You are currently in an active exam session. Return to dashboard and save your answered questions?')) return;
            this.returnToDashboardFromExam();
            return;
        }

        this.currentTab = tabId;
        const tabs = ['dashboard', 'practice', 'cat', 'predictor', 'analytics', 'calendar'];
        tabs.forEach(t => {
            const el = document.getElementById(`tab-${t}`);
            const btn = document.getElementById(`nav-${t}`);
            if (el) el.classList.add('hidden');
            if (btn) btn.classList.remove('bg-slate-700', 'text-white');
        });

        document.getElementById('exam-interface').classList.add('hidden');
        document.getElementById('exam-summary-view').classList.add('hidden');

        const activeEl = document.getElementById(`tab-${tabId}`);
        const activeBtn = document.getElementById(`nav-${tabId}`);
        if (activeEl) activeEl.classList.remove('hidden');
        if (activeBtn) activeBtn.classList.add('bg-slate-700', 'text-white');

        if (tabId === 'dashboard') this.renderDashboard();
        if (tabId === 'analytics') this.renderAnalytics();
        if (tabId === 'calendar') this.renderCalendar();
    }

    renderDashboard() {
        let readiness = 78;
        let passProb = "High (98.2%)";

        // Calculate readiness including submitted questions from finished and unfinished exams
        const totalItemsCount = this.answeredItems.length;
        if (totalItemsCount > 0) {
            const correctItems = this.answeredItems.filter(i => i.isCorrect).length;
            readiness = Math.round((correctItems / totalItemsCount) * 100);
            passProb = readiness >= 75 ? "Very High (99.1%)" : readiness >= 60 ? "Moderate (84.2%)" : "Needs Review (68.0%)";
        } else if (this.examHistory.length > 0) {
            const totalScore = this.examHistory.reduce((acc, curr) => acc + curr.pct, 0);
            readiness = Math.round(totalScore / this.examHistory.length);
            passProb = readiness >= 75 ? "Very High (99.1%)" : "Moderate (82.4%)";
        }

        document.getElementById('dash-readiness-pct').textContent = readiness + '%';
        document.getElementById('dash-pass-prob').textContent = passProb;

        // Render Unfinished Exam Banner
        const unfinishedBanner = document.getElementById('unfinished-exam-banner');
        if (this.unfinishedExam) {
            unfinishedBanner.classList.remove('hidden');
            const answeredCount = Object.keys(this.unfinishedExam.submitted).length;
            const totalCount = this.unfinishedExam.questions.length;
            document.getElementById('unfinished-exam-title').textContent = `${this.unfinishedExam.title} - Unfinished Session`;
            document.getElementById('unfinished-exam-progress').textContent = `${answeredCount} of ${totalCount} questions submitted. Progress saved to dashboard mastery. No final score recorded yet.`;
        } else {
            unfinishedBanner.classList.add('hidden');
        }

        const container = document.getElementById('recent-sessions-container');
        if (this.examHistory.length === 0 && !this.unfinishedExam) {
            container.innerHTML = `<p class="text-sm text-slate-400">No completed exam sessions recorded yet. Start your first CAT or Predictor session!</p>`;
            return;
        }

        let html = `<div class="space-y-3">`;

        if (this.unfinishedExam) {
            const answeredCount = Object.keys(this.unfinishedExam.submitted).length;
            html += `
                <div class="flex justify-between items-center bg-amber-950/30 p-4 rounded-xl border border-amber-500/40">
                    <div>
                        <span class="text-xs font-black text-amber-400 uppercase">UNFINISHED SESSION</span>
                        <h4 class="text-sm font-semibold text-white mt-0.5">${this.unfinishedExam.title}</h4>
                        <p class="text-xs text-slate-400">${answeredCount} items answered • No score recorded yet</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button onclick="app.resumeUnfinishedExam()" class="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg text-xs transition">Resume</button>
                        <button onclick="app.restartUnfinishedExam()" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-lg text-xs border border-slate-700 transition">Retake</button>
                    </div>
                </div>
            `;
        }

        this.examHistory.slice(-3).reverse().forEach(ex => {
            html += `
                <div class="flex justify-between items-center bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                    <div>
                        <span class="text-xs font-bold text-indigo-400 uppercase">${ex.type}</span>
                        <h4 class="text-sm font-semibold text-white mt-0.5">${ex.date}</h4>
                    </div>
                    <div class="flex items-center space-x-4">
                        <span class="text-sm font-mono font-bold text-emerald-400">${ex.pct}% (${ex.score}/${ex.total})</span>
                        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300">${ex.status}</span>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
        container.innerHTML = html;
    }

    renderCalendar() {
        const dateInput = document.getElementById('exact-exam-date-input');
        if (dateInput && this.exactExamDate) {
            dateInput.value = this.exactExamDate;
        }

        const remindersContainer = document.getElementById('reminders-container');
        remindersContainer.innerHTML = `
            <div class="bg-slate-900/80 p-3.5 rounded-xl border border-indigo-500/30 flex items-center space-x-3">
                <div class="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-lg"><i class="fa-solid fa-laptop-medical"></i></div>
                <div>
                    <h4 class="text-xs font-bold text-white uppercase">CAT Simulation Schedule</h4>
                    <p class="text-xs text-slate-400 mt-0.5">Recommended on Day 3 & Day 13 of your roadmap sprint.</p>
                </div>
            </div>
            <div class="bg-slate-900/80 p-3.5 rounded-xl border border-emerald-500/30 flex items-center space-x-3">
                <div class="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-lg"><i class="fa-solid fa-infinity"></i></div>
                <div>
                    <h4 class="text-xs font-bold text-white uppercase">Readiness Predictor Exam (Unlimited)</h4>
                    <p class="text-xs text-slate-400 mt-0.5">Retake anytime. Return to dashboard saves answered items without scoring.</p>
                </div>
            </div>
        `;

        const grid = document.getElementById('calendar-days-grid');
        grid.innerHTML = '';
        let completedCount = 0;

        this.roadmap.forEach(item => {
            if (item.completed) completedCount++;
            let badgeColor = 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
            if (item.type === 'cat') badgeColor = 'bg-amber-500/10 text-amber-400 border-amber-500/30';
            if (item.type === 'predictor') badgeColor = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';

            grid.innerHTML += `
                <div class="bg-slate-900/80 border ${item.completed ? 'border-emerald-500/50 bg-emerald-950/10' : 'border-slate-700'} rounded-xl p-4 flex flex-col justify-between space-y-3">
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-xs font-black uppercase px-2 py-0.5 rounded-md border ${badgeColor}">Day ${item.day}</span>
                            <label class="flex items-center space-x-1.5 cursor-pointer">
                                <span class="text-xs text-slate-400 font-semibold">${item.completed ? 'Done' : 'Mark Done'}</span>
                                <input type="checkbox" ${item.completed ? 'checked' : ''} onchange="app.toggleRoadmapDay(${item.day})" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-800 border-slate-600 cursor-pointer">
                            </label>
                        </div>
                        <h4 class="text-sm font-bold text-white">${item.title}</h4>
                        <p class="text-xs text-slate-400 mt-1">${item.topic}</p>
                    </div>
                    <div class="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                        <span class="text-slate-500 font-medium">${item.type === 'cat' ? 'CAT Exam' : item.type === 'predictor' ? 'Predictor Exam' : 'Study Topic'}</span>
                        <span class="${item.completed ? 'text-emerald-400 font-bold' : 'text-slate-500'}">${item.completed ? '<i class="fa-solid fa-check mr-1"></i>Completed' : 'Pending'}</span>
                    </div>
                </div>
            `;
        });

        document.getElementById('calendar-completion-stats').textContent = `Completed: ${completedCount} / ${this.roadmap.length} Days`;
    }

    toggleRoadmapDay(dayNum) {
        const item = this.roadmap.find(r => r.day === dayNum);
        if (item) {
            item.completed = !item.completed;
            this.saveUserData();
            this.renderCalendar();
        }
    }

    renderPracticeCategories() {
        const grid = document.getElementById('practice-categories-grid');
        grid.innerHTML = '';
        CLIENT_NEEDS_CATEGORIES.forEach(cat => {
            grid.innerHTML += `
                <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition cursor-pointer flex justify-between items-center" onclick="app.startCategoryQuiz('${cat.id}')">
                    <div>
                        <h3 class="text-base font-bold text-white">${cat.name}</h3>
                        <p class="text-xs text-slate-400 mt-1">NCLEX Test Plan Weight: ${cat.weight}%</p>
                    </div>
                    <div class="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            `;
        });
    }

    startPracticeQuiz() {
        this.startExamSession('Practice Quiz', QUESTION_BANK);
    }

    startCategoryQuiz(catId) {
        const filtered = QUESTION_BANK.filter(q => q.category === catId);
        const questions = filtered.length > 0 ? filtered : QUESTION_BANK;
        this.startExamSession('Category Focus Quiz', questions);
    }

    startCatExam() {
        this.startExamSession('CAT Simulation', QUESTION_BANK);
    }

    startPredictorExam() {
        if (this.unfinishedExam) {
            if (confirm('You have an unfinished NCLEX Predictor Exam session. Would you like to resume it? Click OK to resume, or Cancel to start a fresh exam.')) {
                this.resumeUnfinishedExam();
                return;
            }
        }
        this.startExamSession('NCLEX Predictor Exam', QUESTION_BANK);
    }

    resumeUnfinishedExam() {
        if (!this.unfinishedExam) return;
        this.activeExam = this.unfinishedExam;
        this.launchExamView();
    }

    restartUnfinishedExam() {
        this.unfinishedExam = null;
        this.saveUserData();
        this.startExamSession('NCLEX Predictor Exam', QUESTION_BANK);
    }

    startExamSession(title, questions) {
        this.activeExam = {
            title: title,
            questions: [...questions],
            currentIndex: 0,
            selectedAnswers: {},
            submitted: {},
            score: 0
        };

        this.launchExamView();
    }

    launchExamView() {
        ['dashboard', 'practice', 'cat', 'predictor', 'analytics', 'calendar'].forEach(t => {
            const el = document.getElementById(`tab-${t}`);
            if (el) el.classList.add('hidden');
        });
        document.getElementById('exam-interface').classList.remove('hidden');
        document.getElementById('exam-title-badge').textContent = this.activeExam.title.toUpperCase();

        this.enableWatermark("Candidate - SECURE");
        this.loadQuestion();
    }

    loadQuestion() {
        const exam = this.activeExam;
        const q = exam.questions[exam.currentIndex];

        document.getElementById('exam-progress-label').textContent = `Question ${exam.currentIndex + 1} of ${exam.questions.length}`;
        document.getElementById('question-category-tag').textContent = q.categoryName;
        document.getElementById('question-stem').textContent = q.stem;

        const optionsContainer = document.getElementById('question-options');
        optionsContainer.innerHTML = '';

        q.options.forEach((opt, idx) => {
            const isSelected = exam.selectedAnswers[exam.currentIndex] === idx;
            const isSubmitted = exam.submitted[exam.currentIndex];
            let borderClass = 'border-slate-700 bg-slate-900/50 hover:border-indigo-500';
            let iconHtml = `<span class="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-400 mr-3">${String.fromCharCode(65 + idx)}</span>`;

            if (isSubmitted) {
                if (idx === q.correctIndex) {
                    borderClass = 'border-emerald-500 bg-emerald-950/30 text-emerald-200';
                    iconHtml = `<span class="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white mr-3"><i class="fa-solid fa-check"></i></span>`;
                } else if (isSelected) {
                    borderClass = 'border-rose-500 bg-rose-950/30 text-rose-200';
                    iconHtml = `<span class="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-xs font-bold text-white mr-3"><i class="fa-solid fa-xmark"></i></span>`;
                }
            } else if (isSelected) {
                borderClass = 'border-indigo-500 bg-indigo-950/40 text-white';
            }

            optionsContainer.innerHTML += `
                <div onclick="app.selectOption(${idx})" class="flex items-center p-4 rounded-xl border ${borderClass} cursor-pointer transition">
                    ${iconHtml}
                    <span class="text-sm font-medium">${opt}</span>
                </div>
            `;
        });

        const rationaleBox = document.getElementById('rationale-box');
        const submitBtn = document.getElementById('exam-submit-btn');

        if (exam.submitted[exam.currentIndex]) {
            rationaleBox.classList.remove('hidden');
            document.getElementById('rationale-text').textContent = q.rationale;

            const refContainer = document.getElementById('question-references-container');
            refContainer.innerHTML = '';
            const refs = q.references || [
                { source: 'NIH / StatPearls', title: `${q.categoryName} Clinical Practice Overview`, url: 'https://www.ncbi.nlm.nih.gov/books/' },
                { source: 'CDC Guidelines', title: `Clinical Safety & Care Standards`, url: 'https://www.cdc.gov/' }
            ];

            refs.forEach(ref => {
                refContainer.innerHTML += `
                    <a href="${ref.url}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-indigo-300 transition group">
                        <div class="truncate mr-2">
                            <span class="block text-[10px] uppercase font-bold text-slate-400">${ref.source}</span>
                            <span class="font-semibold text-slate-200 group-hover:text-white truncate block">${ref.title}</span>
                        </div>
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs text-indigo-400"></i>
                    </a>
                `;
            });

            submitBtn.textContent = exam.currentIndex < exam.questions.length - 1 ? 'Next Question' : 'Finish Exam';
        } else {
            rationaleBox.classList.add('hidden');
            submitBtn.textContent = 'Submit Answer';
        }
    }

    selectOption(idx) {
        if (this.activeExam.submitted[this.activeExam.currentIndex]) return;
        this.activeExam.selectedAnswers[this.activeExam.currentIndex] = idx;
        this.loadQuestion();
    }

    submitOrNextQuestion() {
        const exam = this.activeExam;
        if (!exam.submitted[exam.currentIndex]) {
            if (exam.selectedAnswers[exam.currentIndex] === undefined) {
                alert('Please select an option before submitting.');
                return;
            }
            
            // Mark question as submitted
            exam.submitted[exam.currentIndex] = true;
            const q = exam.questions[exam.currentIndex];
            const isCorrect = exam.selectedAnswers[exam.currentIndex] === q.correctIndex;
            if (isCorrect) {
                exam.score++;
            }

            // Immediately mark answer in persistent answeredItems list to update dashboard readiness
            this.answeredItems.push({
                questionId: q.id,
                category: q.category,
                isCorrect: isCorrect,
                timestamp: new Date().toISOString()
            });

            this.saveUserData();
            this.loadQuestion();
        } else {
            if (exam.currentIndex < exam.questions.length - 1) {
                exam.currentIndex++;
                this.loadQuestion();
            } else {
                this.finishExam();
            }
        }
    }

    returnToDashboardFromExam() {
        if (this.activeExam) {
            // Save active session as unfinished without adding a final score log
            this.unfinishedExam = this.activeExam;
            this.activeExam = null;
            this.saveUserData();
        }
        this.disableWatermark();
        this.switchTab('dashboard');
    }

    quitExam() {
        this.returnToDashboardFromExam();
    }

    finishExam() {
        const exam = this.activeExam;
        const total = exam.questions.length;
        const score = exam.score;
        const pct = Math.round((score / total) * 100);
        const passStatus = pct >= 70 ? 'PASS' : 'FAIL';

        // Exam completed -> Add official final score to examHistory & clear unfinished state
        this.examHistory.push({
            type: exam.title,
            date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            score: score,
            total: total,
            pct: pct,
            status: passStatus
        });

        this.unfinishedExam = null;
        this.saveUserData();
        this.disableWatermark();

        document.getElementById('exam-interface').classList.add('hidden');
        document.getElementById('exam-summary-view').classList.remove('hidden');
        document.getElementById('summary-score-pct').textContent = pct + '%';
        document.getElementById('summary-score-ratio').textContent = `${score} / ${total}`;
        document.getElementById('summary-pass-status').textContent = passStatus;
        document.getElementById('summary-pass-status').className = `text-xl font-black ${pct >= 70 ? 'text-emerald-400' : 'text-rose-400'}`;

        const summaryRefList = document.getElementById('summary-references-list');
        summaryRefList.innerHTML = '';
        
        exam.questions.forEach((q, idx) => {
            const keywords = q.keywords ? q.keywords.join(', ') : q.categoryName;
            const refs = q.references || [];
            let refLinksHtml = '';
            
            refs.forEach(r => {
                refLinksHtml += `<a href="${r.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-1 text-indigo-400 hover:underline mr-3"><i class="fa-solid fa-link text-[10px]"></i><span>${r.source}: ${r.title}</span></a>`;
            });

            summaryRefList.innerHTML += `
                <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700/80 space-y-1">
                    <div class="flex justify-between items-center text-xs">
                        <span class="font-bold text-slate-200">Item #${idx + 1}: ${q.categoryName}</span>
                        <span class="text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">Topic: ${keywords}</span>
                    </div>
                    <div class="pt-1 text-[11px]">
                        ${refLinksHtml || '<span class="text-slate-500">Free open-access clinical reference material on NIH StatPearls.</span>'}
                    </div>
                </div>
            `;
        });

        this.activeExam = null;
    }

    initChart() {
        const ctx = document.getElementById('clientNeedsChart');
        if (!ctx) return;
        this.clientNeedsChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Management', 'Safety', 'Pharmacology', 'Physiological', 'Psychosocial'],
                datasets: [{
                    data: [25, 20, 20, 20, 15],
                    backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#3b82f6', '#ec4899'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: '#94a3b8', boxWidth: 12 } }
                }
            }
        });

        const barsContainer = document.getElementById('client-needs-bars');
        barsContainer.innerHTML = '';
        CLIENT_NEEDS_CATEGORIES.slice(0, 5).forEach(cat => {
            barsContainer.innerHTML += `
                <div>
                    <div class="flex justify-between text-xs font-semibold mb-1">
                        <span class="text-slate-300">${cat.name}</span>
                        <span class="text-indigo-400">82% Mastery</span>
                    </div>
                    <div class="w-full bg-slate-900 rounded-full h-2">
                        <div class="bg-indigo-500 h-2 rounded-full" style="width: 82%"></div>
                    </div>
                </div>
            `;
        });
    }

    renderAnalytics() {}
}

let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new QuickRNApp();
});