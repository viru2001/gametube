import {
  removeFromHistoryService,
  dislikeVideoService,
  addToWatchLaterService,
  removeFromWatchLaterService,
  removeFromPlaylistService,
} from "../services";

const performKebabMenuOperation = (
  action,
  userDispatch,
  token,
  videoId,
  video,
  playlistId
) => {
  if (action === "RemoveFromHistory") {
    removeFromHistoryService(userDispatch, token, videoId);
  } else if (action === "DislikeVideo") {
    dislikeVideoService(userDispatch, token, videoId);
  } else if (action === "SaveToWatchLater") {
    addToWatchLaterService(userDispatch, token, video);
  } else if (action === "RemoveFromWatchLater") {
    removeFromWatchLaterService(userDispatch, token, videoId);
  } else if (action === "RemoveFromPlaylist") {
    removeFromPlaylistService(userDispatch, token, playlistId, videoId);
  }
};
export { performKebabMenuOperation };
