import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useAuth, useUser } from "../../context";
import {
  addToPlaylistService,
  removeFromPlaylistService,
} from "../../services";

const PlaylistListItem = ({ playlist, video }) => {
  const {
    auth: { token },
  } = useAuth();

  const { userDispatch } = useUser();

  const isVideoInPlaylist = playlist.videos.some(
    videoo => videoo._id === video._id
  );

  const { title, _id: playlistId } = playlist;

  const labelId = `checkbox-list-label-${title}`;

  return (
    <ListItem key={title} disablePadding>
      <ListItemButton role={undefined} onClick={() => {}} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            disableRipple
            color="secondary"
            checked={isVideoInPlaylist}
            inputProps={{ "aria-labelledby": labelId }}
            onChange={() => {
              isVideoInPlaylist
                ? removeFromPlaylistService(
                    userDispatch,
                    token,
                    playlistId,
                    video._id
                  )
                : addToPlaylistService(userDispatch, token, playlistId, video);
            }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export { PlaylistListItem };
