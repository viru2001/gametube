const getSearchedVideos = (videos, searchQuery) => {
  return videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};
export { getSearchedVideos };
