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
import Auth from '../../utils/auth';

const ToDo = () => {
	const [checked, setChecked] = useState([1]);
	const [removeTask] = useMutation(REMOVE_TASK);
	const { data } = useQuery( QUERY_TASKS );
    console.log(data);
    const tasks = data?.tasks || [];

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
		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}

		try{
			await removeTask({ variables: { task }});
		} catch (err) {
		console.error(err);
		}
  	};
	
  	return (
		<div class="card events-card m-3">
			<header class="card-header">
				<p class="card-header-title is-centered">
					To Do
				</p>
			</header>
			<div class="card-table">
            
                {tasks.map((task, value) => {
					const labelId = `checkbox-list-secondary-label-${value}`
                return(
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem>
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
                            <ListItemText id={task._id} primary={`${ task.taskText }`} />
                        
                            {/********** delete icon **********/}
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon onClick={handleDeleteTask(task)}/>
                            </IconButton>
                            
                        
                        </ListItem>

                    </List>
                );
            })}
          
			</div>
		</div>  
	)
}

export default ToDo;