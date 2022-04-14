import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TASKS } from '../../utils/queries';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from '@mui/material/ListItemButton';
import { REMOVE_TASK } from '../../utils/mutations';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Avatar, Box, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

const ToDo = (props) => {
	const [checked, setChecked] = useState([]);
	const [progressTotal, setProgress] = useState(0);
	//const [secondary, setSecondary] = React.useState(false);
	// query existing tasks from database
	const { data } = useQuery( QUERY_TASKS );
    console.log(data);
    const tasks = data?.tasks || [];
	console.log(tasks); // returns array 

	//handles checkboxes 
	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		setChecked(newChecked);

		const numberofChecked = checked.length + 1;
		console.log(numberofChecked);
		return handleProgressBar(numberofChecked);
		
	};
	
	const handleProgressBar = (numberofChecked) => {
		const totalTasks = tasks.length;
		console.log (totalTasks);

		const progressTotal = (((numberofChecked) / totalTasks) * 100)
		console.log(progressTotal);
		setProgress(progressTotal);
	}
	
	
  	return (
		<>
			<Card
				sx={{ height: '25%', mb: 2, }}
				{...props}
			>
				<CardContent>
					<Grid
						container
						spacing={3}
						sx={{ justifyContent: 'space-between' }}
					>
						<Grid item>
							<Typography
								color="textSecondary"
								gutterBottom
								variant="overline"
							>
								TASKS PROGRESS
							</Typography>
							<Typography
								color="textPrimary"
								variant="h4"
							>
								{progressTotal + "%"}
							</Typography>
						</Grid>
						<Grid item>
							<Avatar sx={{ backgroundColor: 'secondary.main', height: 56, width: 56 }} >
								<InsertChartIcon />
							</Avatar>
						</Grid>
					</Grid>
					<Box sx={{ pt: 3 }}>
						<LinearProgress
						onChange={handleProgressBar}
						value={progressTotal}
						variant="determinate"
						/>
					</Box>
				</CardContent>
			</Card>

            <Card>
				<CardHeader title="To Do List" sx={{ display: 'flex', flexDirection: 'column-reverse'}}/>
				<CardContent>
				{React.Children.toArray(
					tasks.map((task, value) => {
						const labelId = `checkbox-list-secondary-label-${value}`
					
						return(
							<List display="flex" id="list-node"  key={task._id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
								<ListItem id="list-item-parent">
									{/* ********* checkbox ********* */}
									<ListItemButton role={undefined} key={value} dense>
										<ListItemIcon>
											<Checkbox
											onChange={handleToggle(value)}
											checked={checked.indexOf(value) !== -1}
											tabIndex={-1}
											disableRipple
											inputProps={{'aria-labelledby': labelId }}
											/>
										</ListItemIcon>
									</ListItemButton>

									{/********** text **********/}
									<ListItemText 
										id="charlie" 
										primary={`${ task.taskText }`} 
										sx={{ mr: 3, color: 'primary.main' }} 
									/>
								
									{/********** delete icon **********/}
									<IconButton aria-label="delete">
										<DeleteIcon />
									</IconButton>					
								</ListItem>
							</List>
						);
					})
				)}
				</CardContent>
			</Card>
		</>
	)
}

export default ToDo;

