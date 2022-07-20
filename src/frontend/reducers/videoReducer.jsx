const videosInitialState = {
  videos: [],
  searchQuery: "",
  selectedCategory: "All",
};

const videosReducer = (videosState, { type, payload }) => {
  switch (type) {
    case "FETCH_VIDEOS":
      return { ...videosState, videos: payload };
    default:
      return videosState;
  }
};

export { videosReducer, videosInitialState };
