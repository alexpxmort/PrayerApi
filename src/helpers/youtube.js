import * as youtubesearchapi from 'youtube-search-api';

const search = async (key, withPlaylist = false, limit = 10, options = []) => {
  return await youtubesearchapi.GetListByKeyword(
    key,
    withPlaylist,
    limit,
    options
  );
};

export { search };
