import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

//import ImageListItemBar from '@mui/material/ImageListItemBar';
/*This goes underneath ImageListItem -- 
            <ImageListItemBar
             sx={{fontFamily:'Helvetica'}}
            title={item.title}
            subtitle="Test1"/>*/

export default function ImageWrapper() {
  return (
    <Box sx={{ padding: "10px",width: "100%" }}>
      <ImageList variant="standard" cols={2} gap={1}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              //title={item.title}
            />
             
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
    {
        img: '/static/images/Photos/AboutMe/Sandra_BW.jpg',
        title: 'Sandra Black and White'
      },
      {
        img: '/static/images/Photos/AboutMe/Sandra_Kids.jpg',
        title: 'Sandra with Kids'
      }
];