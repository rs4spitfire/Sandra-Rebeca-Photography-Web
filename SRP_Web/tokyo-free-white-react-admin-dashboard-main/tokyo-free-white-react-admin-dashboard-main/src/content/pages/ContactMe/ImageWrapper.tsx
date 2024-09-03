import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';

// Custom styled component for the image
const StyledImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  objectFit: 'cover', // Adjusts the image to cover the container
}));

export default function ImageWrapper() {
  return (
    <Box sx={{ padding: "40px", width: "100%", alignItems: 'center' }}>
      <ImageList variant="standard" cols={1} gap={0}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <StyledImg
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              title={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/static/images/Photos/Sandra_Posing_w_Lens.JPG',
    title: 'Sandra with Lens',
  }
];

