import axios from "axios";

const addToPlaylistService = async (
  userDispatch,
  token,
  playlistId,
  video
) => {
  try {
    const {
      data: { playlist },
    } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video: { ...video } },
      {
        headers: { authorization: token },
      }
    );
    userDispatch({ type: "UPDATE_PLAYLIST", payload: playlist });
  } catch (e) {
    console.log(e);
  }
};

export { addToPlaylistService };
