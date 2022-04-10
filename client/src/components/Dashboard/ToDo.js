import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TASKS } from '../../utils/queries';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
//import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from '@mui/material/ListItemButton';
//import { REMOVE_TASK } from '../../utils/mutations';
//import Auth from '../../utils/auth';
import { Card, CardContent, CardHeader } from '@mui/material';

const ToDo = () => {
	const [checked, setChecked] = useState([1]);
	//const [removeTask] = useMutation(REMOVE_TASK);

	// query existing tasks from database
	const { data } = useQuery( QUERY_TASKS );
    console.log(data);
    const tasks = data?.tasks || [];
	console.log(tasks); // returns array 
	/* 
	Array(13)
0: {__typename: 'Task', _id: '624fc1a09ccd71543a1c46f0', taskText: 'Sing', completed: false}
1: {__typename: 'Task', _id: '624fc1939ccd71543a1c46ee', taskText: 'Clean shed', completed: false}
2: {__typename: 'Task', _id: '624fc1859ccd71543a1c46ec', taskText: "'Clean shed'", completed: false}
3: {__typename: 'Task', _id: '624fc14c9ccd71543a1c46e9', taskText: "'Clean shed'", completed: false}
4: {__typename: 'Task', _id: '624fc1429ccd71543a1c46e7', taskText: "'Clean shed'", completed: false}
5: {__typename: 'Task', _id: '624fc1149ccd71543a1c46e5', taskText: 'Clean shed', completed: false}
6: {__typename: 'Task', _id: '624fc0ef9ccd71543a1c46e3', taskText: 'Clean shed', completed: false}
7: {__typename: 'Task', _id: '624fc093877bfc9fdef6a0d6', taskText: 'Clean shed', completed: false}
8: {__typename: 'Task', _id: '624fbec2141aa4be8ea36286', taskText: 'Fix gate', completed: false}
9: {__typename: 'Task', _id: '624fbec2141aa4be8ea36287', taskText: 'Wash Dishes', completed: false}
10: {__typename: 'Task', _id: '624fbec2141aa4be8ea36283', taskText: 'Clean kitchen', completed: false}
11: {__typename: 'Task', _id: '624fbec2141aa4be8ea36284', taskText: 'Walk dog', completed: false}
12: {__typename: 'Task', _id: '624fbec2141aa4be8ea36285', taskText: 'Run a mile', completed: false}
length: 13
[[Prototype]]: Array(0)
	*/

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

	// const handleDeleteTask = async (task) => {
	// 	const token = Auth.loggedIn() ? Auth.getToken() : null;

	// 	if (!token) {
	// 		return false;
	// 	}

	// 	try{
	// 		await removeTask({ variables: { task }});
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
  	// };
	
  	return (
		<>
            <Card>
				<CardHeader title="TO DO LIST"/>
				<CardContent>
				{React.Children.toArray(
					tasks.map((task, value) => {
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
										{/* <DeleteIcon onClick={handleDeleteTask(task)}/> */}
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