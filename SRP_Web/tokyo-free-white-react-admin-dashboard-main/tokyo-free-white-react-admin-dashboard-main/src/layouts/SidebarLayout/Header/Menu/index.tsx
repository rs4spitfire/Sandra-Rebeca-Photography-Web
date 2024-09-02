import {
  Typography, Badge, useTheme, Popover, Card, CardContent, Button, IconButton, Link, Box, Menu, MenuItem
} from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import { ClickAwayListener } from '@mui/base';
import { NavLink as RouterLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function HeaderTitle() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const divRef = useRef();
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dropdownOpen = Boolean(dropdownAnchorEl);
  const id = open ? "simple-popover" : undefined;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  function openPopUp() {
    setAnchorEl(divRef.current);
  }

  function closePopUp() {
    setAnchorEl(null);
  }

  const handlePortfolioHover = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
  };

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      closePopUp();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: "Portfolio", path: "/pages/Portfolio" },
    { label: "Prices", path: "/pages/Business" },
    { label: "About Me", path: "/pages/AboutMe" },
    { label: "Contact", path: "/pages/ContactMe" }
  ];

  const portfolioItems = [
    { label: "Family", path: "/pages/Portfolio/Family" },
    { label: "Newborn", path: "/pages/Portfolio/Newborn" },
    { label: "Engagement", path: "/pages/Portfolio/Engagement" },
    { label: "Senior Photos", path: "/pages/Portfolio/SeniorPhotos" },
    { label: "Modeling Portraits", path: "/pages/Portfolio/ModelingPortraits" }
  ];

  return (
    <>
      <Link href="/">
        <img
          src="/static/images/logo/SRP_Logo_Cropped.png"
          alt="SRP Logo"
          width={221}
          height={143}
        />
      </Link>

      <Box sx={{ width: '100%' }}>
        {!isMobile && (
          <div>
            {navItems.map((item) => (
              item.label === "Portfolio" ? (
                <Button
                  key={item.label}
                  disableRipple
                  component={RouterLink}
                  to={item.path}
                  onMouseEnter={handlePortfolioHover}
                  aria-controls={dropdownOpen ? 'portfolio-menu' : undefined}
                  aria-haspopup="true"
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  disableRipple
                  component={RouterLink}
                  to={item.path}
                >
                  {item.label}
                </Button>
              )
            ))}
          </div>
        )}
      </Box>

      {/* Dropdown Menu */}
      <Menu
  id="portfolio-menu"
  anchorEl={dropdownAnchorEl}
  open={dropdownOpen}
  onClose={handleDropdownClose}
  onMouseLeave={handleDropdownClose}
  MenuListProps={{ onMouseLeave: handleDropdownClose }}
  PaperProps={{
    style: {
      boxShadow: 'none',
      position: 'absolute', // Position absolutely to avoid affecting layout
      top: '100%', // Position below the button
      left: 0, // Align with the left edge of the button
      zIndex: theme.zIndex.modal, // Ensure it appears above other content
    },
  }}
  sx={{
    mt: 1, // Margin top to adjust spacing from the button
    width: '200px', // Specify a fixed width for the dropdown menu
  }}
>
  {portfolioItems.map((item) => (
    <MenuItem
      key={item.label}
      component={RouterLink}
      to={item.path}
    >
      {item.label}
    </MenuItem>
  ))}
</Menu>

      {/* Popover for Mobile Menu */}
      <Popover
        id={id}
        open={open}
        anchorEl={divRef.current}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={closePopUp}
        PaperProps={{
          style: {
            boxShadow: 'none', // Remove any shadow
            backgroundColor: 'white', // Solid background color
            backdropFilter: 'none', // Remove any blur effect
            WebkitBackdropFilter: 'none', // Ensure compatibility with Webkit browsers
          },
        }}
        sx={{
          backdropFilter: 'none !important', // Ensure the entire backdrop has no blur
          WebkitBackdropFilter: 'none !important', // Ensure compatibility with Webkit browsers
        }}
      >
        <ClickAwayListener onClickAway={closePopUp}>
          <Card variant="outlined">
            <CardContent>
              {navItems.map((item) => (
                <div key={item.label}>
                  <Button disableRipple onClick={closePopUp} component={RouterLink} to={item.path}>
                    {item.label}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </ClickAwayListener>
      </Popover>

      {isMobile && (
        <IconButton
          ref={divRef}
          aria-label="more"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          sx={{ color: theme.palette.secondary.dark }}
          onClick={openPopUp}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      )}

      <Link
        color={theme.palette.secondary.dark}
        underline="none"
        href="https://www.instagram.com/sandrar_photography/?hl=en"
        target="_blank"
      >
        <InstagramIcon fontSize={isMobile ? "large" : "small"} />
      </Link>
    </>
  );
}

export default HeaderTitle;