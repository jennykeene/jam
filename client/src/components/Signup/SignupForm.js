import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

   try {
    const { data } = await addUser({
       variables: signupData
    })

    if(error) {
      console.log(error.message);
    }
    
    Auth.login(data.addUser.token);
   } catch (err) {
     console.error(err);
   }
  };

  return (
    <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        onChange={handleChange}
        value={signupData.username}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="email"
        label="Email"
        type="email"
        id="email"
        autoComplete="current-password"
        onChange={handleChange}
        value={signupData.email}
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
        onChange={handleChange}
        value={signupData.password}
      />
      <Button
        type="submit"
        disabled={!(signupData.username && signupData.email && signupData.password)}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </Button>
      <Grid container>
        <Grid item>
          <Link href="/login" variant="body2">
            Already have an account? Login
          </Link>
        </Grid>
      </Grid>
    </Box>
          

  );
}

export default SignupForm