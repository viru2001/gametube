import axios from "axios";

const getUserPlaylistsService = async (token, userDispatch) => {
  try {
    const {
      data: { playlists },
    } = await axios.get(`/api/user/playlists`, {
      headers: { authorization: token },
    });
    userDispatch({ type: "SET_PLAYLISTS", payload: playlists });
  } catch (e) {
    console.log(e);
  }
};

export { getUserPlaylistsService };
