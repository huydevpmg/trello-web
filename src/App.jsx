
import Button from '@mui/material/Button'
import AbcIcon from '@mui/icons-material/Abc'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'


function App() {

  return (
    <>
      <div>giahuyphan</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AbcIcon/>
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
