import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';
import SplashPagePhotos from './SplashPagePhotos';
/*      <img
          src="/static/images/Photos/5.jpg"
          alt="Ian Pic"
          width={1032}
          height={750}
          />*/
function DashboardCrypto(props) {
  return (
    <>
      <Helmet>
        <title>Future Main Page</title>
      </Helmet>
      <SplashPagePhotos/>    
      <Footer />
    </>
  );
}

export default DashboardCrypto;
