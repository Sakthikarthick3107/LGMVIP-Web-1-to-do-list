import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import 'animate.css'

const NoteTab = ({isDarkTheme}) => {
    const[newNote , createNewNote] = useState({id:0 , task:'' , isClick : false , createAt:'' , completeAt:''})
    const[arr , setArr] = useState([]);
    const[open , setOpen] = useState(false)
    const[createId , setCreateId]  = useState(0)

    const createNote = (e) =>{
        e.preventDefault()  
        const currentDate = new Date().toLocaleString();
        const newTodo = { id: createId, task: newNote ,createAt: currentDate};
        setArr([newTodo , ...arr])
        createNewNote({task:''})
        setCreateId(createId+1)
        
    }
    const dialogOpen =() =>{
        setOpen(true)
    }
    const dialogClose =() =>{
        setOpen(false)
    }
    const clearArray = () =>{
        setArr([])
        setOpen(false)
        
    }
    const handleComplete = (id) => {
        const currentDate = new Date().toLocaleString();
        setArr((prevElements) =>
          prevElements.map((element) =>
            element.id === id ? { ...element, isClick: true , completeAt:currentDate } : element
            
          )
        );
    };


    const handleDelete = (id) =>{
       
        setArr((prevTodoArray) => prevTodoArray.filter((item) => item.id !== id));
        
    }
    


  return (
    <>
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' ,
        margin:2,
        
    }}>
        <Box sx={{
        border: isDarkTheme?'solid 2px white' :'solid 2px black',
        minWidth:'50%',
        borderRadius: 5,
        
        
            }}>
            
            <Box sx={{margin : 2}}>
            
            <Typography variant='h5' textAlign='center'>Your Tasks</Typography>
            <br/>
                <form onSubmit={createNote}>
                <Stack direction='row' spacing={2}>
                    <TextField type='text' name='newNote' value={newNote.task}  variant='outlined' autoComplete='off' 
                        label='Create Tasks..' fullWidth onChange={(e)=>createNewNote(e.target.value)}
                        InputProps={{endAdornment:(
                        <Stack spacing={2} direction='row'>
                            <InputAdornment position="end">
                                <IconButton  type='submit'  disabled={newNote.task===''}><AddIcon/></IconButton>
                            </InputAdornment>
                            <InputAdornment position='end'>
                                <IconButton  onClick={()=>createNewNote({task:''})}><RefreshIcon/></IconButton>
                            </InputAdornment>
                        </Stack>
                        
                    )}}
                    />
                <Button variant='contained'   onClick={dialogOpen} disabled={arr.length === 0 } >Delete All</Button>
                </Stack>  
                </form>
                
            </Box>
            <hr/>
            <Box sx={{height : 400 , overflowY:'auto'}}>
            {arr.map((item) =>(
                
                <Stack   className="animate__animated animate__zoomIn animate__faster "
                sx={{
                    margin:1, 
                    border:isDarkTheme?'solid 0px white' :'solid 1px black',
                    borderRadius:1,
                    backgroundColor: item.isClick ? '#558b2f' : 'white',
                     
                    opacity: item.isClick ? 0.8:1,
                     }} 
                    key={item.id} direction='column' 
                    
                    >
                    <Stack direction='row' justifyContent='space-between' display='flex' alignItems='center'>
                        <Typography color={ isDarkTheme?' black' :' black'} sx={{textDecoration: item.isClick ?'line-through' : 'none'}} variant='h6' marginLeft={5}>{item.task}</Typography>
                        <Stack direction='row' spacing={1}>
                        <IconButton color='error'  onClick={()=>handleDelete(item.id)} disabled={item.isClick} ><DeleteIcon/></IconButton>
                        <IconButton color='success' onClick={() => handleComplete(item.id)} disabled={item.isClick}  ><CheckCircleRoundedIcon/></IconButton>
                        </Stack>
                    </Stack><br/>
                    <Stack direction='row' display='flex' justifyContent='space-between'  sx={{backgroundColor:'#2196f3'}}  >
                    <Typography color={ isDarkTheme?' black' :' black'} variant='body2'  marginLeft={1} >Created :{item.createAt}</Typography>
                    {item.isClick &&
                    <Typography color={ isDarkTheme?' black' :' black'} variant='body2'marginRight={1} >Completed :{item.completeAt}</Typography>
                    }
                    </Stack>
                    
                        
                </Stack>
                
            ))}
            </Box>
            
        </Box>
        <Dialog open={open} onClose={dialogClose}>
            <DialogTitle>
                Warning !
            </DialogTitle>
            <DialogContent>
                Are you sure to want to delete all the tasks you assigned below?
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={dialogClose}>Cancel</Button>
                <Button variant='contained' color='error' onClick={clearArray}>Delete</Button>
            </DialogActions>
        </Dialog>
    </Box>
      
    </>
  )
}

export default NoteTab
