import List from "@mui/material/List";

import { Typography } from "@mui/material";
import { PlaylistListItem } from "../PlaylistListItem/PlaylistListItem";

const PlaylistList = ({ playlists, video }) => {

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "primary.main" }}>
      {playlists.length > 0 ? (
        playlists.map((playlist, index) => {
          return (
            <PlaylistListItem key={index} playlist={playlist} video={video} />
          );
        })
      ) : (
        <Typography variant="body3" sx={{ ml: 4 }}>
          No Playlists Found
        </Typography>
      )}
    </List>
  );
};

export { PlaylistList };
