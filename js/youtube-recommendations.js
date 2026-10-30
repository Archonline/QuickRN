(function (root) {
    'use strict';

    const TEXT_FIELDS = [
        'topic', 'category', 'subcategory', 'subject', 'clientNeedDomain',
        'domain', 'contentArea', 'concept', 'keyPhrase', 'cleanTitle',
        'title', 'promptTitle', 'clinicalFocus', 'focusArea', 'questionText',
        'question', 'stem', 'learningObjective', 'learningObjectives',
        'objective', 'rationale'
    ];
    const NESTED_FIELDS = ['caseStudy', 'case', 'scenario'];
    const NESTED_TEXT_KEYS = ['title', 'name', 'summary', 'description', 'text', 'content', 'narrative', 'scenario'];
    const GENERIC_QUERY_WORDS = new Set([
        'the', 'and', 'for', 'with', 'from', 'that', 'this', 'which', 'what',
        'when', 'where', 'who', 'why', 'how', 'does', 'should', 'would',
        'could', 'will', 'can', 'may', 'must', 'select', 'choose', 'identify',
        'best', 'most', 'appropriate', 'priority', 'nurse', 'nursing', 'client',
        'patient', 'healthcare', 'provider', 'according', 'based', 'following',
        'statement', 'action', 'response', 'finding', 'findings', 'correct',
        'answer', 'question', 'explain', 'review', 'regarding', 'about'
    ]);

    function plainText(value, depth) {
        if (value == null || depth > 2) return '';
        if (typeof value === 'string' || typeof value === 'number') {
            return String(value)
                .replace(/<[^>]*>/g, ' ')
                .replace(/&nbsp;/gi, ' ')
                .replace(/&amp;/gi, '&')
                .replace(/&quot;/gi, '"')
                .replace(/&#39;|&apos;/gi, "'")
                .replace(/https?:\/\/\S+/gi, ' ')
                .replace(/[\r\n\t]+/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        }
        if (Array.isArray(value)) {
            return value.slice(0, 6).map(item => plainText(item, (depth || 0) + 1)).filter(Boolean).join(' ');
        }
        if (typeof value === 'object') {
            return NESTED_TEXT_KEYS.map(key => plainText(value[key], (depth || 0) + 1)).filter(Boolean).join(' ');
        }
        return '';
    }

    function uniqueFragments(question) {
        const q = question && typeof question === 'object' ? question : {};
        const fragments = TEXT_FIELDS.map(key => plainText(q[key], 0)).filter(Boolean);
        NESTED_FIELDS.forEach(key => {
            const nested = plainText(q[key], 0);
            if (nested) fragments.push(nested);
        });
        return fragments.filter((value, index, values) =>
            values.findIndex(other => other.toLowerCase() === value.toLowerCase()) === index
        );
    }

    function getQuestionContext(question) {
        const fragments = uniqueFragments(question);
        let context = fragments.join(' ');
        if (!context) context = 'clinical nursing fundamentals';
        return Array.from(context).slice(0, 180).join('').trim();
    }

    function getDisplayTopic(question) {
        const q = question && typeof question === 'object' ? question : {};
        const topic = [
            plainText(q.topic, 0),
            plainText(q.keyPhrase, 0),
            plainText(q.title, 0),
            plainText(q.cleanTitle, 0),
            plainText(q.category, 0),
            plainText(q.questionText || q.question || q.stem, 0)
        ].filter(Boolean);
        const label = topic[0] || 'Clinical Nursing';
        return Array.from(label).slice(0, 90).join('').trim();
    }

    function getSearchQuery(question, purpose) {
        const intent = purpose === 'clinical'
            ? 'NCLEX RN clinical judgment nursing interventions'
            : 'NCLEX RN nursing review pathophysiology';
        return (intent + ' ' + getQuestionContext(question)).replace(/\s+/g, ' ').trim();
    }

    function getVideoSearchUrl(question, purpose) {
        return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(getSearchQuery(question, purpose));
    }

    function getTwoVideos(question) {
        const topic = getDisplayTopic(question);
        const topicQuery = getSearchQuery(question, 'review');
        const clinicalQuery = getSearchQuery(question, 'clinical');
        return [
            {
                url: 'https://www.youtube.com/results?search_query=' + encodeURIComponent(topicQuery),
                searchQuery: topicQuery,
                title: topic + ' — Nursing Topic Review',
                channel: 'Topic review'
            },
            {
                url: 'https://www.youtube.com/results?search_query=' + encodeURIComponent(clinicalQuery),
                searchQuery: clinicalQuery,
                title: topic + ' — Clinical Judgment Review',
                channel: 'Clinical judgment'
            }
        ];
    }

    root.QuickRNYoutube = {
        getQuestionContext,
        getDisplayTopic,
        getSearchQuery,
        getVideoSearchUrl,
        getTwoVideos
    };
})(typeof window !== 'undefined' ? window : globalThis);
