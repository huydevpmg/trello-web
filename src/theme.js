import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {

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
            height: '5px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover' :{
            backgroundColor: '#FFFFFF'
          }
        }
      }
    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderWidth: '0.5px',
          textTransform: 'none',
          '&: hover': { borderWidth: 1 }
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
        root: {
          '&.appBarIcon': {
            color: 'white' // Màu chính từ chủ đề
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline':{
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline':{
            }
          },
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '2px !important' },
          '&.Mui-focused fieldset': { borderWidth: '2px !important' }
        }
      }
    }
  }
})

export default theme