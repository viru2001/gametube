import { VideoCard } from "../index";
import { Grid, Box } from "@mui/material";
import { useEffect } from "react";

import { useVideos } from "../../context";
import { fetchVideosService } from "../../services";

const VideoList = () => {
  const { videos, videosDispatch } = useVideos();

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        mt: 8,
        backgroundColor: "primary.faint",
        minHeight: "calc( 100vh - 64px )",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { VideoList };
