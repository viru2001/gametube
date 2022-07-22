import axios from "axios";

const dislikeVideoService = async (userDispatch, token, _id) => {
  try {
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${_id}`, {
      headers: { authorization: token },
    });
    userDispatch({ type: "UPDATE_LIKED_VIDEOS", payload: likes });
  } catch (e) {
    console.log(e);
  }
};

export { dislikeVideoService };
