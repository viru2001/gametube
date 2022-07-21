import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router";

import { KebabMenu } from "../index";
import { useDrawer } from "../../context/";

const VideoCard = ({ video }) => {
  const { _id, thumbnail, title, creatorAvatar, creator, views } = video;

  const [isOpen] = useDrawer();
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "primary.medium",
        ":hover": { cursor: "pointer" },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={thumbnail}
        alt="green iguana"
        sx={{
          ":hover": { cursor: "pointer" },
        }}
        onClick={() => {
          navigate(`/video/${_id}`);
        }}
      />
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <Avatar alt={`${creator}'s image`} src={creatorAvatar} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: 1,
              width: isOpen ? "230px" : "270px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Tooltip
                title={title}
                onClick={() => {
                  navigate(`/video/${_id}`);
                }}
              >
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {title}
                </Typography>
              </Tooltip>
              <KebabMenu videoId={_id} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", mt: 1 }}>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  {creator}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.primary", ml: "auto", mr: 1 }}
                >
                  {`views • ${views}`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export { VideoCard };
