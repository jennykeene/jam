import React from 'react'
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/jennyk1989">
        JAM Team
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default Footer
