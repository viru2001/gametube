const userInitialState = {
  historyVideos: [],
  likedVideos: [],
  watchLater: [],
};

const userReducer = (userState, { type, payload }) => {
  switch (type) {
    case "UPDATE_HISTORY":
      return { ...userState, historyVideos: payload };
    case "GET_LIKED_VIDEOS":
      return {
        ...userState,
        likedVideos: [...payload],
      };
    case "UPDATE_LIKED_VIDEOS":
      return { ...userState, likedVideos: [...payload] };
    case "GET_WATCH_LATER":
      return {
        ...userState,
        watchLater: [...payload],
      };
    case "UPDATE_WATCH_LATER":
      return { ...userState, watchLater: [...payload] };
    default:
      return userState;
  }
};

export { userReducer, userInitialState };
