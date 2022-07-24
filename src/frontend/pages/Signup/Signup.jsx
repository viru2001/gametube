import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { CssTextField } from "../../components";
import { useAuth } from "../../context";
import { signupService } from "../../services";

const Signup = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signupFormSubmitHandler = async user => {
    const [name, authToken] = await signupService(user);
    if (authToken !== undefined) {
      localStorage.setItem("AUTH_TOKEN", authToken);
      localStorage.setItem("username", name);
      setAuth(auth => ({
        ...auth,
        status: true,
        token: localStorage.getItem("AUTH_TOKEN"),
        username: name,
      }));
      navigate("/", { replace: true });
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  };
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={e => {
              e.preventDefault();
              signupFormSubmitHandler(user);
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  color="secondary"
                  onChange={e =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  color="secondary"
                  onChange={e => setUser({ ...user, lastName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  color="secondary"
                  onChange={e => setUser({ ...user, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword === true ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
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
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm Password"
                  type={showConfirmPassword === true ? "text" : "password"}
                  id="confirm-password"
                  autoComplete="new-password"
                  color="secondary"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                          sx={{ color: "text.secondary" }}
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onChange={e =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
            >
              Sign Up
            </Button>
            <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
              <Link to="/login" variant="body2" className="link">
                Already have an account? Log in
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export { Signup };
