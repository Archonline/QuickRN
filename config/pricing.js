/**
 * QuickRN pricing configuration — reserved for a future release.
 *
 * This file is intentionally not imported by any page and must remain hidden
 * from the current UI until pricing is explicitly enabled.
 * No payment, subscription, or access-control behavior is active.
 */
(function (root) {
    'use strict';

    root.QUICKRN_PRICING_CONFIG = Object.freeze({
        enabled: false,
        visible: false,
        checkoutEnabled: false,
        currency: 'PHP',
        symbol: '₱',
        tiers: Object.freeze([
            Object.freeze({ id: 'free', name: 'Free', amount: 0 }),
            Object.freeze({ id: 'tier_199', name: '₱199', amount: 199 }),
            Object.freeze({ id: 'tier_500', name: '₱500', amount: 500 }),
            Object.freeze({ id: 'tier_1200', name: '₱1,200', amount: 1200 })
        ])
    });
})(typeof window !== 'undefined' ? window : globalThis);
