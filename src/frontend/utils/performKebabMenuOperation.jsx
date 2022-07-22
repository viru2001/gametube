import { removeFromHistoryService, dislikeVideoService } from "../services";

const performKebabMenuOperation = (action, userDispatch, token, videoId) => {
  if (action === "RemoveFromHistory") {
    removeFromHistoryService(userDispatch, token, videoId);
  } else if (action === "DislikeVideo") {
    dislikeVideoService(userDispatch, token, videoId);
  }
};
export { performKebabMenuOperation };
