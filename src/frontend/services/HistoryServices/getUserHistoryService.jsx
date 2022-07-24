import axios from "axios";
const getUserHistoryService = async (token, userDispatch) => {
  try {
    const {
      data: { history },
    } = await axios.get(`/api/user/history`, {
      headers: { authorization: token },
    });
    userDispatch({ type: "UPDATE_HISTORY", payload: history });
  } catch (e) {
    console.log(e);
  }
};

export { getUserHistoryService };
