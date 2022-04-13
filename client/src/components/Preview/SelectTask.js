import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material'
import { ListItem, List, ListItemAvatar, ListItemText } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LaptopMac from '@mui/icons-material/LaptopMac';
import Pets from '@mui/icons-material/Pets';
import VideogameAsset from '@mui/icons-material/VideogameAsset';
import CleaningServices from '@mui/icons-material/CleaningServices'
import { useMutation } from '@apollo/client';
import { ADD_KAST} from '../../utils/mutations';

const SelectTask = () => {
    const [addKast, { error }] = useMutation(ADD_KAST)

    const handleClick = async (event) => {
        event.preventDefault();

        let btn = event.currentTarget;
        console.log(btn);
        let kastText = btn.querySelector(("#taskText > span")).innerHTML;
        
        try {
            const { data } = await addKast({ variables: { kastText }});
            
            console.log(data)
            window.location.assign('/preview');
        } catch (err) {
            console.error(err);
        }
    }
   return (
        <Card>
            <CardContent>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                        Select Task to Add
                    </Typography>
                    <List>
                        {/* workout */}
                        <ListItem onClick={handleClick}>
                            <ListItemAvatar>
                                <IconButton sx={{ backgroundColor: 'error.main', height: 35, width: 35 }}>
                                    <FitnessCenterIcon />
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText id="taskText" sx={{  }}
                                primary="Work Out"
                                //secondary={secondary ? 'Secondary text' : null}
                            /> 
                        </ListItem>
                        {/* study */}
                        <ListItem onClick={handleClick}>
                            <ListItemAvatar>
                                <IconButton sx={{ backgroundColor: 'success.main', height: 35, width: 35 }}>
                                    <LaptopMac />
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText id="taskText" sx={{  }}
                                primary="Study"
                            />
                        </ListItem>
                        {/* walk dog */}
                        <ListItem onClick={handleClick}>
                            <ListItemAvatar>
                                <IconButton sx={{ backgroundColor: 'info.main', height: 35, width: 35 }}>
                                    <Pets />
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText id="taskText" sx={{  }}
                                primary="Walk dog"
                            />
                        </ListItem>
                        {/* clean */}
                        <ListItem onClick={handleClick}>
                            <ListItemAvatar>
                                <IconButton sx={{ backgroundColor: 'text.secondary', height: 35, width: 35 }}>
                                    <CleaningServices />
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText id="taskText" sx={{  }}
                                primary="Clean"
                                
                            />
                        </ListItem>
                        {/* gaming */}
                        <ListItem  onClick={handleClick}>
                            <ListItemAvatar onClick={handleClick}>
                                <IconButton sx={{ backgroundColor: 'error.main', height: 35, width: 35 }}>
                                    <VideogameAsset />
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText id="taskText" sx={{  }}
                                primary="Gaming"
                                
                            />
                        </ListItem>
                    {error && <div> You must login first </div>}
                    </List>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default SelectTask