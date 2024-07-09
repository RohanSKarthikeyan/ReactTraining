import React from 'react'
import { useContext } from 'react'
import { LogContext } from '../contexts/userContext'
import TodoListCounter from './TodoListCounter'
import TodoHeader from './TodoHeader'
import { Box } from '@mui/material'
import TodoList from './TodoList'
import AddTasks from './AddTasks'


function HomePage() {
    const {user} = useContext(LogContext)
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'black'}}>


    <TodoHeader/>


    <Box sx={{
      backgroundColor: 'black', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'
    }} >



    
    <Box sx={{  display: 'flex', justifyContent: 'center' }}>
            <TodoListCounter />
        </Box>

        <Box sx={{  display: 'flex', justifyContent: 'center' }}>
            <AddTasks/>
        </Box>

        <Box sx={{  display: 'flex', justifyContent: 'center' }}>
            <TodoList/>
        </Box>

    </Box>
    </Box>
  )
}

export default HomePage