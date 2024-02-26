"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ISLOGGEDIN, SIGNIN } from "@/lib/firebase/helper";
import { getUserFromCookie } from "@/lib/firebase/userCookie";

import { useDispatch, useSelector } from "react-redux";
import { setUserDetails, setRole } from "@/redux/userDetails/userDetails";
import { RootState } from "@/redux/store";


const darkTheme = createTheme({
  typography: {
    fontSize: 17,
    fontFamily: "Raleway",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#46AD8D",
      contrastText: "#fff",
    },
  },
});

export default function SignIn() {
  const dispatch = useDispatch();
  // const userState = useSelector((state: RootState) => state.user);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const data2 = await SIGNIN({
      email: data.get("email"),
      password: data.get("password"),
    });
    if (!data2) {
      return;
    }
    dispatch(setUserDetails(data2));
    dispatch(setRole(data2.role));
  };



  // useEffect(() => {
  //   dispatch(setUserDetails({ name: "John", age: 25 }));
  //   dispatch(setRole("admin"));

  //   console.log("User Details:", userState.details);
  //   console.log("User Role:", userState.role);
  // }, [dispatch, userState]);

  React.useEffect(() => {
    async function checkUserLogin() {
      const uid = getUserFromCookie();
      console.log("Running 1 2 4")
      if (!uid) {
        return;
      }
      const data2 = await ISLOGGEDIN(uid);
      console.log(data2);
      if (!data2) {
        return;
      }
      dispatch(setUserDetails(data2));
      dispatch(setRole(data2.role));
    }
    checkUserLogin();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
