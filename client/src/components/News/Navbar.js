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
import Link from '@mui/material/Link';
import { v4 as uuidv4 } from "uuid";
const lightColor = 'rgba(255, 255, 255, 0.7)';
// navigation bar function

const Navigation = () => {

const navs = [
    { nav: "Home", page: "/" },
    { nav: "General", page: "/general" },
    { nav: "Business", page: "/business" },
    { nav: "Sports", page: "/sports" },
    { nav: "Entertainment", page: "/entertainment" },
    { nav: "Technology", page: "/technology" }
]

  return (
    // navbar properties w dark as the variant
    // navbar brand to show JAM News
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
            {/* ******* logout/home link ******* */}
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
                logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>


            <AppBar component="div" color="primary" position="static" elevation={0} sx={{ zIndex: 0 }}>
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                          <Typography color="inherit" variant="h5" component="h1">
                              JAM News
                          </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>


          </AppBar>

          <AppBar position="static" elevation={0} sx={{ zIndex: 0 }}>
            <Grid container>
              {navs.map((navs) =>
                <Toolbar sx={{ color: "inherit", }} className="mk" to={navs.page} key={uuidv4()}>
                  <Link className="mgk" color="inherit" href={navs.page}>
                      {navs.nav}
                  </Link>
                </Toolbar>
              )}
            </Grid>
          </AppBar>
        {/* // Bar with tabs (Tasks, News, Weather) */}
          <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
            <Tabs value={2} textColor="inherit">
              <Tab href="/preview" label="Tasks" />
              <Tab href="/calculator "label="Calculator" />
              <Tab href="/news"label="News" />
            </Tabs>
          </AppBar>
    
    </>
  )
}
export default Navigation;