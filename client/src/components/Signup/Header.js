import React from 'react'
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const Header = () => {
  return (
    <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
    >
        <Toolbar>
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                <Typography color="inherit" variant="h5" component="h1">
                    Sign Up
                </Typography>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default Header;