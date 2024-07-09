import React, { useState, useContext } from 'react';
import { LogContext } from '../contexts/userContext';
import { Box, Button, Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function AddTasks() {
    const { getData, user, updateArray } = useContext(LogContext);
    const [newTask, setNewTask] = useState('');

    const handleAdd = () => {
        let newArray = getData(user);
        const task = {
            task: newTask,
            completed: false,
            deleted: false,
        };
        newArray = [...newArray, task];
        updateArray(user, newArray);
        setNewTask(''); 
    };

    return (
        <Box container sx={{ display: 'flex', justifyContent: 'space-evenly', width: '70vh' }}>
            <Input
                value={newTask} 
                onChange={(event) => setNewTask(event.target.value)}
                sx={{
                    border: '2px solid #D1C1A6',
                    backgroundColor: '#1E1E1E',
                    borderRadius: '10px',
                    width: '80vh',
                    color: '#D1C1A6',
                }}
            />
            <Button onClick={handleAdd}>
                <AddIcon sx={{ color: '#FF5631' }} />
            </Button>
        </Box>
    );
}

export default AddTasks;
