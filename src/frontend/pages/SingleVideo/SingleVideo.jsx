import ReactPlayer from "react-player/youtube";
import { useNavigate, useParams, useLocation } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

import { Drawer } from "../../components";
import { useDrawer, useVideos, useAuth, useUser } from "../../context";
import {
  addToHistoryService,
  likedVideoService,
  dislikeVideoService,
} from "../../services";

const SingleVideo = () => {
  const { videoId } = useParams();
  const [isOpen] = useDrawer();

  const { videos } = useVideos();
  const video = videos.find(video => video._id === videoId);
  const { _id, title, creatorAvatar, creator, views, description } = video;

  const {
    auth: { status, token },
  } = useAuth();

  const {
    userState: { likedVideos },
    userDispatch,
  } = useUser();
  const historyHandler = () => {
    if (status) {
      addToHistoryService(userDispatch, token, video);
    }
  };

  const navigate = useNavigate();
  let location = useLocation();

  const isVideoLiked = (videoId, likedVideos) =>
    likedVideos.some(({ _id }) => _id === videoId);

  const handleLikeClick = () => {
    if (!status) {
      navigate("/login", { state: { from: location }, replace: true });
    } else {
      isVideoLiked(_id, likedVideos)
        ? dislikeVideoService(userDispatch, token, _id)
        : likedVideoService(userDispatch, token, video);
    }
  };
  return (
    <>
      <Drawer
        content={
          <Box
            sx={{
              mt: 8,
              backgroundColor: "primary.faint",
              minHeight: "calc( 100vh - 48px )",
              p: 4,
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/embed/${videoId}`}
              controls={true}
              height={"70vh"}
              width={isOpen ? "calc( 100vw - 282px )" : "calc( 100vw - 147px )"}
              onStart={historyHandler}
            />

            <Box>
              <Typography variant="h5" my={2} ml={2}>
                {title}
              </Typography>

              <Divider sx={{ borderBottomWidth: 1, bgcolor: "	#989898" }} />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar alt="Exion" src={creatorAvatar} sx={{ ml: 2 }} />
                <Typography variant="h6" my={2} ml={2}>
                  {creator}
                </Typography>
                <Box sx={{ ml: "auto", display: "flex", gap: "20px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => handleLikeClick()}
                  >
                    <Icon
                      className={"material-icons-outlined"}
                      color="secondary"
                    >
                      {isVideoLiked(_id, likedVideos)
                        ? "thumb_down"
                        : "thumb_up"}
                    </Icon>
                    <Typography variant="h6" my={2} ml={1}>
                      {isVideoLiked(_id, likedVideos) ? "Dislike" : "Like"}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" , mr:4 }}>
                    <Icon
                      className={"material-icons-outlined"}
                      color="secondary"
                    >
                      playlist_play
                    </Icon>
                    <Typography variant="h6" my={2} ml={1}>
                      Save
                    </Typography>
                  </Box>

                  {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Icon
                      className={"material-icons-outlined"}
                      color="secondary"
                    >
                      watch_later
                    </Icon>
                    <Typography variant="h6" my={2} ml={1}>
                      Watch Later
                    </Typography>
                  </Box> */}
                </Box>
              </Box>
              <Divider sx={{ borderBottomWidth: 1, bgcolor: "	#989898" }} />
            </Box>

            <Box sx={{ ml: 2 }}>
              <Typography variant="body1" my={1}>
                {views} views
              </Typography>
            </Box>

            <Box sx={{ ml: 2 }}>
              <Typography variant="h6" my={2}>
                Description
              </Typography>
              <Typography variant="body2" my={2}>
                {description}
              </Typography>
            </Box>
          </Box>
        }
      />
    </>
  );
};

export { SingleVideo };
