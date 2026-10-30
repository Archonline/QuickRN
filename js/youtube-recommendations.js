(function (root) {
    'use strict';

    const TEXT_FIELDS = [
        'keyPhrase', 'clinicalFocus', 'focusArea', 'learningObjective', 'learningObjectives',
        'concept', 'subcategory', 'topic', 'category', 'clientNeedDomain', 'domain',
        'contentArea', 'subject', 'cleanTitle', 'title', 'promptTitle', 'questionOnly',
        'actualQuestion', 'questionText', 'question', 'stem', 'objective'
    ];
    const NESTED_FIELDS = ['caseStudy', 'case', 'scenario'];
    const NESTED_TEXT_KEYS = ['title', 'name', 'summary', 'description', 'text', 'content', 'narrative', 'scenario'];
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
        const q=question&&typeof question==='object'?question:{};
        const preferred=[q.keyPhrase,q.clinicalFocus,q.focusArea,q.learningObjective,q.concept,q.topic,q.subcategory,q.category,q.clientNeedDomain,q.questionOnly,q.actualQuestion,q.cleanTitle,q.title,q.questionText,q.question,q.stem].map(v=>plainText(v,0)).filter(Boolean);
        const unique=preferred.filter((v,i,a)=>a.findIndex(x=>x.toLowerCase()===v.toLowerCase())===i);
        let context=unique.join(' ')||uniqueFragments(q).join(' ')||'clinical nursing fundamentals';
        return Array.from(context).slice(0,240).join('').trim();
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
        const q = question && typeof question === 'object' ? question : {};
        const topic = getDisplayTopic(q);
        const topicQuery = getSearchQuery(q, 'review');
        const clinicalQuery = getSearchQuery(q, 'clinical');
        const rawVideos = Array.isArray(q.videos) ? q.videos : [];
        const candidates = rawVideos.slice(0, 2);
        if (!candidates.length) {
            const id = q.youtubeId || q.videoId || q.youtubeVideoId;
            if (id) candidates.push({ id, title: topic + ' — Nursing Topic Review', provider: 'Recommended lecture' });
        }
        const parseId = value => {
            const v = String(value || '').trim();
            if (/^[A-Za-z0-9_-]{11}$/.test(v)) return v;
            const match = v.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
            return match ? match[1] : '';
        };
        const embedded = candidates.map((video, index) => {
            const id = parseId(video && (video.id || video.videoId || video.youtubeId || video.url));
            if (!id) return null;
            return {
                id,
                url: 'https://www.youtube.com/watch?v=' + id,
                embedUrl: 'https://www.youtube-nocookie.com/embed/' + id,
                searchQuery: '',
                title: video.title || (index ? topic + ' — Clinical Judgment Review' : topic + ' — Nursing Topic Review'),
                channel: video.provider || video.channel || (index ? 'Clinical judgment' : 'Topic review')
            };
        }).filter(Boolean);
        if (embedded.length) return embedded;
        return [
            { url: 'https://www.youtube.com/results?search_query=' + encodeURIComponent(topicQuery), searchQuery: topicQuery, title: topic + ' — Nursing Topic Review', channel: 'Topic review', embedUrl: '' },
            { url: 'https://www.youtube.com/results?search_query=' + encodeURIComponent(clinicalQuery), searchQuery: clinicalQuery, title: topic + ' — Clinical Judgment Review', channel: 'Clinical judgment', embedUrl: '' }
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
