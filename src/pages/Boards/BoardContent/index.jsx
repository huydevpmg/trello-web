import Box from '@mui/material/Box'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '50px'
const HEADER_FOOTER_STYLES = {
  height: COLUMN_HEADER_HEIGHT,
  p: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}
function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {setAnchorEl(event.currentTarget)}
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width: '100%',
      height:  (theme) => theme.trello.boardContentHeight,
      p: '5px 0'
    }}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '10px'
        },
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}>
        {/* Column 1 */}
        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          mt: 2,
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          // height
        }}>
          {/* Box Column Header */}
          <Box sx={HEADER_FOOTER_STYLES}>
            <Typography variant='h7' sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Column Title
            </Typography>
            <Box>
              <Tooltip title='More Options'>
                <ExpandMoreIcon
                  sx={{ color: 'text.primary', cursor: 'pointer' }}
                  id="basic-column-dropdown"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id="basic-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown'
                }}
              >
                <MenuItem>
                  <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Add a new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                  <ListItemText>Archieve this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><RemoveCircleIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Box Column List Card */}
          <Box sx={{
            p: '0 5px 5px 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(
            ${theme.trello.boardContentHeight} -
            ${theme.spacing(9)} -
            ${COLUMN_HEADER_HEIGHT} -
            ${COLUMN_FOOTER_HEIGHT}
            )`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#7f8fa6',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover' :{
              backgroundColor: '#718093'
            }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://i.imgur.com/ZF6s192.jpg"
                title="green iguana"
              />
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>Gia Huy Dev</Typography>
              </CardContent>
              <CardActions sx={{ p: '0px 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
              </CardActions>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
          </Box>
          {/* Box Column Footer */}

          <Box sx={HEADER_FOOTER_STYLES}>
            <Button startIcon={<AddCardIcon/>}>
              Add New Card
            </Button>
            <Tooltip title='Drag to move' enterDelay={0}>
              <DragHandleIcon sx={{ cursor: 'pointer' }}/>
            </Tooltip>
          </Box>

        </Box>

        {/* Column 2 */}
        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          mt: 2,
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          // height
        }}>
          {/* Box Column Header */}
          <Box sx={HEADER_FOOTER_STYLES}>
            <Typography variant='h7' sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Column Title
            </Typography>
            <Box>
              <Tooltip title='More Options'>
                <ExpandMoreIcon
                  sx={{ color: 'text.primary', cursor: 'pointer' }}
                  id="basic-column-dropdown"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id="basic-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown'
                }}
              >
                <MenuItem>
                  <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Add a new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                  <ListItemText>Archieve this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><RemoveCircleIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Box Column List Card */}
          <Box sx={{
            p: '0 5px 5px 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(
            ${theme.trello.boardContentHeight} -
            ${theme.spacing(9)} -
            ${COLUMN_HEADER_HEIGHT} -
            ${COLUMN_FOOTER_HEIGHT}
            )`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#7f8fa6',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover' :{
              backgroundColor: '#718093'
            }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset'

            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://i.imgur.com/ZF6s192.jpg"
                title="green iguana"
              />
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>Gia Huy Dev</Typography>
              </CardContent>
              <CardActions sx={{ p: '0px 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
              </CardActions>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '2px 2px 6px #353b48',
              overflow: 'unset',
              gap: 2
            }}>
              <CardContent sx={{
                p: 1.5, '&:last-child': { p: 1.5 }
              }}>
                <Typography>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
          </Box>
          {/* Box Column Footer */}

          <Box sx={HEADER_FOOTER_STYLES}>
            <Button startIcon={<AddCardIcon/>}>
              Add New Card
            </Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon sx={{ cursor: 'pointer' }}/>
            </Tooltip>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
