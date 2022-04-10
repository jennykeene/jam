import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useMutation } from '@apollo/client';
import { ADD_TASK } from '../../utils/mutations';


const CreateTask = () => {
    const [taskInputData, setTaskInputData] = useState({taskText: ""});
    const [addTask] = useMutation(ADD_TASK)

    const handleChange = (event) => {

        const taskInputData = document.querySelector('#taskText').value;
        console.log(taskInputData);
        setTaskInputData(taskInputData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const taskText = document.querySelector('#taskText').value;

        try {
            const { data } = await addTask({ variables: { taskText }});
            
            console.log(data)
            window.location.assign('/dashboard');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
        <Card>
            <CardContent>
                <Typography>Create Task</Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="taskText"
                        label="task name"
                        type="taskText"
                        id="taskText"
                        autoComplete="taskText"
                        onChange={handleChange}
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
    </>
    )
};

export default CreateTask;
