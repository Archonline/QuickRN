# YouTube lesson autoplay setup

The Learning Center looks up a current, publicly available, embeddable YouTube lesson when a learner selects a topic. The video is played in the page's existing player; it does not open a search tab.

## Required one-time Vercel configuration

1. Create a Google Cloud project at https://console.cloud.google.com/.
2. Enable **YouTube Data API v3** for the project.
3. Create an API key under **APIs & Services → Credentials**.
4. Restrict the key to YouTube Data API v3. If practical, also apply an appropriate server-side restriction.
5. In the QuickRN Vercel project, open **Settings → Environment Variables**.
6. Add `YOUTUBE_API_KEY` with the API key as its value. Enable it for Production (and Preview if you test preview deployments).
7. Redeploy the project so the serverless function receives the variable.

The key is read only by `/api/youtube-search`; it is not sent to the browser. Do not place the key in HTML or client-side JavaScript.

## Playback behavior

- Selecting a topic requests a YouTube search and verifies that the selected result is public and embeddable.
- The selected video loads in the Learning Center player with autoplay enabled and muted to comply with browser autoplay policies. Learners can unmute in the player.
- YouTube may still restrict a video after lookup, or no embeddable video may exist for a topic. The player reports that condition instead of using a fabricated video ID.
- Search responses are cached for 30 minutes to reduce API quota use.
