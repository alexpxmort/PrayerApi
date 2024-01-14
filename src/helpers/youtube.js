import fetch from 'node-fetch';

const search = async (
  channelId = '',
  key,
  withPlaylist = false,
  limit = 10,
  options = {}
) => {
  // Specify your YouTube Data API key
  const apiKey = process.env.YOUTUBE_API_KEY;

  // Set the parameters for the search request

  let params = new URLSearchParams({
    q: key,
    maxResults: limit,
    type: withPlaylist ? 'video,playlist' : 'video',
    part: 'snippet',
    key: apiKey,
    ...options,
    order: 'date'
  });

  if (channelId) {
    params = new URLSearchParams({
      channelId: channelId,
      maxResults: limit,
      type: withPlaylist ? 'video,playlist' : 'video',
      part: 'snippet',
      key: apiKey,
      order: 'date',
      publishedAfter: '1970-01-01T00:00:00Z',
      ...options
    });
  }

  const apiUrl = `https://www.googleapis.com/youtube/v3/search?${params.toString()}`;

  try {
    // Make the search request using fetch
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `YouTube API request failed with status: ${response.status}`
      );
    }

    // Parse the response as JSON
    const data = await response.json();

    // Extract the search results
    const items = data.items;

    // Return the search results
    return items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      date: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle
    }));
  } catch (error) {
    console.error('Error during YouTube API search:', error.message);
    throw error;
  }
};

export { search };
