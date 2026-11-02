// Vercel serverless endpoint: find a currently embeddable YouTube lesson.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const query = String(req.query?.q || '').trim().slice(0, 180);
  if (!query) return res.status(400).json({ error: 'A lesson topic is required.' });
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) return res.status(503).json({ error: 'YouTube playback is not configured. Add YOUTUBE_API_KEY in Vercel project environment variables.' });
  try {
    const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
    searchUrl.search = new URLSearchParams({
      part: 'snippet', type: 'video', videoEmbeddable: 'true',
      videoSyndicated: 'true', maxResults: '8', order: 'relevance',
      q: query + ' nursing NCLEX', key
    }).toString();
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();
    if (!searchResponse.ok) {
      return res.status(502).json({ error: searchData?.error?.message || 'YouTube search failed.' });
    }
    const ids = (searchData.items || []).map(item => item.id?.videoId).filter(Boolean);
    if (!ids.length) return res.status(404).json({ error: 'No embeddable lesson video was found for this topic.' });
    const detailsUrl = new URL('https://www.googleapis.com/youtube/v3/videos');
    detailsUrl.search = new URLSearchParams({ part: 'status,snippet', id: ids.join(','), key }).toString();
    const detailsResponse = await fetch(detailsUrl);
    const detailsData = await detailsResponse.json();
    if (!detailsResponse.ok) return res.status(502).json({ error: 'Could not verify YouTube video availability.' });
    const video = (detailsData.items || []).find(item =>
      item.status?.embeddable === true &&
      item.status?.privacyStatus === 'public' &&
      item.snippet?.liveBroadcastContent !== 'upcoming'
    );
    if (!video) return res.status(404).json({ error: 'No currently available embeddable lesson video was found.' });
    return res.status(200).json({
      videoId: video.id,
      title: video.snippet?.title || 'Nursing lesson',
      channel: video.snippet?.channelTitle || 'YouTube'
    });
  } catch (error) {
    return res.status(502).json({ error: 'Unable to reach YouTube right now.' });
  }
}
