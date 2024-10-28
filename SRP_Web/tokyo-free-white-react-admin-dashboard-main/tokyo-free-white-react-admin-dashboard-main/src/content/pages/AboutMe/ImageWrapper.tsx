import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageWrapper() {
  return (
    <Box sx={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
      <ImageList variant="standard" cols={1} gap={0}>
        {itemData.map((item) => (
          <ImageListItem 
            key={item.img} 
            sx={{ width: '100%', height: 200, overflow: 'hidden', borderRadius: 2 }}
          >
            <img
              src={`${item.img}?w=300&fit=crop&auto=format`}
              srcSet={`${item.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '8px' 
              }}
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
    img: '/static/images/Photos/AboutMe/Sandra_Posing_w_Lens.jpg',
    title: 'Sandra with Lens',
  },
];