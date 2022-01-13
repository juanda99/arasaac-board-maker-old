import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import GridOnIcon from '@mui/icons-material/GridOn'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import MuiListItemButton from '@mui/material/ListItemButton'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import ListItem from '@mui/material/ListItem'
import MuiListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SearchPictograms from '../SearchPictograms'

const drawerWidth = 75
const iconsColor = 'gray'
const iconsSelectedColor = '#fff'
const textMenuStyle = { fontSize: '0.8rem', color: iconsColor }
const textMenuSelectedStyle = { fontSize: '0.8rem', color: iconsSelectedColor }

const ListItemIcon = styled(MuiListItemIcon)({
  width: 24,
  margin: '0 auto',
  minWidth: 24,
})

const ListItemButton = styled(MuiListItemButton)({
  flexDirection: 'column',
  width: drawerWidth,
})

export default function MiniDrawer() {
  const [menu, setMenu] = useState('')
  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          '& .MuiDrawer-paperAnchorDockedLeft': {
            backgroundColor: 'black',
          },
        }}
      >
        <List>
          <ListItem
            onClick={() => setMenu('templates')}
            selected={menu === 'templates'}
            style={{
              padding: 0,
              backgroundColor: menu === 'templates' ? '#424242' : 'black',
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <GridOnIcon
                  style={{
                    color:
                      menu === 'templates' ? iconsSelectedColor : iconsColor,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={
                  menu === 'templates' ? textMenuSelectedStyle : textMenuStyle
                }
                primary="Plantilla"
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            onClick={() => setMenu('images')}
            selected={menu === 'images'}
            style={{
              padding: 0,
              backgroundColor: menu === 'images' ? '#424242' : 'black',
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <PhotoLibraryIcon
                  style={{
                    color: menu === 'images' ? iconsSelectedColor : iconsColor,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={
                  menu === 'images' ? textMenuSelectedStyle : textMenuStyle
                }
                primary="Imágenes"
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            onClick={() => setMenu('text')}
            selected={menu === 'text'}
            sx={{ padding: 0 }}
          >
            <ListItemButton>
              <ListItemIcon>
                <TextFieldsIcon style={{ color: iconsColor }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={textMenuStyle}
                primary="Textos"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {menu === 'templates' && (
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            '& .MuiDrawer-paperAnchorDockedLeft': {
              left: drawerWidth,
              backgroundColor: '#424242',
            },
          }}
        >
          <List>
            <ListItem button>
              <ListItemIcon>
                <GridOnIcon style={{ color: iconsSelectedColor }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={textMenuSelectedStyle}
                primary="Plantilla"
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PhotoLibraryIcon style={{ color: iconsSelectedColor }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={textMenuSelectedStyle}
                primary="Imágenes"
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <TextFieldsIcon style={{ color: iconsSelectedColor }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={textMenuSelectedStyle}
                primary="Textos"
              />
            </ListItem>
          </List>
        </Drawer>
      )}
      {menu === 'images' && (
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            '& .MuiDrawer-paperAnchorDockedLeft': {
              left: drawerWidth,
              backgroundColor: '#424242',
            },
          }}
        >
          <SearchPictograms />
        </Drawer>
      )}
    </div>
  )
}
