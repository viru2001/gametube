const getFilteredVideos = (videos, selectedCategory) => {
  if (selectedCategory === "All") {
    return videos;
  }
  return videos.filter(video => video.category === selectedCategory);
};
export { getFilteredVideos };
