import React, { useEffect, useState, useContext } from 'react';
import { LogContext } from '../contexts/userContext';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function TodoList() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { getData, user, updateArray } = useContext(LogContext);
    const [data, setData] = useState([]);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false); 

    useEffect(() => {
        console.log("TodoList useEffect called");
        getArray();
    }, [user, updateArray, getData, showOnlyFavorites]); 

    const getArray = () => {
        console.log("getArray called with user:", user);
        const newData = getData(user);
        console.log("Data fetched:", newData);
        setData(newData);
    };

    const handleCheckboxChange = (index) => {
        const newData = [...data];
        newData[index].completed = !newData[index].completed;
        setData(newData);
        updateArray(user, newData);
    };

    const handleDelete = (index) => {
        const newData = [...data];
        newData[index].deleted = true;
        setData(newData.filter(task => !task.deleted));
        updateArray(user, newData.filter(task => !task.deleted));
    };

    const handleFav = (index) => {
        const newData = [...data];
        newData[index].favourite = !newData[index].favourite;
        setData(newData);
        updateArray(user, newData);
    };

    const handleFilter = () => {
        setShowOnlyFavorites(!showOnlyFavorites);
    };

    return (
        <Box sx={{ justifyContent: 'space-around', alignItems: 'center' }}>

            {showOnlyFavorites ? (
                data.filter(task => !task.deleted && task.favourite).map((task, index) => (
                    <Box 
                        key={`${task.task}-${index}`} 
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            textAlign: 'center', 
                            border: '2px solid #D1C1A6', 
                            backgroundColor: '#1E1E1E',
                            marginBottom: 2,
                            padding: 1, 
                            width: '100vh', 
                            borderRadius: '10px', 
                            paddingTop: '10px', 
                            paddingBottom: '10px'
                        }}
                    >
                        <Checkbox 
                            {...label} 
                            checked={task.completed} 
                            onChange={() => handleCheckboxChange(index)} 
                            color="success" 
                        />
                        <Typography 
                            sx={{ 
                                ml: 1, 
                                color: '#D1C1A6', 
                                fontFamily: '"Anton SC", sans-serif', 
                                fontWeight: 400, 
                                fontStyle: 'normal', 
                                textDecoration: task.completed ? 'line-through' : 'none' 
                            }}
                        >
                            {task.task}
                        </Typography>
                        <Checkbox 
                            icon={<FavoriteBorderIcon />} 
                            checked={task.favourite} 
                            onChange={() => handleFav(index)} 
                            checkedIcon={<FavoriteIcon />} 
                            color="primary" 
                            sx={{color: 'white'}}
                        />
                        <Button onClick={() => handleDelete(index)}><DeleteIcon sx={{ color: '#D1C1A6', ml: 1 }} /></Button>
                    </Box>
                ))
            ) : (
                data.filter(task => !task.deleted).map((task, index) => (
                    <Box 
                        key={`${task.task}-${index}`} 
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            textAlign: 'center', 
                            border: '2px solid #D1C1A6', 
                            backgroundColor: '#1E1E1E',
                            marginBottom: 2,
                            padding: 1, 
                            width: '100vh', 
                            borderRadius: '10px', 
                            paddingTop: '10px', 
                            paddingBottom: '10px'
                        }}
                    >
                        <Checkbox 
                            {...label} 
                            checked={task.completed} 
                            onChange={() => handleCheckboxChange(index)} 
                            color="success" 
                        />
                        <Typography 
                            sx={{ 
                                ml: 1, 
                                color: '#D1C1A6', 
                                fontFamily: '"Anton SC", sans-serif', 
                                fontWeight: 400, 
                                fontStyle: 'normal', 
                                textDecoration: task.completed ? 'line-through' : 'none' 
                            }}
                        >
                            {task.task}
                        </Typography>
                        <Checkbox 
                            icon={<FavoriteBorderIcon />} 
                            checked={task.favourite} 
                            onChange={() => handleFav(index)} 
                            checkedIcon={<FavoriteIcon />} 
                            color="primary" 
                            sx={{color: 'white'}}
                        />
                        <Button onClick={() => handleDelete(index)}><DeleteIcon sx={{ color: '#D1C1A6', ml: 1 }} /></Button>
                    </Box>
                ))
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                <Checkbox 
                    icon={<FavoriteBorderIcon />} 
                    checked={showOnlyFavorites} 
                    onChange={handleFilter} 
                    checkedIcon={<FavoriteIcon />} 
                    color="primary" 
                    sx={{color: 'white'}}
                />
                <Typography sx={{ ml: 1, color: '#D1C1A6' }}>Show Favorites</Typography>
            </Box>
        </Box>
    );
}

export default TodoList;
