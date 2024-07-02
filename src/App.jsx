import * as React from 'react'
import Button from '@mui/material/Button'
import AbcIcon from '@mui/icons-material/Abc'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value='light'>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          </Box> */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LightModeIcon /> Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon />Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SettingsBrightnessIcon /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme()
//   // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
//   // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

//   // console.log('PreferDarkMode: ', prefersDarkMode)
//   // console.log('PreferLightMode: ', prefersLightMode)

//   return (
//     <Button
//       onClick={() => {
//         setMode(mode === 'light' ? 'dark' : 'light')
//       }}
//     >
//       {mode === 'light' ? 'Turn dark' : 'Turn light'}
//     </Button>
//   )
// }


function App() {
  return (
    <>
      <ModeSelect />
      <hr />
      <div>giahuyphan</div>
      <Typography variant="body2" color="text.secondary">AA</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained" color='success'>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <AbcIcon />
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
