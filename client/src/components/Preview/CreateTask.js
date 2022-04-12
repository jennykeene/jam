import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useMutation } from '@apollo/client';
import { ADD_KAST } from '../../utils/mutations';


const CreateTask = () => {

    const [addKast, { error }] = useMutation(ADD_KAST)

    const handleChange = (event) => {

        const taskInputData = document.querySelector('#kastText').value;
        console.log(taskInputData);

    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        const kastText = document.querySelector('#kastText').value;
        console.log(kastText);

        try {
            const { data } = await addKast({ variables: { kastText } });
            
            console.log(data)
            //window.location.assign('/preview');
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
                        name="kastText"
                        label="task name"
                        type="kastText"
                        id="kastText"
                        autoComplete="kastText"
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
                            {error && <div> You must login first </div>}
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    </>
    )
};

export default CreateTask;
