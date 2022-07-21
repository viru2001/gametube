import axios from "axios";

const addToHistoryService = async (userDispatch, token, video) => {
  try {
    const {
      data: { history },
    } = await axios.post(
      `/api/user/history`,
      { video: video },
      {
        headers: { authorization: token },
      }
    );
    userDispatch({ type: "UPDATE_HISTORY", payload: history });
  } catch (e) {
    console.log(e);
  }
};
export { addToHistoryService };
