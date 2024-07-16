import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderBottom: '1px solid #ffffff',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')

    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Learn more (Huypmg16)"
          onClick={() => {}} />

        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/ Private Workspace"
          onClick={() => {}} />

        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          onClick={() => {}} />

        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => {}} />

        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Features"
          onClick={() => {}} />
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddAlt1Icon />}
          sx={ {
            color: 'white',
            borderColor: 'white',
            '&:hover' : { borderColor: 'white' }

          } }
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 30,
              height: 30,
              fontSize: 12,
              border: 'none'
            }
          }}>
          <Tooltip title= "huypmg16">
            <Avatar
              alt="huypmg16"
              src="https://yt3.googleusercontent.com/uiDl4kx3v8bKmLAkV6GeZ1cYQNSiOok3jqsDLozAXSwL8LcAFisybi4lKa5kmfg6Uh-EWew_dw=s160-c-k-c0x00ffffff-no-rj"
            />
          </Tooltip>
          <Tooltip title= "huypmg16">
            <Avatar
              alt="huypmg16"
              src="https://wibu.com.vn/wp-content/uploads/2024/05/songoku.jpg"
            />
          </Tooltip>
          <Tooltip title= "huypmg16">
            <Avatar
              alt="huypmg16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQU5SGjVDv6oCQgsZMSnk9qw1rVYXn_8MEEw&s"
            />
          </Tooltip>
          <Tooltip title= "huypmg16">
            <Avatar
              alt="huypmg16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHDPq7UoNG5Xg_X6OsEJxkFCqks38x_kCtQ&s"
            />
          </Tooltip>
          <Tooltip title= "huypmg16">
            <Avatar
              alt="huypmg16"
              src="https://img.lazcdn.com/g/p/27df56b663f651e3db963fec4426bde9.jpg_720x720q80.jpg"
            />
          </Tooltip>
          <Tooltip title= "huypmg16">
            <Avatar
              alt="huypmg16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7OX3KtOkpAaLFmAwcsUVGI5_SDlG7YDLRVBNQ2w36q8TGBPGPy-VYt9yQu2VqasmJQA&usqp=CAU"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
