import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { KebabMenu } from "../index";
import { useDrawer } from "../../context/DrawerContext";
const VideoCard = () => {
  const [isOpen] = useDrawer();
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
        image="https://picsum.photos/200/300"
        alt="green iguana"
      />
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <Avatar alt="Exion" src="https://i.pravatar.cc/300" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: 1,
              width: isOpen ? "230px" : "270px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                gutterBottom
                noWrap
                variant="body3"
                component="div"
                sx={{ color: "text.primary" }}
              >
                Jareen Gets Chased By Cops in His FIRST RACE! | GTA 5 RP
              </Typography>
              <KebabMenu />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                Exion
              </Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  100K Views
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  2 months ago
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
