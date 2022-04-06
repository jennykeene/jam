import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const LoginForm = () => {
  const [formData, setFormData] = useState({ 
    username: '', 
    password: '' 
  });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formData},
      });
      Auth.login(data.login.token);

      if (error) {
        console.log(error.message);
      }

    } catch (err) {
      console.log(err);
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
		value={formData.username}
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
		value={formData.password}
		/>
		<FormControlLabel
		control={<Checkbox value="remember" color="primary" />}
		label="Remember me"
		/>
		<Button
		type="submit"
		fullWidth
		variant="contained"
		sx={{ mt: 3, mb: 2 }}
		>
		Login
		</Button>
		<Grid container>
		<Grid item>
			<Link href="/signup" variant="body2">
			{"Don't have an account? Sign Up"}
			</Link>
		</Grid>
		</Grid>
	</Box>
  );
}

export default LoginForm;