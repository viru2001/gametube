import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Icon } from "@mui/material";
import { PlaylistDialog } from "../PlaylistDialog/PlaylistDialog";
import { useLocation, useNavigate, useParams } from "react-router";
import { performKebabMenuOperation } from "../../utils";
import { useAuth, useUser, useVideos } from "../../context";

const ITEM_HEIGHT = 48;

function KebabMenu({ videoId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClickOpen = () => {
    handleClose();
    setIsDialogOpen(true);
  };

  const handlePlaylistDialogClose = () => {
    setIsDialogOpen(false);
  };

  const navigate = useNavigate();
  const {
    auth: { status, token },
  } = useAuth();

  const { userState, userDispatch } = useUser();

  const { videos } = useVideos();
  const video = videos.find(video => video._id === videoId);

  const checkVideoInWatchLater = (videoId, watchLater) =>
    watchLater.some(({ _id }) => _id === videoId);

  const [isVideoInWatchLater, setIsVideoInWatchLater] = useState(false);

  useEffect(() => {
    if (status) {
      setIsVideoInWatchLater(
        checkVideoInWatchLater(videoId, userState.watchLater)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userState.watchLater]);

  const { playlistId } = useParams();

  const handleKebabMenuOptionClicked = (
    action,
    userDispatch,
    token,
    videoId
  ) => {
    handleClose();

    if (action === "SaveToWatchLater" || action === "SaveToPlaylist") {
      if (!status) {
        navigate("/login", { state: { from: location }, replace: true });
      }
      if (action === "SaveToPlaylist") {
        handleClickOpen();
      }
    }
    if (action !== "SaveToPlaylist") {
      performKebabMenuOperation(action, userDispatch, token, videoId, video,playlistId);
    }
  };

  const location = useLocation().pathname;

  const homePageMenuOptions = [
    {
      icon: "watch_later",
      text: isVideoInWatchLater
        ? "Remove From Watch Later"
        : "Save to Watch Later",
      action: isVideoInWatchLater ? "RemoveFromWatchLater" : "SaveToWatchLater",
    },
    {
      icon: "playlist_play",
      text: "Save to Playlist",
      action: "SaveToPlaylist",
    },
  ];

  const historyPageMenuOptions = [
    {
      icon: "delete",
      text: "Remove from History",
      action: "RemoveFromHistory",
    },
  ];

  const likedVideosPageMenuOptions = [
    {
      icon: "thumb_down",
      text: "Dislike",
      action: "DislikeVideo",
    },
  ];

  const watchLaterPageMenuOptions = [
    {
      icon: "delete",
      text: "Remove from Watch Later",
      action: "RemoveFromWatchLater",
    },
  ];

  const playlistPageMenuOptions = [
    {
      icon: "delete",
      text: "Remove from Playlist",
      action: "RemoveFromPlaylist",
    },
  ];

  let menuOptions;
  if (location === "/") {
    menuOptions = homePageMenuOptions;
  } else if (location === "/history") {
    menuOptions = historyPageMenuOptions;
  } else if (location === "/liked_videos") {
    menuOptions = likedVideosPageMenuOptions;
  } else if (location === "/watch_later") {
    menuOptions = watchLaterPageMenuOptions;
  } else {
    menuOptions = playlistPageMenuOptions;
  }
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={isMenuOpen ? "long-menu" : undefined}
        aria-expanded={isMenuOpen ? "true" : undefined}
        aria-haspopup="true"
        // color="text.primary"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: "text.primary" }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            backgroundColor: "#181919",
          },
        }}
      >
        {menuOptions.map(({ icon, text, action }, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() =>
                handleKebabMenuOptionClicked(
                  action,
                  userDispatch,
                  token,
                  videoId
                )
              }
            >
              <Icon
                className="material-icons-outlined"
                sx={{ color: "text.primary", mr: 1 }}
              >
                {icon}
              </Icon>
              {text}
            </MenuItem>
          );
        })}
      </Menu>

      <PlaylistDialog
        open={isDialogOpen}
        onClose={handlePlaylistDialogClose}
        video={video}
      />
    </div>
  );
}

export { KebabMenu };
