import React from 'react'
import CreateTask from './CreateTask';
import SelectTask from './SelectTask';
import ToDo from './ToDo';
import Paper from '@mui/material/Paper';
import Image from '../../assets/images/ocean.jpg'

const Content = () => {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: "100vh",
            color: "#f5f5f5"
        }
    };

    return (
        <>  
        <Paper style={styles.paperContainer}>
            <div className='columns'>
                {/* {{!-- *********** Create New Task Card ***********--}} */}
                <div className='column is-3 mt-4 ml-5'>
                    <CreateTask />
                    <br />
                    
                </div>
                {/* {{!--************** Little Boxes **************--}} */}
                <div className='column is-9 mt-4 ml-2'>
                    {/* {{!--*********** TASK TO DO ***********--}} */}
                    <div className='columns'>
                        <div className='column is-7'>
                            <ToDo />
                        </div>
                    {/* {{!--*********** Select Task ***********--}} */}
                        <div className='column is-4 mr-4'>
                           <SelectTask />
                        </div>
                    </div>
            
                </div>
                
            </div>
        </Paper>
        
        
        </> 
    )
}

export default Content