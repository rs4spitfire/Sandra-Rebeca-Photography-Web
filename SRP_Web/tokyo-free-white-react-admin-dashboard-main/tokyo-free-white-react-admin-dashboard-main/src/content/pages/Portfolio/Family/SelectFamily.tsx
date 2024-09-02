import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { NavLink as RouterLink } from 'react-router-dom';

const itemData = [
  {
    img: '/static/images/Photos/Family/Mariela/JF (1 of 9).jpg',
    title: 'Mariela Family',
    credit: 'Sandra Rebeca Photography'
  },
  // Add more items here as needed
];

function SelectFamily() {
    const theme = useTheme();
  
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: '100vw', // Full viewport width
          height: '100vh', // Full viewport height
          padding: '10px', // Padding around the container
          bgcolor: 'background.paper', // Optional: background color
          marginTop: '10px', // Distance from the top
        }}
      >
        <Box
          sx={{
            width: '90vw', // Width of the ImageList container
            maxWidth: 1400, // Maximum width for the ImageList container
            height: 'auto', // Height adjusted based on content
            maxHeight: 800, // Maximum height for the ImageList container
          }}
        >
          <ImageList
            cols={3} // Number of columns
            gap={15} // Adjust gap as needed
          >
            {itemData.map((item) => (
              <Box
                key={item.img}
                component={RouterLink}
                to={'/pages/Portfolio/FAMILY/' + item.title}
                sx={{
                  position: 'relative', // Position container for title overlay
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none', // Remove underline from link
                  color: theme.palette.text.primary, // Ensure link text color matches theme
                  overflow: 'hidden', // Hide overflow for rounded corners and title
                  '&:hover .overlay': {
                    opacity: 1, // Show overlay on hover
                  },
                  '&:hover .title': {
                    opacity: 1, // Show title on hover
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%', // Ensure image wrapper fills the item width
                    paddingTop: '100%', // Create a square container
                    position: 'relative', // Position for title overlay
                    overflow: 'hidden', // Ensure overflow is hidden for rounded corners
                  }}
                >
                  <img
                    src={`${item.img}?w=800&fit=crop&auto=format`} // Larger width for higher resolution
                    srcSet={`${item.img}?w=800&fit=crop&auto=format&dpr=2 2x`} // Higher resolution for retina displays
                    alt={item.title}
                    loading="lazy"
                    style={{
                      position: 'absolute', // Position image within container
                      top: 0,
                      left: 0,
                      width: '100%', // Ensure image covers container
                      height: '100%', // Ensure image covers container
                      objectFit: 'cover', // Cover the container, cropping if necessary
                      borderRadius: '0', // Remove rounded corners
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute', // Position overlay on top of image
                      top: 0,
                      left: 0,
                      width: '100%', // Cover the entire container
                      height: '100%', // Cover the entire container
                      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
                      opacity: 0, // Hidden by default
                      transition: 'opacity 0.3s ease-in-out', // Smooth transition for overlay visibility
                      zIndex: 1, // Ensure overlay is on top of image
                    }}
                  />
                  <Box
                    className="title"
                    sx={{
                      position: 'absolute', // Absolute positioning for overlay
                      top: '50%', // Center vertically
                      left: '50%', // Center horizontally
                      transform: 'translate(-50%, -50%)', // Offset for centering
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
                      color: 'white', // White text color for contrast
                      padding: '10px', // Padding for the title
                      fontSize: '18px', // Font size for the title
                      fontFamily: 'Source Sans Pro, sans-serif',
                      opacity: 0, // Hidden by default
                      transition: 'opacity 0.3s ease-in-out', // Smooth transition for showing/hiding
                      zIndex: 2, // Ensure the title is on top of the overlay
                      width: '100%', // Cover entire width
                      height: '100%', // Cover entire height
                    }}
                  >
                    {item.title}
                  </Box>
                </Box>
                {item.title}
              </Box>
            ))}
          </ImageList>
        </Box>
      </Box>
    );
  }
  
  export default SelectFamily;