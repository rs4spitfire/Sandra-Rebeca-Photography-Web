import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

//import ImageListItemBar from '@mui/material/ImageListItemBar';
/*This goes underneath ImageListItem -- 
            <ImageListItemBar
             sx={{fontFamily:'Helvetica'}}
            title={item.title}
            subtitle="Test1"/>*/

export default function SplashPagePhotos() {
  return (
    <Box sx={{ width: "100%", height: 1500 }}>
      <ImageList variant="standard" cols={2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
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
        img: '/static/images/Photos/HomePage/3.jpg',
        title: '3',
      },
  {
    img: '/static/images/Photos/HomePage/1.jpg',
    title: '1',
  },
  {
    img: '/static/images/Photos/HomePage/2.jpg',
    title: '2',
  },
  {
    img: '/static/images/Photos/HomePage/4.jpg',
    title: '4',
  },
  {
    img: '/static/images/Photos/HomePage/5.jpg',
    title: '5',
  },
  {
    img: '/static/images/Photos/HomePage/6.jpg',
    title: '6',
  }    

];