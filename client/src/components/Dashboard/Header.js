import * as React from 'react';
//import Auth from '../../utils/auth';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header(props) {

      return (
        <>
          {/* ******* settings for 3 icons on top right corner ******* */}
          <AppBar color="primary" position="sticky" elevation={0}>
            <Toolbar>
              <Grid container spacing={1} alignItems="center">
                <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={undefined}
                    edge="start"
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item xs />
                {/* ******* home link ******* */}
                <Grid item>
                  <Button
                    href="/"
                    variant="body2"
                    sx={{
                      textDecoration: 'none',
                      color: lightColor,
                      '&:hover': {
                        color: 'common.white',
                      },
                    }}
                  >
                    home 
                  </Button>
                </Grid>
                {/* ******* login link ******* */}
                <Grid item>
                  <Button
                    href="/login"
                    variant="body2"
                    sx={{
                      textDecoration: 'none',
                      color: lightColor,
                      '&:hover': {
                        color: 'common.white',
                      },
                    }}
                    rel="noopener noreferrer"
                  >
                    LOGIN
                  </Button>
                </Grid>
                {/************ Signup link ************/}
                <Grid item>
                  <Button
                    href="/signup"
                    variant="body2"
                    sx={{
                      textDecoration: 'none',
                      color: lightColor,
                      '&:hover': {
                        color: 'common.white',
                      },
                    }}
                  >
                    Signup
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>


            <AppBar component="div" color="primary" position="static" elevation={0} sx={{ zIndex: 0 }}>
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                        <Typography color="inherit" variant="h5" component="h1">
                            Hello, Peasant.
                        </Typography>
                        </Grid>
                        
                    </Grid>
                </Toolbar>
            </AppBar>


          </AppBar>
      
        {/* // Bar with tabs (Tasks, News, Weather) */}
        <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
          <Tabs value={0} textColor="inherit">
            <Tab label="Tasks" />
            <Tab label="Calculator" />
            <Tab label="News" />
            <Tab label="Help" />
          </Tabs>
        </AppBar>
      </>

      
      )}
      
        

export default Header;