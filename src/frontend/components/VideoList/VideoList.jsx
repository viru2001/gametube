import { VideoCard } from "../index";
import { Grid, Box } from "@mui/material";

const VideoList = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, mt: 8, backgroundColor: "primary.faint" }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(15)).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <VideoCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { VideoList };
