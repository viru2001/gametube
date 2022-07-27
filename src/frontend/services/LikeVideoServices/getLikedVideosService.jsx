import axios from "axios";

const getLikedVideosService = async (token, userDispatch) => {
  try {
    const {
      data: { likes },
    } = await axios.get(`/api/user/likes`, {
      headers: { authorization: token },
    });
    userDispatch({ type: "GET_LIKED_VIDEOS", payload: likes });
  } catch (e) {
    console.log(e);
  }
};

export { getLikedVideosService };