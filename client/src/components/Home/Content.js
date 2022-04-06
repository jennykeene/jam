import React from 'react'
import Paper from '@mui/material/Paper';
import PleaseSignIn from './PleaseSignIn';
import Image from '../../assets/Images/image1back.jpg';

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
                <PleaseSignIn />
            </Paper>
        </>
    )
}

export default Content