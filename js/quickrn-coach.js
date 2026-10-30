/* QuickRN shared study coach and Client Needs analytics.
 * This is a transparent, local rule-based helper; it does not call an external AI service.
 */
(function (root) {
  'use strict';

  const DOMAINS = [
    { id: 'management', name: 'Management of Care (17-23%)', color: 'bg-indigo-600', terms: /delegat|assignment|prioriti|leadership|care coordination|informed consent|advance directive|advocacy|scope of practice|ethical|legal|triage/ },
    { id: 'safety', name: 'Safety and Infection Control (9-15%)', color: 'bg-blue-600', terms: /infection|isolation|sterile|aseptic|ppe|fall risk|restraint|safety|transmission|hand hygiene/ },
    { id: 'health', name: 'Health Promotion and Maintenance (6-12%)', color: 'bg-emerald-600', terms: /pregnan|prenatal|labor|postpartum|newborn|immuniz|developmental|growth and development|screening|wellness|health promotion/ },
    { id: 'psychosocial', name: 'Psychosocial Integrity (6-12%)', color: 'bg-purple-600', terms: /anxiety|depress|suicid|grief|coping|therapeutic communication|psychosocial|mental health|substance use|abuse/ },
    { id: 'basic', name: 'Basic Care and Comfort (6-12%)', color: 'bg-amber-600', terms: /hygiene|nutrition|feeding|mobility|ambulat|pain|comfort|sleep|elimination|activities of daily living|positioning/ },
    { id: 'pharm', name: 'Pharmacological and Parenteral Therapies (12-18%)', color: 'bg-rose-600', terms: /pharmac|medication|drug|insulin|dosage|dose|anticoagulant|iv therapy|adverse effect|side effect|toxicity/ },
    { id: 'risk', name: 'Reduction of Risk Potential (9-15%)', color: 'bg-orange-600', terms: /laboratory|lab value|diagnostic|postoperative|post-operative|complication|monitor|assessment|vital sign|electrolyte|ecg|screening/ },
    { id: 'physio', name: 'Physiological Adaptation (11-17%)', color: 'bg-teal-600', terms: /respiratory|cardiac|heart failure|shock|stroke|neurolog|renal|kidney|diabetes|ketoacidosis|sepsis|perfusion|oxygenation|pathophysi|acute|disease/ }
  ];

  function textOf(question) {
    if (!question) return '';
    return [
      question.clientNeeds, question.clientNeed, question.nclexCategory,
      question.category, question.topic, question.title, question.keyPhrase,
      question.questionText, question.question, question.prompt, question.rationale
    ].flat().filter(Boolean).join(' ').toLowerCase();
  }

  function classifyClientNeed(question) {
    const explicit = [question && question.clientNeeds, question && question.clientNeed, question && question.nclexCategory]
      .flat().filter(Boolean).join(' ').toLowerCase();
    const category = String(question && question.category || '').toLowerCase();
    const topic = [question && question.topic, question && question.title, question && question.keyPhrase]
      .filter(Boolean).join(' ').toLowerCase();
    const exact = DOMAINS.find(domain => [explicit, category].some(value =>
      value.includes(domain.name.toLowerCase()) || value.includes(domain.id)));
    if (exact) return exact;
    const categoryMatch = DOMAINS.find(domain => domain.terms.test(category));
    if (categoryMatch) return categoryMatch;
    const topicMatch = DOMAINS.find(domain => domain.terms.test(topic));
    if (topicMatch) return topicMatch;
    const fullText = textOf(question);
    return DOMAINS.find(domain => domain.terms.test(fullText)) || null;
  }

  function recordClientNeedAttempt(question, isCorrect) {
    const domain = classifyClientNeed(question);
    if (!domain) return false;
    try {
      const state = JSON.parse(root.localStorage.getItem('quickrn_student_state') || '{}');
      state.studentStats = state.studentStats || {};
      state.studentStats.clientNeeds = state.studentStats.clientNeeds || {};
      const current = state.studentStats.clientNeeds[domain.id] || { attempted: 0, correct: 0 };
      current.attempted += 1;
      if (isCorrect) current.correct += 1;
      state.studentStats.clientNeeds[domain.id] = current;
      root.localStorage.setItem('quickrn_student_state', JSON.stringify(state));
      return true;
    } catch (error) {
      console.error('QuickRN Client Needs analytics could not be saved:', error);
      return false;
    }
  }

  function buildTutorInsight(question, wasCorrect) {
    const topic = (question && (question.topic || question.keyPhrase || question.title || question.category)) || 'this clinical scenario';
    const domain = classifyClientNeed(question);
    const text = textOf(question);
    let guidance = 'Identify the most urgent cue, connect it to the underlying physiology, choose the safest action, and reassess the client response.';
    if (/pharmac|medication|drug|insulin|dose|anticoagulant/.test(text)) {
      guidance = 'Before administering a medication, verify the patient, medication, dose, route, time, allergies, relevant vital signs, laboratory values, contraindications, and expected response. Hold and escalate when a safety parameter is outside the prescribed range.';
    } else if (/infection|isolation|sterile|aseptic|sepsis/.test(text)) {
      guidance = 'Match precautions to the transmission route, apply hand hygiene and appropriate PPE, and recognize sepsis or rapid deterioration early. Do not delay urgent stabilization while completing routine tasks.';
    } else if (/airway|respirat|oxygen|asthma|copd|stridor/.test(text)) {
      guidance = 'Prioritize airway patency and oxygenation. Assess work of breathing, oxygen saturation, mental status, and fatigue; worsening hypoxemia, stridor, or a silent chest requires immediate escalation.';
    } else if (/cardiac|heart failure|chest pain|shock|perfusion|hemodynamic/.test(text)) {
      guidance = 'Assess circulation and perfusion first: blood pressure, rhythm, chest pain, mental status, urine output, and skin signs. Treat instability before routine monitoring and reassess the response.';
    } else if (/pregnan|labor|fetal|postpartum|newborn/.test(text)) {
      guidance = 'Stabilize the pregnant or postpartum client, assess maternal status and fetal oxygenation, and escalate time-critical warning signs. Protect the client while preparing the next indicated intervention.';
    } else if (/mental health|suicid|anxiety|depress|grief|psychosocial/.test(text)) {
      guidance = 'Use therapeutic, nonjudgmental communication; assess immediate risk to self or others; maintain safety; and support the client’s autonomy and coping without offering false reassurance.';
    } else if (/lab|electrolyte|potassium|sodium|calcium|diagnostic|postoperative/.test(text)) {
      guidance = 'Compare the finding with the expected range and the client’s baseline, identify the complication it may signal, correlate it with symptoms, and escalate critical changes promptly.';
    }
    const outcome = wasCorrect === true
      ? 'You answered this item correctly. Strengthen retention by explaining why the best action is safest and why each distractor is less appropriate.'
      : wasCorrect === false
        ? 'For remediation, revisit the key cue and the rationale, then explain why the correct action prevents harm sooner than the alternatives.'
        : 'Use this as a focused review prompt; compare the rationale with the client’s current stability and safety needs.';
    return {
      topic,
      domain: domain ? domain.name : 'Needs further classification',
      guidance,
      outcome,
      rationale: question && (question.rationale || question.learningObjective || question.learningObjectives) || ''
    };
  }


  function safeCalculate(expression) {
    const source = String(expression || '').replace(/\s+/g, '');
    if (!source || !/^[0-9.+\-*/()]+$/.test(source)) throw new Error('Invalid expression');
    const tokens = source.match(/(?:\d+(?:\.\d*)?|\.\d+)|[()+\-*/]/g) || [];
    if (tokens.join('') !== source) throw new Error('Invalid expression');
    const output = [], operators = [];
    const rank = { '+': 1, '-': 1, '*': 2, '/': 2, 'u+': 3, 'u-': 3 };
    let previous = 'start';
    for (const token of tokens) {
      if (/^(?:\d|\.)/.test(token)) { output.push(Number(token)); previous = 'number'; continue; }
      if (token === '(') { operators.push(token); previous = '('; continue; }
      if (token === ')') {
        while (operators.length && operators[operators.length - 1] !== '(') output.push(operators.pop());
        if (operators.pop() !== '(') throw new Error('Mismatched parentheses');
        previous = 'number'; continue;
      }
      let op = token;
      if ((op === '+' || op === '-') && ['start', '(', 'operator'].includes(previous)) op = op === '+' ? 'u+' : 'u-';
      while (operators.length && operators[operators.length - 1] !== '(') {
        const top = operators[operators.length - 1];
        if (rank[top] > rank[op] || (rank[top] === rank[op] && !op.startsWith('u'))) output.push(operators.pop());
        else break;
      }
      operators.push(op); previous = 'operator';
    }
    while (operators.length) {
      const op = operators.pop();
      if (op === '(') throw new Error('Mismatched parentheses');
      output.push(op);
    }
    const stack = [];
    for (const token of output) {
      if (typeof token === 'number') { stack.push(token); continue; }
      if (token === 'u+' || token === 'u-') {
        if (!stack.length) throw new Error('Invalid expression');
        const value = stack.pop(); stack.push(token === 'u-' ? -value : value); continue;
      }
      if (stack.length < 2) throw new Error('Invalid expression');
      const b = stack.pop(), a = stack.pop();
      if (token === '+') stack.push(a + b);
      else if (token === '-') stack.push(a - b);
      else if (token === '*') stack.push(a * b);
      else if (token === '/') { if (b === 0) throw new Error('Cannot divide by zero'); stack.push(a / b); }
    }
    if (stack.length !== 1 || !Number.isFinite(stack[0])) throw new Error('Invalid expression');
    return Number(stack[0].toFixed(8)).toString();
  }

  root.QuickRNCoach = Object.freeze({
    safeCalculate,
    domains: DOMAINS,
    classifyClientNeed,
    recordClientNeedAttempt,
    buildTutorInsight
  });
})(typeof window !== 'undefined' ? window : globalThis);
