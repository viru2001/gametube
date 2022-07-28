import axios from "axios";

const removeFromWatchLaterService = async (userDispatch, token, _id) => {
  try {
    const {
      data: { watchlater: watchLater },
    } = await axios.delete(`/api/user/watchlater/${_id}`, {
      headers: { authorization: token },
    });
    userDispatch({ type: "UPDATE_WATCH_LATER", payload: watchLater });
  } catch (e) {}
};

export { removeFromWatchLaterService };
