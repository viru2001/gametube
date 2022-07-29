import axios from "axios";

const addNewPlaylistService = async (newPlaylistName, token, userDispatch) => {
  try {
    const {
      data: { playlists },
    } = await axios.post(
      `/api/user/playlists`,
      { playlist: { title: newPlaylistName, description: "" } },
      {
        headers: { authorization: token },
      }
    );
    userDispatch({ type: "SET_PLAYLISTS", payload: playlists });
  } catch (e) {
    console.log(e);
  }
};

export { addNewPlaylistService };
