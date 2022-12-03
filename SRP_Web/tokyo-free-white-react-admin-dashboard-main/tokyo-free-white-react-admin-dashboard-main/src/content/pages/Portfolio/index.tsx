import SelectGallery from './SelectGallery';
import {ThemeProvider, useTheme} from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import SplashPagePhotos from '../Home/SplashPagePhotos';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'


function PortfolioPage(props){
    const theme = useTheme();
    return(<>    
    <SelectGallery />
    </>    
    );
}

export default PortfolioPage;