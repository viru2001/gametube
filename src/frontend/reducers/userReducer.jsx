const userInitialState = {
  historyVideos: [],
  likedVideos: [],
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
    default:
      return userState;
  }
};

export { userReducer, userInitialState };
