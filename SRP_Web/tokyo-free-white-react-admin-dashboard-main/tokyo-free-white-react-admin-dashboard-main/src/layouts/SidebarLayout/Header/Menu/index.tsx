import { Typography, Badge, useTheme } from '@mui/material';
import { useRef, useState,useEffect } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {Button} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useMediaQuery} from 'react-responsive';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';



function HeaderTitle() {
  
  

  useEffect(() => {

    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
      windowSize=window.innerWidth;

}

    window.addEventListener('resize', handleResize)
  })

  const theme = useTheme();

  return (
    <> <Link href="/">
    <img
        src="/static/images/logo/SRP_Logo_Cropped.png"          
        alt="SRP Logo"
        width={221}
        height={143}
    />
  </Link>
      <Box sx={{ width: '100%' }}>
     <div><Button disableRipple component={RouterLink} to="/pages/Portfolio">Portfolio</Button>
        <Button disableRipple component={RouterLink} to="/">Journal</Button>
        <Button disableRipple component={RouterLink} to="/pages/AboutMe">About Me</Button>
        <Button disableRipple component={RouterLink} to="/Pages/ContactMe">Contact</Button></div>
        
    </Box>
    <IconButton
        aria-label="more"
        id="hamburger-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        sx={{color: theme.colors.secondary.dark}}
        //onClick={handleClick}
      >
        <MenuIcon/>
      </IconButton>
    <Link color={theme.colors.secondary.dark} underline="none" href="https://www.instagram.com/sandrar_photography/?hl=en" target="_blank">
    <InstagramIcon></InstagramIcon>
    </Link>
    </>
  );
}

export default HeaderTitle;

let windowSize=500;
