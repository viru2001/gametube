import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate, useLocation } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./Login.css";
import { CssTextField } from "../../components";
import { useAuth } from "../../context";
import { loginService } from "../../services";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || -1;

  const loginFormSubmitHandler = async user => {
    const [name, authToken] = await loginService(user);
    if (authToken !== undefined) {
      localStorage.setItem("AUTH_TOKEN", authToken);
      localStorage.setItem("username", name);
      setAuth(auth => ({
        ...auth,
        status: true,
        token: authToken,
        username: name,
      }));

      navigate(from, { replace: true });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{ bgcolor: "primary.faint" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={e => {
              e.preventDefault();
              loginFormSubmitHandler(user);
            }}
            noValidate
            sx={{ mt: 1 }}
          >
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color="secondary"
              onChange={e => setUser({ ...user, email: e.target.value })}
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword === true ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              color="secondary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ color: "text.secondary" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
            >
              Login
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
              onClick={() =>
                setUser({
                  email: "vireshfegade@gmail.com",
                  password: "viresh123",
                })
              }
            >
              Login as Guest
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 2,
              }}
            >
              <Link to="/signup" variant="body2" className="link">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export { Login };
