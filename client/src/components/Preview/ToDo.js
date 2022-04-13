import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { NetworkStatus } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from '@mui/material/ListItemButton';
import { REMOVE_KAST } from '../../utils/mutations';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Avatar, Box, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

const ToDo = (props) => {
	const [checked, setChecked] = useState([]);
	const [progressTotal, setProgress] = useState(0);
	//const [secondary, setSecondary] = React.useState(false);
	const [removeKast] = useMutation(REMOVE_KAST);
	const { loading, error, data, networkStatus } = useQuery(QUERY_ME, {
    	notifyOnNetworkStatusChange: true,
  	});
	
	if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
	if (loading) return null;
	if (error) return `Error! ${error}`;
	console.log(data);

	const userData = data.me.myKasts || {};
	console.log(userData);
	

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
		const totalTasks = userData.length;
		console.log (totalTasks);

		const progressTotal = (((numberofChecked) / totalTasks) * 100)
		console.log(progressTotal);
		setProgress(progressTotal);
	}


	const handleDeleteTask = async (kast) => {
		console.log(kast);
		const deleteTask = JSON.stringify(kast._id);
		const textofTask = kast.kastText
		console.log(textofTask);
		console.log (deleteTask);

        const taskText = document.querySelector("#list-node");
		console.log(taskText)
		
        try {
			const { data } = await removeKast({ variables: {_id: kast._id } });
			console.log(data);
			window.location.assign('/preview');
        } catch (err) {
            console.error(err);
        }
    }
	
	if (loading) {
    	return <h2>LOADING...</h2>;
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
					userData.map((kast, value) => {
						const labelId = `checkbox-list-secondary-label-${value}`
					
						return(
							<List display="flex" id="list-node"  key={kast._id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
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
										primary={`${ kast.kastText }`} 
										sx={{ mr: 3, color: 'primary.main' }} 
									/>
								
									{/********** delete icon **********/}
									<IconButton aria-label="delete" onClick={() => handleDeleteTask(kast)}>
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

