import axios from "axios";

const addToWatchLaterService = async (userDispatch, token, video) => {
  try {
    const {
      data: { watchlater: watchLater },
    } = await axios.post(
      `/api/user/watchlater`,
      { video },
      {
        headers: { authorization: token },
      }
    );
    userDispatch({ type: "UPDATE_WATCH_LATER", payload: watchLater });
  } catch (e) {
    console.log(e);
  }
};

export { addToWatchLaterService };
