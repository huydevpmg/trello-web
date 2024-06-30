
import Button from '@mui/material/Button'
import AbcIcon from '@mui/icons-material/Abc'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography  from '@mui/material/Typography'

function App() {

  return (
    <>
      <div>giahuyphan</div>
      <Typography variant="body2" color="text.secondary">AA</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained" color='success'>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
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
