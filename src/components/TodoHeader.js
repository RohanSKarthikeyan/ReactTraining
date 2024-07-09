import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { LogContext } from '../contexts/userContext';

function TodoHeader() {

    const {logout, user} = useContext(LogContext);

    const handleLogOut = () => {
        logout();
    }

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
    <Grid container
            justifyContent="space-between"
            alignItems="center"
            sx={{
                width: '100%', 
                padding: '50px'
            }}>
    <Grid sx={{display: 'flex'}}>
        <Typography variant='h5' sx={{color: '#D1C1A6', fontFamily: '"Anton SC", sans-serif',fontWeight: 400, fontStyle: 'normal'}}>
                TripleX 
            </Typography>
            <Typography variant='h6' sx={{color: '#FF5631', fontFamily: '"Anton SC", sans-serif',fontWeight: 400, fontStyle: 'normal'}}>
                Youtube
            </Typography>
        </Grid>
        <Grid>
        <Button>
        <Typography variant='h6' sx={{color: '#D1C1A6',fontFamily: '"Anton SC", sans-serif',fontWeight: 400, fontStyle: 'normal'}}>
                Hello,
            </Typography>
            <Typography  variant='h5' sx={{color: '#FF5631',  fontFamily: '"Anton SC", sans-serif',fontWeight: 400, fontStyle: 'normal'}}>
                {user}
            </Typography>
        </Button>
        </Grid>
        <Grid>
        <Button onClick={handleLogOut}>
            <LogoutIcon sx={{
                color: '#D1C1A6'
            }}/>
        </Button>
        </Grid>
    </Grid>

    </Box>
  )
}

export default TodoHeader