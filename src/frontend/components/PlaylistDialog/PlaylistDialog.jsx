import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { PlaylistList } from "../index";

const playlists = ["gaming", "valorant", "vlogs", "music"];

function PlaylistDialog(props) {
  const { onClose, open } = props;

  const [isCreateBtnClicked, setIsCreateBtnClicked] = useState(false);

  const handleClose = () => {
    onClose();
  };

  // const handleListItemClick = value => {
  //   onClose(value);
  // };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ backgroundColor: "primary.main" }}>
        Add to Playlist
      </DialogTitle>
      <List sx={{ pt: 0, backgroundColor: "primary.main" }}>
        <PlaylistList playlists={playlists} />

        {!isCreateBtnClicked && (
          <ListItem
            autoFocus
            button
            // onClick={() => handleListItemClick()}
          >
            <ListItemAvatar>
              <Avatar
                sx={{ color: "secondary.main", bgcolor: "primary.faint" }}
              >
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Create New Playlist"
              onClick={() => {
                setIsCreateBtnClicked(true);
              }}
            />
          </ListItem>
        )}
      </List>

      {isCreateBtnClicked && (
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
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ m: 1 }}
            onClick={() => {
              setIsCreateBtnClicked(false);
            }}
          >
            Create
          </Button>
        </Box>
      )}
    </Dialog>
  );
}

export { PlaylistDialog };
