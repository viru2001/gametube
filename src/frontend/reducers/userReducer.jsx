const userInitialState = {
  historyVideos: [],
};
const userReducer = (userState, { type, payload }) => {
  switch (type) {
    case "UPDATE_HISTORY":
      return { ...userState, historyVideos: payload };

    default:
      return userState;
  }
};

export { userReducer, userInitialState };
