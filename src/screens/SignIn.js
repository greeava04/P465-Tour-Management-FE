import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignInWithGoogleLogo  from '../images/SIgnInWithGoogle.png'

export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        EzTravel
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let login = {
      email: data.get('email'),
      password: data.get('password'),
    };
    const response = await fetch("http://owenhar1.asuscomm.com:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(login)
    })
    const json = await response.json();
    if (json.error) {
      alert("Username/Password combo incorrect")
    }
    console.log(json)
    if (json.message) {
      localStorage.token = json.token;
    }
    window.location.reload();
  };
  let user = {
    "username": "",
    "password": ""
  }
  const handleLogOut = () => {
    // event.preventDefault();
    localStorage.token = ""
    window.location.reload();
  }
  const verify = async (token) => {
    const response = await fetch("http://owenhar1.asuscomm.com:3000/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "token": token
      })
    });
    let json = await response.json();
    console.log(json)
    user = json;
  }
  if (localStorage.token) {
    verify(localStorage.token);
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            Logged in!
            <Button onClick={handleLogOut}
              type="logOut"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log Out!
            </Button>
            <Button onClick={() =>{
              window.location.href = '/'
            }}
              type="home"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Home
            </Button>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    )
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#2484BF' }}>
            <LockOutlinedIcon style={{ color: 'white' }} /> {/* Change color here */}
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
              sx={{ mt: 3, mb: 2, backgroundColor: '#2484BF' }}
              style={{ backgroundColor: '#2484BF' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/ForgotPassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box style={{ "padding": '1em', "justify-content": "center", "display": "flex", "gap": "10px"}}>
              <SignInButton image={SignInWithGoogleLogo} link="https://google.com"></SignInButton>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}


export function SignInButton(props) {
  return (
    <a href={props.link}>
      <img src={props.image} alt="Sign in with google button" />
    </a>
  )
}
