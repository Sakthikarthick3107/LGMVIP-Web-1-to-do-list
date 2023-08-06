import {AppBar, Avatar, Box,  Chip, CssBaseline, IconButton, Link, Menu, Stack, ThemeProvider, Toolbar} from '@mui/material'
import Head from './components/Head';
import light from './theme/light';
import dark from './theme/dark';
import NoteTab from './components/NoteTab';
import { useState } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import myAvatar from './images/avatar2.jpg'
import github from './images/github.svg'
import instagram from './images/instagram.svg'
import linkedin from './images/linkedin.svg'
import mail from './images/mail.svg'



function App() {
  const[isDarkTheme , setIsDarkTheme] = useState(localStorage.getItem('isDark'  ))
  const [anchorEl, setAnchorEl] = useState(null);
  
  const changeTheme =  () =>{
    setIsDarkTheme(!isDarkTheme)
    localStorage.setItem('isDark', isDarkTheme)
    document.documentElement.setAttribute('data-theme', isDarkTheme);
  }

  const settheme = isDarkTheme? dark : light

  const calligraphyFontStyle = {
    fontFamily: "'Parisienne', cursive", 
    fontSize:18,
    letterSpacing:0
  };
  
  const open = Boolean(anchorEl);
  const menuopen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={settheme}>
    <div className="App" style={{backgroundColor: isDarkTheme?'#212121':'white' , height: '100vh'}}>
    <CssBaseline/>
      <AppBar  color='transparent' elevation={0}>
        <Toolbar>
            <Box sx={{flexGrow: 1}}>
              <IconButton  size='large' onClick={changeTheme}>{isDarkTheme?<WbSunnyIcon sx={{color:'#cddc39'}}/> : <DarkModeIcon sx={{color:'black',}}/>}</IconButton>
            </Box>
            
            <Chip sx={calligraphyFontStyle}  size='medium' onClick={menuopen}
                  avatar={<Avatar src={myAvatar} alt=''  />} label='Sakthikarthick' variant='outlined'/>
         
          
        </Toolbar>
        </AppBar><br/><br/>
      
          
          <Head/>
          <NoteTab isDarkTheme={isDarkTheme} />
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <Stack direction='row' spacing={0} sx={{backgroundColor:'transparent',padding:0,margin:0}}>
              <IconButton component={Link} href='https://github.com/Sakthikarthick3107' 
                                target='blank' ><Avatar src={github} alt=''/></IconButton>
              <IconButton component={Link} href='https://www.instagram.com/__intelligent__psycho__/' 
                                target='blank' ><Avatar src={instagram} alt=''/></IconButton>
              <IconButton component={Link} href='https://www.linkedin.com/in/sakthikarthick-nagendran-5b5050229/' 
                                target='blank' ><Avatar src={linkedin} alt=''/></IconButton>
              <IconButton component={Link} href='mailto:sakthikarthick3107@gmail.com' 
                                target='blank' ><Avatar src={mail} alt=''/></IconButton>
            </Stack>
          </Menu>
        
      
    </div>
    </ThemeProvider>
  );
}

export default App;
