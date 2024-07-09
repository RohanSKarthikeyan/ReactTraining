import React from 'react';
import { Grid, Box,  Typography, Button, Dialog, DialogTitle, List, ListItem, ListItemButton, Input, Container, Avatar } from '@mui/material';
import loginImage from "../images/loginImage.png"
import fullBg from "../images/fullBg2.png"
import { useState, useContext } from 'react';
import { LogContext } from '../contexts/userContext';
import loginAvatar from '../images/loginAvatar.png'
import PersonIcon from '@mui/icons-material/Person';




const LoginPage = () => {
    const users = ['', 'ROHAN', 'MITHUN'];
    const [password, setPassword] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const { login, user, logout } = useContext(LogContext);
    const [open, setOpen] = useState(false);

    const handleSelection = (value) => {
        setSelectedValue(value);
        handleClosing();
    };

    const handleClosing = () => {
        selectedValue !== '' && password !== '' ? login(selectedValue, password) : console.log("No Login Detected");
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Container sx={{
            display: 'flex',
        }}>
        <img src={loginImage} alt="Login" style={{ maxWidth: '70%', height: '80vh', zIndex: '1', position: 'relative', transform: ' translateY(10%) rotate(-30deg)' }} />
        <img src={fullBg} alt="Login" style={{zIndex: '-1', position: 'absolute', height: '100vh', transform: 'translateX(23px)' }} />
            <Box sx={{
            position: 'relative',
            transform: 'translateX(60%) translateY(70%)', 
            width: '30%',
            height: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: 'black'
        }}>
        <img src={loginAvatar} style={{width:'10%', height:'10%'}} />
        <br/>
            <Typography variant="h5" gutterBottom sx={{color: '#D1C1A6', fontFamily: '"Anton SC", sans-serif',fontWeight: 400, fontStyle: 'normal'}}>
            SELECTED USER: {selectedValue}
            </Typography>
            <Button variant="contained" onClick={handleOpen} sx={{ width: '100%', mb: 2, backgroundColor:'#D1C1A6', color: 'black', fontFamily: '"Anton SC", sans-serif',fontWeight: 400, fontStyle: 'normal'}}>
                Select User
            </Button>
            <Dialog onClose={handleClosing} open={open} sx={{color: 'black' }}>
                <DialogTitle sx={{ backgroundColor: '#222', color: '#D1C1A6', fontFamily: '"Anton SC", sans-serif',fontWeight: 400, fontStyle: 'normal' }}>AVAILABLE USERS</DialogTitle>
                <List>
                    {users.filter(user => user !== '').map((user) => (
                        <ListItem key={user}>
                            <ListItemButton sx={{justifyContent: 'space-evenly'}} onClick={() => handleSelection(user)}>
                            <Avatar sx={{backgroundColor:'#D1C1A6'}}>
                                    <PersonIcon/>
                                </Avatar>
                                <Typography sx={{fontFamily: '"Anton SC", sans-serif',fontWeight: 400, fontStyle: 'normal'}}>{user}</Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Dialog>
            <Input
                placeholder='Password: 123'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ width: '100%', border: '1px solid #ffff', borderRadius: '4px', p: 1, color: '#D1C1A6'  }}
            />
            <Button variant="contained" onClick={handleClosing} sx={{ width: '100%', mt: 2, backgroundColor: '#D1C1A6', color: 'black', fontFamily: '"Anton SC", sans-serif',fontWeight: 400, fontStyle: 'normal'}}>
                ENTER
            </Button>
        </Box>
        </Container>
    );
};



export default LoginPage;
