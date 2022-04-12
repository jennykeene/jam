import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PleaseSignIn = () => {

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{/* Options Box */}
			<Box
				sx={{
				mt: 30,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
			>
				<Typography component="h1" variant="h4" fontWeight='bold' fontFamily='Arial' color='#fff'>
					Please Login or Signup to continue!
				</Typography>

				{/***************** Buttons *****************/}
				<Box noValidate sx={{ mt: 1 }}>
					<Button
						href="/login"
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Login
					</Button>
					<Button
						href="/signup"
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Signup
					</Button>
					<Button
						href="/dashboard"
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Preview the App
					</Button>
				</Box>
			</Box>
		</Box>

	);
}

export default PleaseSignIn;