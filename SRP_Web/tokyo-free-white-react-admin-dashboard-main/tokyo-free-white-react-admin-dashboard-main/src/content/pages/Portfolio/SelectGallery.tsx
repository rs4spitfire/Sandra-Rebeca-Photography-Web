import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { ThemeProvider,useTheme } from '@mui/material/styles';
import { NavLink as RouterLink } from 'react-router-dom';
//import useTheme from '@mui/material/styles';
//import { styled } from '@mui/material/styles';
import { themeCreator } from 'src/theme/base';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

//import ImageListItemBar from '@mui/material/ImageListItemBar';
/*This goes underneath ImageListItem -- 
            <ImageListItemBar
             sx={{fontFamily:'Helvetica'}}
            title={item.title}
            subtitle="Test1"/>*/




function SelectGallery() {
    const theme = useTheme();


  return (
    <Box alignItems="center" sx={{ padding: "10px",width: "90%", justifyContent: "center" }}>
      <ImageList variant="standard" cols={3} gap={10}>
        {itemData.map((item) => (
          <ImageListItem component={RouterLink} to={'/pages/' + item.title} key={item.img}>
            
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              //title={item.title}
            />
            <ImageListItemBar   sx={{background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  '.MuiImageListItemBar-title':{color:theme.colors.alpha.white[100]}}}
                title={item.title}
                position="top"
               
            ></ImageListItemBar>
             
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
export default SelectGallery;

const itemData = [
    {
        img: '/static/images/Photos/Family2.jpg',
        title: 'FAMILY'
      },
      {
        img: '/static/images/Photos/1.jpg',
        title: 'NEWBORN'
      },
      {
        img: '/static/images/Photos/Nature.jpg',
        title: 'NATURE'
      },
      {
        img: '/static/images/Photos/Paulina1.jpg',
        title: 'PORTRAITS'
      }
];