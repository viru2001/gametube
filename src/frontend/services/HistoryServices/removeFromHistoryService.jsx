import axios from "axios";

const removeFromHistoryService = async (userDispatch, token, videoId) => {
  try {
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: token },
    });
    userDispatch({ type: "UPDATE_HISTORY", payload: history });
  } catch (e) {
    console.log(e);
  }
};
export { removeFromHistoryService };
