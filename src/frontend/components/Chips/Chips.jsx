import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import { useVideos } from "../../context";

const Chips = () => {
  const { categories, selectedCategory, videosDispatch } = useVideos();

  return (
    <Box sx={{ height: "40px", mb: 2 }}>
      <Stack direction="row" spacing={1} sx={{ m: 1 }}>
        {categories.map(({ _id, categoryName }) => {
          return (
            <Chip
              key={_id}
              label={categoryName}
              color="secondary"
              sx={{ cursor: "pointer" }}
              variant={
                categoryName === selectedCategory ? "filled" : "outlined"
              }
              onClick={() => {
                videosDispatch({
                  type: "SELECT_CATEGORY",
                  payload: categoryName,
                });
              }}
            />
          );
        })}
      </Stack>
      <Divider sx={{ borderBottomWidth: 1, bgcolor: "	#989898" }} />
    </Box>
  );
};

export { Chips };
