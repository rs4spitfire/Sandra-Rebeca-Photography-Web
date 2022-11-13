import { Typography, Badge, useTheme } from '@mui/material';
import { useRef, useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {Button} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';



function HeaderTitle() {
  const theme = useTheme();

  return (
    <>    
    <Box sx={{ width: '100%' }}>
      <Tabs TabIndicatorProps={{style: {transition: 'none'}}}>
        
        <Button disableRipple component={RouterLink} to="/">Home</Button>  
        <Button disableRipple component={RouterLink} to="/pages/Portfolio">Portfolio</Button>
      </Tabs> 
    </Box>
    <Link href="/">
      <img
          src="/static/images/logo/SRP_Logo_Cropped.png"          
          alt="SRP Logo"
          width={221}
          height={143}
      />
    </Link>    
    <Box sx={{ width: '100%' }}>        
      <Tabs TabIndicatorProps={{style: {transition: 'none'}}}>
        <Button disableRipple component={RouterLink} to="/pages/AboutMe">About Me</Button>
        <Button disableRipple component={RouterLink} to="/Pages/ContactMe">Contact</Button>
      </Tabs>
    </Box>
    </>
  );
}

export default HeaderTitle;
/*
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem
} from '@mui/material';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
                
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                            
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu() {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <ListWrapper
      
        sx={{
          display: {
            xs: 'none',
            md: 'block',
            lg: 'flex'
            
          }
        }}
      >
        <List disablePadding component={Box} display="flex" justifyContent="center" alignItems="center"  >
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            
            button
            component={NavLink}
            to="/components/buttons"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Buttons"
            /><img
          src="/static/images/logo/SRP_Logo_Cropped.png"
          alt="SRP Logo"
          width={221}
          height={143}
          />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            
            button
            component={NavLink}
            to="/components/forms"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Forms"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  Others
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
        </List>
      </ListWrapper>
      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/overview">
          Overview
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/tabs">
          Tabs
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/cards">
          Cards
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/modals">
          Modals
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;*/
