const userInitialState = {
  historyVideos: [],
  likedVideos: [],
  watchLater: [],
  playlists: [],
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
    case "SET_PLAYLISTS":
      return { ...userState, playlists: payload };
    case "UPDATE_PLAYLIST":
      return {
        ...userState,
        playlists: userState.playlists.map(playlist =>
          playlist._id === payload._id ? payload : playlist
        ),
      };
    case "LOGOUT":
      return {
        historyVideos: [],
        likedVideos: [],
        watchLater: [],
        playlists: [],
      };
    default:
      return userState;
  }
};

export { userReducer, userInitialState };
