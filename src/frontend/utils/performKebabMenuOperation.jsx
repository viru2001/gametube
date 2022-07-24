import { removeFromHistoryService } from "../services";

const performKebabMenuOperation = (action, userDispatch, token, videoId) => {
  if (action === "RemoveFromHistory") {
    removeFromHistoryService(userDispatch, token, videoId);
  }
};
export { performKebabMenuOperation };
