import { VideoCard, Chips } from "../index";
import { Grid, Box, Button } from "@mui/material";
import { useEffect } from "react";

import { useVideos, useUser, useAuth } from "../../context";

import {
  fetchVideosService,
  fetchCategoryService,
  clearHistoryService,
} from "../../services";
import { getFilteredVideos, getSearchedVideos } from "../../utils";
import { useLocation } from "react-router";

const VideoList = () => {
  const { videos, searchQuery, selectedCategory, videosDispatch } = useVideos();

  const {
    userState: { historyVideos, likedVideos, watchLater },
    userDispatch,
  } = useUser();

  const {
    auth: { token },
  } = useAuth();

  let finalVideos;

  const location = useLocation().pathname;

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { videos },
        } = await fetchVideosService();
        videosDispatch({ type: "FETCH_VIDEOS", payload: videos });
      } catch (e) {
        console.log(e);
      }
    })();

    (async () => {
      try {
        const {
          data: { categories },
        } = await fetchCategoryService();
        videosDispatch({ type: "INIT_CATEGORIES", payload: categories });
      } catch (e) {
        console.log(e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (location === "/") {
    const searchedVideos = getSearchedVideos(videos, searchQuery);
    const filteredVideos = getFilteredVideos(searchedVideos, selectedCategory);
    finalVideos = filteredVideos;
  } else if (location === "/history") {
    finalVideos = historyVideos;
  } else if (location === "/liked_videos") {
    finalVideos = likedVideos;
  } else if (location === "/watch_later") {
    finalVideos = watchLater;
  }
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        mt: 6,
        backgroundColor: "primary.faint",
        minHeight: "calc( 100vh - 48px )",
      }}
    >
      {location === "/" ? <Chips /> : <></>}
      {location === "/history" ? (
        <Button
          variant="contained"
          sx={{
            backgroundColor: "secondary.main",
            color: "#363636",
            ":hover": { backgroundColor: "secondary.light" },
            mb: 2,
          }}
          onClick={() => clearHistoryService(token, userDispatch)}
        >
          Clear History
        </Button>
      ) : (
        <></>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {finalVideos.map((video, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { VideoList };
