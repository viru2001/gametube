const videosInitialState = {
  videos: [],
  searchQuery: "",
  categories: [],
  selectedCategory: "All",
};

const videosReducer = (videosState, { type, payload }) => {
  switch (type) {
    case "FETCH_VIDEOS":
      return { ...videosState, videos: payload };
    case "INIT_CATEGORIES":
      return { ...videosState, categories: payload };
    case "SELECT_CATEGORY":
      return { ...videosState, selectedCategory: payload };
    default:
      return videosState;
  }
};

export { videosReducer, videosInitialState };
