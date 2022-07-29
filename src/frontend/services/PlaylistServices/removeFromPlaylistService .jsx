import axios from "axios";

const removeFromPlaylistService = async (
  userDispatch,
  token,
  playlistId,
  videoId
) => {
  try {
    const {
      data: { playlist },
    } = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
      headers: { authorization: token },
    });
    userDispatch({ type: "UPDATE_PLAYLIST", payload: playlist });
  } catch (e) {
    console.log(e);
  }
};

export { removeFromPlaylistService };
