import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAuth, useUser } from "../../context";
import { addNewPlaylistService } from "../../services";

function CreatePlaylistDialog({ onClose, open }) {
  const [playlistName, setPlaylistName] = useState("");

  const {
    auth: { token },
  } = useAuth();

  const { userDispatch } = useUser();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ backgroundColor: "primary.main" }}>
        Create New Playlist
      </DialogTitle>

      <Box
        sx={{
          bgcolor: "primary.medium",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Enter Playlist Name"
          variant="filled"
          color="secondary"
          sx={{
            bgcolor: "primary.faint",
            m: 1,
          }}
          value={playlistName}
          onChange={e => setPlaylistName(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ m: 1 }}
          onClick={() => {
            addNewPlaylistService(playlistName, token, userDispatch);
            onClose();
          }}
        >
          Create
        </Button>
      </Box>
    </Dialog>
  );
}

export { CreatePlaylistDialog };
