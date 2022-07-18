import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#91DD03",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#91DD03",
    },
  },
});

export { CssTextField };
