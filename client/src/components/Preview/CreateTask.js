import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
//import Auth from '../../utils/auth';
import Typography from '@mui/material/Typography';


const CreateTask = () => {
    return (
        <Card>
            <CardContent>
                <Typography>Create Task</Typography>
                <Box component="form" noValidate onSubmit={''} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="taskText"
                        label="task name"
                        type="taskText"
                        id="taskText"
                        autoComplete="taskText"
                        onChange={''}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Create
                    </Button>
                    <Grid container>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    )
};

export default CreateTask;
