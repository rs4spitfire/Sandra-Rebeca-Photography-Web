import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AppBar from '@mui/material/AppBar';
import {
    Box,
    alpha,
    Stack,
    lighten,
    Divider,
    IconButton,
    Tooltip,
    styled,
    useTheme,
    Toolbar,
    Typography,
    
  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export default function ImageListComponent(props) {
    const theme = useTheme();
      
  return (
    <>
    
    <Box sx={{ padding: "10px",width: "100%", height: 1000,overflowY: 'auto', position: 'relative'}}>  
    
    <ImageList  variant="masonry" cols={props.numColumns} gap={props.gapSize}>
      {props.itemList.map((item) => (
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

    </>
  );
}

