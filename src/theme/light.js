import { createTheme } from '@mui/material'


const light = createTheme({
    typography: {
        fontFamily: 'monospace'
    },
    
   
    components: {
        
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#ff5722', 
                    '&:hover':  {
                        backgroundColor: '#e53935'
                    }
                },
                outlined: {
                    color: '#ff5722',
                    borderColor:  '#ff5722',
                    '&:hover' :{
                        borderColor:  '#ff5722',
                        backgroundColor:'white'
                    }
                },
                root:{
                    width: 150
                }
            }
        },
        MuiChip:{
            styleOverrides: {
                root: {
                    color: 'white',
                    backgroundColor: 'black',
                    ":hover":{
                        color:'#d84315',
                        backgroundColor: 'black',
                    }
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    height: 30,
                    width: 30
                }
            }
        }
       
        
    }

})
  


export default light
