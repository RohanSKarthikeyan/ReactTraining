import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { LogContext } from '../contexts/userContext';
import { Grid, Typography } from '@mui/material';

function TodoListCounter() {
    const { user, getTotal, getCompleted } = useContext(LogContext);
    const [completed, setCompleted] = useState(0);
    const [total, setTotal] = useState(0);

    const countGetter = () => {
        setCompleted(getCompleted(user));
        setTotal(getTotal(user));
    };

    useEffect(() => {
        countGetter();
    }, [user, getCompleted, getTotal]); 

    useEffect(() => {
        const interval = setInterval(() => {
            countGetter();
        }, 1000);
        return () => clearInterval(interval);
    }, [user, getCompleted, getTotal]);

    let message = "";
    if (total === 0) {
        message = "Off Day";
    } else if (completed === 0) {
        message = "PUT MORE EFFORTS";
    } else if (completed > 0 && completed < total) {
        message = "KEEP IT UP";
    } else if (completed === total) {
        message = "DAY DONE!";
    }

    return (
        <Box container sx={{ display: 'flex', justifyContent: 'space-evenly', border: '2px solid #D1C1A6', width: '100vh', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
            <Grid>
                <Typography variant='h4' sx={{ color: '#FF5631', fontFamily: '"Anton SC", sans-serif', fontWeight: 400, fontStyle: 'normal' }}>
                    TODO Done
                </Typography>
                <Typography variant='h5' sx={{ color: '#D1C1A6', fontFamily: '"Anton SC", sans-serif', fontWeight: 400, fontStyle: 'normal' }}>
                    {message}
                </Typography>
            </Grid>
            <Grid sx={{ borderRadius: '50%', backgroundColor: '#FF5631', width: '20%', textAlign: 'center' }}>
                <Typography variant='h3' sx={{ color: 'black', fontFamily: '"Anton SC", sans-serif', fontWeight: 400, fontStyle: 'normal' }}>
                    {completed}/{total}
                </Typography>
            </Grid>
        </Box>
    );
}

export default TodoListCounter;
