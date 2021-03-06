import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material'
import { ListItem, List, ListItemAvatar, ListItemText } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LaptopMac from '@mui/icons-material/LaptopMac';
import Pets from '@mui/icons-material/Pets';
import VideogameAsset from '@mui/icons-material/VideogameAsset';
import CleaningServices from '@mui/icons-material/CleaningServices'


const SelectTask = () => {

    return (
        <Card>
            <CardContent>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                        Select Task to Add
                    </Typography>
                    <List>
                        {/* workout */}
                        <ListItem>
                            <ListItemAvatar>
                                <IconButton sx={{ backgroundColor: 'error.main', height: 35, width: 35 }}>
                                    <FitnessCenterIcon />
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText sx={{  }}
                                primary="Work Out"
                                id="taskText"
                                name="taskText"
                                type="taskText"

                            />
                        </ListItem>
                        {/* study */}
                        <ListItem>
                            <ListItemAvatar>
                                <IconButton sx={{ backgroundColor: 'success.main', height: 35, width: 35 }}>
                                    <LaptopMac />
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText sx={{  }}
                                primary="Study"
                                id="taskText"
                            />
                        </ListItem>
                        {/* walk dog */}
                        <ListItem>
                            <ListItemAvatar>
                                <IconButton sx={{ backgroundColor: 'info.main', height: 35, width: 35 }}>
                                    <Pets />
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText sx={{  }}
                                primary="Walk dog"
                                id="taskText"
                            />
                        </ListItem>
                        {/* clean */}
                        <ListItem>
                            <ListItemAvatar>
                                <IconButton sx={{ backgroundColor: 'text.secondary', height: 35, width: 35 }}>
                                    <CleaningServices />
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText sx={{  }}
                                primary="Clean"
                                id="taskText"
                            />
                        </ListItem>
                        {/* gaming */}
                        <ListItem>
                            <ListItemAvatar>
                                <IconButton sx={{ backgroundColor: 'error.main', height: 35, width: 35 }}>
                                    <VideogameAsset />
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText sx={{  }}
                                primary="Gaming"
                                id="taskText"
                            />
                        </ListItem>
                    </List>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default SelectTask