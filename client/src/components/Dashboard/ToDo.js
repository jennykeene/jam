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
import { ListItemSecondaryAction } from '@mui/material';
import { REMOVE_TASK } from '../../utils/mutations';
//import Auth from '../../utils/auth';
import { Card, CardContent, CardHeader } from '@mui/material';

const ToDo = (props) => {
	const [checked, setChecked] = useState([0]);
	//const [secondary, setSecondary] = React.useState(false);
	const [removeTask] = useMutation(REMOVE_TASK);
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
	};

	const handleDeleteTask = async (task) => {
		console.log(task);
		const deleteTask = JSON.stringify(task._id);
		const textofTask = task.taskText
		console.log(textofTask);
		console.log (deleteTask);

		//return await Task.findOneAndRemove({_id: _id})
        const taskText = document.querySelector("#list-node");
		console.log(taskText)
		
        try {
			//taskText.remove();
			const { data } = await removeTask({ variables: {_id: task._id } });
			console.log(data);
			window.location.assign('/dashboard');
        } catch (err) {
            console.error(err);
        }
    }
	
  	return (
		<>
            <Card>
				<CardHeader title="TO DO LIST"/>
				<CardContent>
				{React.Children.toArray(
					tasks.map((task, value) => {
						const labelId = `checkbox-list-secondary-label-${value}`
					
						return(
							<List id="list-node" key={task._id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
								<ListItem id="list-item-parent" >
									{/* ********* checkbox ********* */}
									<ListItemButton role={undefined} key={value} dense>
										<ListItemIcon>
											<Checkbox
											edge="start"
											onChange={handleToggle(value)}
											checked={checked.indexOf(value) !== -1}
											tabIndex={-1}
											disableRipple
											inputProps={{'aria-labelledby': labelId }}
											/>
										</ListItemIcon>
									</ListItemButton>

									{/********** text **********/}
									<ListItemText id="charlie" primary={`${ task.taskText }`}/>
								
									{/********** delete icon **********/}
									<ListItemSecondaryAction>
                    					<IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task)}>
                      						<DeleteIcon />
                    					</IconButton>
                  					</ListItemSecondaryAction>									
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

//onClick={(event) => setSecondary(event.target)}