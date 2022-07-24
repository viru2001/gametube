import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Icon } from "@mui/material";
import { deletePlaylistService } from "../../services";
import { useAuth, useUser } from "../../context";

const PlaylistCard = ({ playlist }) => {
  const {
    auth: { token },
  } = useAuth();

  const { userDispatch } = useUser();
  const { _id: playlistId, title, videos } = playlist;
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "primary.medium",
        ":hover": { cursor: "pointer" },
      }}
    >
      {videos.length > 0 ? (
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="200"
            image={`http://i1.ytimg.com/vi/${videos[0]._id}/mqdefault.jpg`}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 200,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0, 0, 0, 0.54)",
              color: "white",
              padding: "60px",
            }}
          >
            <Typography variant="h5" sx={{ ml: "4" }}>
              {1}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" height="200" width="345" />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.54)",
              color: "white",
              padding: "70px",
            }}
          >
            <Typography variant="h6" sx={{ ml: "4" }}>
              Playlist is Empty
            </Typography>
          </Box>
        </Box>
      )}
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography variant="h6" color="text.primary">
          {title}
        </Typography>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-haspopup="true"
          onClick={() => {
            deletePlaylistService(token, userDispatch, playlistId);
          }}
        >
          <Icon
            className="material-icons-outlined"
            sx={{ color: "text.primary" }}
          >
            delete
          </Icon>
        </IconButton>
      </Box>
    </Card>
  );
};

export { PlaylistCard };
