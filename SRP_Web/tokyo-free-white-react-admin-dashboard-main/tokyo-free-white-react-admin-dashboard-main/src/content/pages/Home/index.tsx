import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/styles';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import SplashPagePhotos from './SplashPagePhotos';
/*      <img
          src="/static/images/Photos/5.jpg"
          alt="Ian Pic"
          width={1032}
          height={750}
          />*/
function HomePage(props) {
  return (
    <>
      <Helmet>
        <title>Sandra Rebeca Photography</title>
      </Helmet>
      <SplashPagePhotos/>    
      <Footer />
    </>
  );
}

export default HomePage;