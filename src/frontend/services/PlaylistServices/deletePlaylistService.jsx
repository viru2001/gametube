import axios from "axios";

const deletePlaylistService = async (token, userDispatch, playlistId) => {
  try {
    const {
      data: { playlists },
    } = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });
    userDispatch({ type: "SET_PLAYLISTS", payload: playlists });
  } catch (e) {
    console.log(e);
  }
};

export { deletePlaylistService };
