import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';

import {
  Box,
  Drawer,
  alpha,
  styled,
  Divider,
  useTheme,
  Button,
  lighten,
  darken,
  Tooltip
} from '@mui/material';

import SidebarMenu from './SidebarMenu';
import Logo from 'src/components/LogoSign';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.secondary};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0,
          
          background:
            theme.palette.mode === 'light'
              ? alpha(lighten(theme.header.background, 0.1), 0.5)
              : darken(theme.colors.alpha.black[100], 0.5),
          boxShadow:
            theme.palette.mode === 'light' ? theme.sidebar.boxShadow : 'none'
        }}
      >
        <Scrollbar>
          <Box sx={{backgroundColor: theme.colors.alpha.trueWhite[100]}}mt={3}>
            <Box
              mx={2}
              sx={{
                width: 52,
                
              }}
              
            >
              <Logo />
            </Box>
          </Box>
          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.colors.secondary
            }}
          />
          <SidebarMenu />
        </Scrollbar>
        <Divider
          sx={{
            background: theme.colors.secondary
          }}
        />
        <Box p={2}>
          <Button
            href="https://bloomui.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="warning"
            size="small"
            fullWidth
          >
            Upgrade to PRO
          </Button>
        </Box>
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'light'
                ? theme.colors.secondary
                : darken(theme.colors.alpha.black[100], 0.5)
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box
                mx={2}
                sx={{
                  width: 52
                }}
              >
                <Logo />
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10]
              }}
            />
            
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
