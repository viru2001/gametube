import axios from "axios";

const likedVideoService = async (userDispatch, token, video) => {
  try {
    const {
      data: { likes },
    } = await axios.post(
      `/api/user/likes`,
      { video },
      {
        headers: { authorization: token },
      }
    );
    userDispatch({ type: "UPDATE_LIKED_VIDEOS", payload: likes });
  } catch (e) {
    console.log(e);
  }
};

export { likedVideoService };
