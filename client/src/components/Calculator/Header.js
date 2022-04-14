import * as React from 'react';
import Auth from '../../utils/auth';
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
                {/* ******* logout link ******* */}
                <Grid item>
                  <Button
                    href="/"
                    onClick={Auth.logout}
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
                    home / logout
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>


            <AppBar component="div" color="primary" position="static" elevation={0} sx={{ zIndex: 0 }}>
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                        <Typography color="inherit" variant="h5" component="h1">
                            Calculator
                        </Typography>
                        </Grid>
                        
                    </Grid>
                </Toolbar>
            </AppBar>


          </AppBar>
      
        {/* // Bar with tabs (Tasks, News, Weather) */}
        <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
          <Tabs value={1} textColor="inherit">
            <Tab href="/preview" label="Tasks" />
            <Tab href="/calculator "label="Calculator" />
            <Tab href="https://www.foxnews.com/"label="News" />
          </Tabs>
        </AppBar>
      </>

      
      )}
      
// added the main header to calculator page
        

export default Header;