import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import LoginForm from './LoginForm';
import backgroundVideo from '../../assets/videos/jellyfish.mp4';


const Content = () => {

  return (

    <>
    <Box
          sx={{
            my: 4,
            mx: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <LoginForm />
          {/* Options Box */}
          <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
            
          </Box>
        </Box>
    
      <video autoPlay loop muted id='video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
  
        

    </>
  )
}

export default Content
