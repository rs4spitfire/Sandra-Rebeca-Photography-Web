import React, { useState } from 'react';
import { Box, ImageList, Dialog, DialogContent, useTheme, DialogProps, styled } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

const BlurryDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
    backdropFilter: "blur(5px)",
    // other styles here...
  }));
  
const itemData = [
    {
      img: '/static/images/Photos/Family/Schofield/JF (1 of 9).jpg',
      title: 'Schofield Family 1'
    },
    {
      img: '/static/images/Photos/Family/Schofield/JF (2 of 9).jpg',
      title: 'Schofield Family 2'
    },
    {
      img: '/static/images/Photos/Family/Schofield/JF (3 of 9).jpg',
      title: 'Schofield Family 3'
    },
    {
      img: '/static/images/Photos/Family/Schofield/JF (4 of 9).jpg',
      title: 'Schofield Family 4'
    },
    {
      img: '/static/images/Photos/Family/Schofield/JF (5 of 9).jpg',
      title: 'Schofield Family 5'
    },
    {
      img: '/static/images/Photos/Family/Schofield/JF (6 of 9).jpg',
      title: 'Schofield Family 6'
    },
    {
      img: '/static/images/Photos/Family/Schofield/JF (7 of 9).jpg',
      title: 'Schofield Family 7'
    },
    {
      img: '/static/images/Photos/Family/Schofield/JF (8 of 9).jpg',
      title: 'Schofield Family 8'
    },
    {
      img: '/static/images/Photos/Family/Schofield/JF (9 of 9).jpg',
      title: 'Schofield Family 9'
    }
  ];
  
  
function PicPage() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
    const handleClickOpen = (img) => {
      setSelectedImage(img);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setSelectedImage('');
    };
  
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
            maxWidth: 700, // Maximum width
            height: 'auto', // Auto height to fit content
            maxHeight: 400, // Maximum height of the container
          }}
        >
          <ImageList
            variant="masonry"
            cols={3} // Number of columns
            gap={10} // Adjust gap as needed
          >
            {itemData.map((item) => (
              <Box
                key={item.img}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none', // Remove underline from link
                  color: theme.palette.text.primary, // Ensure link text color matches theme
                }}
              >
                <img
                  src={`${item.img}?w=400&fit=crop&auto=format`} // Smaller width for smaller images
                  srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`} // Higher resolution for retina displays
                  alt={item.title}
                  loading="lazy"
                  onClick={() => handleClickOpen(item.img)}
                  style={{
                    width: '100%', // Ensure image fills the item width
                    height: 'auto', // Maintain aspect ratio
                    objectFit: 'cover', // Cover the container, cropping if necessary
                    borderRadius: '16px', // Ensure image has rounded corners
                    cursor: 'pointer', // Cursor pointer to indicate clickable
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Shadow for the image
                  }}
                />
                <Box
                  sx={{
                    marginTop: '8px', // Space between image and title
                    width: '100%',
                    backgroundColor: 'transparent', // No background color
                    color: 'black', // Black text color
                    padding: '5px', // Padding for the title
                  }}
                >                  
                </Box>
              </Box>
            ))}
          </ImageList>
        </Box>
  
        {/* Modal */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          sx={{
            backdropFilter: "blur(5px)",
            '& .MuiDialog-paper': {
              borderRadius: '16px', // Rounded corners for the modal
              
            }
          }}
        >
          <DialogContent
            sx={{
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative', // To allow image to center properly
              maxWidth: '100vw', // Ensure modal does not exceed viewport width
              maxHeight: '100vh', // Ensure modal does not exceed viewport height
            }}
          >
            <img
              src={selectedImage}
              alt="Large view"
              style={{
                maxWidth: '100%', // Limit image width to fit modal
                maxHeight: '80vh', // Limit image height to prevent overflow
                objectFit: 'contain', // Maintain aspect ratio, fit within modal
              }}
            />
          </DialogContent>
        </Dialog>
      </Box>
    );
  }
  
  export default PicPage;