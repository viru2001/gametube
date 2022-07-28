import axios from "axios";

const getWatchLaterService = async (token, userDispatch) => {
  try {
    const {
      data: { watchlater: watchLater },
    } = await axios.get(`/api/user/watchlater`, {
      headers: { authorization: token },
    });
    userDispatch({ type: "GET_WATCH_LATER", payload: watchLater });
  } catch (e) {
    console.log(e);
  }
};

export { getWatchLaterService };
