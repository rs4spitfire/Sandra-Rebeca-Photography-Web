import { Typography, Badge, useTheme,Popover,Card,CardContent } from '@mui/material';
import { useRef, useState,useEffect } from 'react';
import {ClickAwayListener} from '@mui/base';

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

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  console.log("Window Size: "+window.innerWidth);
  return {
    
    width,
    height
  };
}



function HeaderTitle() {
  
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const divRef=useRef();
  const [anchorEl,setAnchorEl]=useState();
  const open=Boolean(anchorEl);
  const id = open?"simple-popover":undefined;

  function openPopUp(){
    console.log("click");
    console.log(divRef)
    setTimeout(()=>setAnchorEl(divRef?.current),1)
  };

  function closePopUp(){
    //console.log(divRef);
    setAnchorEl(null);
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      closePopUp();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    { window.innerWidth>=760 && <div><Button disableRipple component={RouterLink} to="/pages/Portfolio">Portfolio</Button>
        <Button disableRipple  component={RouterLink} to="/">Journal</Button>
        <Button disableRipple component={RouterLink} to="/pages/AboutMe">About Me</Button>
        <Button disableRipple  component={RouterLink} to="/Pages/ContactMe">Contact</Button></div>}
   
        
    </Box>
    <Popover
        id={id}
        open={open}
        anchorEl={divRef.current}
        anchorOrigin={{
          vertical:'top',
          horizontal:'center'
        }}
      ><ClickAwayListener onClickAway={closePopUp}><Card variant="outlined" onBlur={closePopUp}>
        <CardContent>
        <div><Button disableRipple onClick={closePopUp} component={RouterLink} to="/pages/Portfolio">Portfolio</Button></div>
        <div><Button disableRipple onClick={closePopUp} component={RouterLink} to="/">Journal</Button></div>
        <div><Button disableRipple onClick={closePopUp} component={RouterLink} to="/pages/AboutMe">About Me</Button></div>
        <Button disableRipple onClick={closePopUp} component={RouterLink} to="/Pages/ContactMe">Contact</Button>
        </CardContent>        
        </Card>  
      </ClickAwayListener>    
    </Popover>
    {window.innerWidth<760 && <IconButton
      //fontSize={`${window.innerWidth<760 ? "large": "medium"}`}
      
      //onClick={openPopUp}
      //onBlur={closePopUp}
      ref={divRef}
        aria-label="more"
        id="hamburger-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        sx={{color: theme.colors.secondary.dark}}
        onClick={openPopUp}
      >
        <MenuIcon fontSize="large"></MenuIcon>
      </IconButton>}
      <Link color={theme.colors.secondary.dark} underline="none" href="https://www.instagram.com/sandrar_photography/?hl=en" target="_blank">
    <InstagramIcon fontSize={`${window.innerWidth<760 ? "large": "small"}`} ></InstagramIcon>
    </Link>
    </>
  );
}

export default HeaderTitle;

let windowSize=500;
