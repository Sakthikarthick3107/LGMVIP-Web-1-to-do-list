import { createTheme } from '@mui/material'


const dark = createTheme({
    typography: {
        fontFamily: 'monospace',
        allVariants: {
            color: 'white'
        }
    },
    palette: {
        action: {
            disabled: {
                backgroundColor: '#ffcdd2'
                
            }
        }
    },
    components: {
        
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& fieldset': {
                        borderColor: 'red', 
                      },
                      input: {
                        color:  'white'
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: 'red',
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
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    color:  'black'
                }
            }
        },
        MuiChip:{
            styleOverrides: {
                root: {
                    backgroundColor: '#cddc39',
                    ":hover":{
                        color:'white'
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
  


export default dark
