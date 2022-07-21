import axios from "axios";

const clearHistoryService = async (token, userDispatch) => {
  try {
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/all`, {
      headers: { authorization: token },
    });
    userDispatch({ type: "UPDATE_HISTORY", payload: history });
  } catch (e) {
    console.log(e);
  }
};

export { clearHistoryService };
