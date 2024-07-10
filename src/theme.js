import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { deepOrange, teal, orange, cyan } from '@mui/material/colors'
import { BorderColor, Height } from '@mui/icons-material'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        palette: {
          primary: cyan,
          secondary: orange
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Name of the slot
        body: {
          // Some CSS
          // * apply to all the scroll bar
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover' :{
            backgroundColor: '#00b894'
          }
        }
      }
    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({
          '&.appBarIcon': {
            color: theme.palette.primary.main // Màu chính từ chủ đề
          }
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline':{
            borderColor: theme.palette.primary.light
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline':{
              borderColor: theme.palette.primary.main
            }
          },
          '& fieldset': {
            // '.MuiOutlinedInput-notchedOutline':{
            //   borderColor: 'black'
            // }
            borderWidth: '1px !important'
          }
        })
      }
    }
  }
})

export default theme