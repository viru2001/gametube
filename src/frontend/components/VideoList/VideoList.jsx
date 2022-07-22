import { VideoCard, Chips } from "../index";
import { Grid, Box } from "@mui/material";
import { useEffect } from "react";

import { useVideos } from "../../context";
import { fetchVideosService, fetchCategoryService } from "../../services";
import { getFilteredVideos, getSearchedVideos } from "../../utils";

const VideoList = () => {
  const { videos, searchQuery, selectedCategory, videosDispatch } = useVideos();

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

  const searchedVideos = getSearchedVideos(videos, searchQuery);
  const filteredVideos = getFilteredVideos(searchedVideos, selectedCategory);

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
      <Chips />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filteredVideos.map((video, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { VideoList };
