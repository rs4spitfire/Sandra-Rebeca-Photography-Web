import {
  Typography, useTheme, Popover, Card, CardContent, Button, IconButton, Link, Box, Menu, MenuItem
} from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import { ClickAwayListener } from '@mui/base';
import { NavLink as RouterLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function HeaderTitle() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const divRef = useRef();
  const [anchorEl, setAnchorEl] = useState(null);
  const [portfolioAnchorEl, setPortfolioAnchorEl] = useState(null); // New anchor for portfolio submenu
  const open = Boolean(anchorEl);
  const portfolioOpen = Boolean(portfolioAnchorEl);
  const id = open ? "simple-popover" : undefined;
  const portfolioId = portfolioOpen ? "portfolio-popover" : undefined;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  function openPopUp() {
    setAnchorEl(divRef.current);
  }

  function closePopUp() {
    setAnchorEl(null);
    setPortfolioAnchorEl(null);
  }

  const handlePortfolioClick = (event) => {
    setPortfolioAnchorEl(portfolioAnchorEl ? null : event.currentTarget);
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
                  onMouseEnter={handlePortfolioClick}
                  aria-controls={portfolioOpen ? 'portfolio-menu' : undefined}
                  aria-haspopup="true"
                  endIcon={<ExpandMoreIcon />}
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

      {/* Portfolio Dropdown (Mobile) */}
      <Popover
        id={portfolioId}
        open={portfolioOpen}
        anchorEl={portfolioAnchorEl}
        onClose={() => setPortfolioAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        PaperProps={{
          style: {
            boxShadow: theme.shadows[3],
            backgroundColor: 'white',
          },
        }}
      >
        <ClickAwayListener onClickAway={() => setPortfolioAnchorEl(null)}>
          <Card variant="outlined">
            <CardContent>
              {portfolioItems.map((item) => (
                <MenuItem
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  onClick={closePopUp}
                >
                  {item.label}
                </MenuItem>
              ))}
            </CardContent>
          </Card>
        </ClickAwayListener>
      </Popover>

      {/* Popover for Mobile Menu */}
      <Popover
        id={id}
        open={open}
        anchorEl={divRef.current}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={closePopUp}
        PaperProps={{
          style: {
            boxShadow: theme.shadows[3],
            backgroundColor: 'white',
          },
        }}
      >
        <ClickAwayListener onClickAway={closePopUp}>
          <Card variant="outlined">
            <CardContent>
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.label === "Portfolio" ? (
                    <Button disableRipple onClick={handlePortfolioClick} endIcon={<ExpandMoreIcon />}>
                      {item.label}
                    </Button>
                  ) : (
                    <Button disableRipple onClick={closePopUp} component={RouterLink} to={item.path}>
                      {item.label}
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </ClickAwayListener>
      </Popover>

      {isMobile && (
        <IconButton
          ref={divRef}
          aria-label="menu"
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
