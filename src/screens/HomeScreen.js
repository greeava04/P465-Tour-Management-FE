import React from 'react'
<<<<<<< HEAD
import AppBarComponent from '../util/AppBarComponent'
=======
import { AppBar, Toolbar, Typography, Button, Container, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
>>>>>>> 9113b45e74e31cb31838e9fcfdab0611fe96f213

const HomeScreen = () => {
    return (
        <div>
<<<<<<< HEAD
            <AppBarComponent />
            <p>Home Screen</p>
        </div>
=======
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EzTravel
          </Typography>
          <Button color="inherit" component={Link} to="/SignIn">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Destination
        </Typography>
        <TextField label="Search" variant="outlined" fullWidth />
      </Container>
    </div>
>>>>>>> 9113b45e74e31cb31838e9fcfdab0611fe96f213
    )
}

export default HomeScreen

