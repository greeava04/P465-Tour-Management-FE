import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <div>
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
    )
}

export default HomeScreen

