import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function SplashPagePhotos() {
  return (
    <Box sx={{ width: 2000, height: 1000 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
    {
        img: '/static/images/Photos/5.jpg',
        title: 'Ian and Baby Isa',
      },
  {
    img: '/static/images/Photos/1.jpg',
    title: 'Baby Isa Wrapped',
  },
  {
    img: '/static/images/Photos/2.jpg',
    title: 'Baby Isa Sleep Side',
  },
  {
    img: '/static/images/Photos/3.jpg',
    title: 'Ian Strawberries',
  },
  {
    img: '/static/images/Photos/4.jpg',
    title: 'Ian Bike',
  }  
];