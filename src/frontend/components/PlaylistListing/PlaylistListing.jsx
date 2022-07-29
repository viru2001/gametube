import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { CreatePlaylistDialog } from "../CreatePlaylistDialog/CreatePlaylistDialog";
import { PlaylistCard } from "../PlaylistCard/PlaylistCard";
import { useUser } from "../../context";

const PlaylistListing = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreatePlaylistDialogClose = () => {
    setIsDialogOpen(false);
  };

  const {
    userState: { playlists },
  } = useUser();

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
      <Button
        variant="contained"
        sx={{
          backgroundColor: "secondary.main",
          color: "#363636",
          ":hover": { backgroundColor: "secondary.light" },
          mb: 2,
        }}
        onClick={() => {
          setIsDialogOpen(true);
        }}
      >
        Add New Playlist
      </Button>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {playlists.map((playlist, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <PlaylistCard playlist={playlist} />
          </Grid>
        ))}
      </Grid>

      <CreatePlaylistDialog
        open={isDialogOpen}
        onClose={handleCreatePlaylistDialogClose}
      />
    </Box>
  );
};
export { PlaylistListing };
