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
import Auth from '../../utils/auth';

const CreateTask = () => {
    const [taskInputData, setTaskInputData] = useState({taskText: ""});
    const [addTask] = useMutation(ADD_TASK)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTaskInputData({ ...taskInputData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addTask({ variables: { taskInputData }});
            Auth.login(data.addTask.token) 
            console.log(data)
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
                        value={taskInputData.taskText}
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
