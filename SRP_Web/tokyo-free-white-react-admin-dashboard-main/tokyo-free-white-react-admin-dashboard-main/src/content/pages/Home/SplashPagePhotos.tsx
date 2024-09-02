
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';



const itemData = [
  {
    img: '/static/images/Photos/HomePage/3(resize).jpg',
    title: '3',
  },
  {
    img: '/static/images/Photos/HomePage/1(resize).jpg',
    title: '1',
  },
  {
    img: '/static/images/Photos/HomePage/2(resize).jpg',
    title: '2',
  },
  {
    img: '/static/images/Photos/HomePage/4(resize).jpg',
    title: '4',
  },
  {
    img: '/static/images/Photos/HomePage/5(resize).jpg',
    title: '5',
  },
  {
    img: '/static/images/Photos/HomePage/6(resize).jpg',
    title: '6',
  }
];

export default function SplashPagePhotos() {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}>
      {/* Slider Container */}
      <Slider {...settings}>
        {itemData.map((item) => (
          <Box key={item.img} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={`${item.img}?w=800&fit=crop&auto=format`}
              srcSet={`${item.img}?w=800&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '0', // No rounded corners
              }}
            />
          </Box>
        ))}
      </Slider>

      {/* Card Below Slider */}
      <Card
         sx={{
          width: '100%', // Full width by default
          maxWidth: '1500px', // Maximum width constraint
          margin: '50px auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: { xs: '20px', md: '50px' }, // Responsive padding
          boxShadow: 3,
        }}
      >
        <CardContent>
        <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: '20px' }} // Adds margin above the button
            href="#contact" // Adjust this href to your actual contact section or page
          >Let's Talk</Button>
          <Typography sx={{ fontSize: { xs: 14, md: 20 } }} variant="body1">
            "Through my photography, I capture the genuine love, laughter, and connection that define family life, preserving those precious moments for generations to come. Every image tells the story of togetherness, reflecting the unique bond that makes each family beautifully unique."
          </Typography>          
        </CardContent>
      </Card>

      {/* Footer */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'black',
          color: 'white',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography sx={{ fontSize: { xs: 10, md: 14 }, opacity: 0.5 }} variant="body2" component="p">
          Web Site by Richard Sherwood | All photography by Sandra Rebeca Photography © 2024 | All rights reserved.
        </Typography>
        <Link
          color={theme.palette.secondary.dark}
          underline="none"
          href="https://www.instagram.com/sandrar_photography/?hl=en"
          target="_blank"
        >
          <InstagramIcon fontSize="large" />
        </Link>
      </Box>
    </Box>
  );
}

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        width: 64,
        height: 64,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '50%',
        zIndex: 1,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      }}
    >
      <ChevronRightIcon sx={{ fontSize: 48 }} />
    </IconButton>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        width: 64,
        height: 64,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '50%',
        zIndex: 1,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      }}
    >
      <ChevronLeftIcon sx={{ fontSize: 48 }} />
    </IconButton>
  );
};