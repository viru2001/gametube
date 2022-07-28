import {
  removeFromHistoryService,
  dislikeVideoService,
  addToWatchLaterService,
  removeFromWatchLaterService,
} from "../services";

const performKebabMenuOperation = (
  action,
  userDispatch,
  token,
  videoId,
  video
) => {
  if (action === "RemoveFromHistory") {
    removeFromHistoryService(userDispatch, token, videoId);
  } else if (action === "DislikeVideo") {
    dislikeVideoService(userDispatch, token, videoId);
  } else if (action === "SaveToWatchLater") {
    addToWatchLaterService(userDispatch, token, video);
  } else if (action === "RemoveFromWatchLater") {
    removeFromWatchLaterService(userDispatch, token, videoId);
  }
};
export { performKebabMenuOperation };
