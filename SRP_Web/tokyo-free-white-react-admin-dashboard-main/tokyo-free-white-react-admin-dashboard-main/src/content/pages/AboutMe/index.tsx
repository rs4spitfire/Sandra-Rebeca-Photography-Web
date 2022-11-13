import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import ImageWrapper from './ImageWrapper';
import ImageWrapperBottom from './ImageWrapperBottom';
import SplashPagePhotos from '../Home/SplashPagePhotos';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'
import {ThemeProvider,useTheme} from '@mui/material/styles'

const Item = styled(Card)(({ theme }) => ({
    ...theme.typography.body1,
    
    textAlign: 'left'
  }));

function AboutMePage(props){
  const theme = useTheme();
return(
        <Box  sx={{ width: "100%", padding:"20px", flexGrow: 5,justifyContent:'center' }}>
          <Grid alignItems="top" container spacing={2}>
            
            <Grid item xs={4}>
              <Item>
              <ImageWrapper></ImageWrapper>
              </Item>
            </Grid>
            <Grid item xs={8} spacing={2}>
                <Item>
                <Typography variant="h1">About the Photographer</Typography><Divider />
                <Typography variant="h3"><br></br>Hello<br></br></Typography><div><br></br></div>
                <Typography variant="body1" sx={{whiteSpace:'pre-line'}}>My name is Sandra Rebeca and I am a photographer currently living in the small town of Remington Virginia.<pre></pre>                
                I am originally from El Salvador and I came to the United States about 20 years ago.<pre></pre>I have three beautiful children and an amazing husband who supports me by helping me buy photography equipment whenever I have an inkling for wanting to shoot in a different way.<pre></pre>  </Typography>
                <Typography variant="body2" sx={{whiteSpace:'pre-line'}}>Hello My name is Sandra Rebeca and I am a photographer currently living in the small town of Remington Virginia.<pre></pre>                
                I am originally from El Salvador and I came to the United States about 20 years ago.<pre></pre>I have three beautiful children and an amazing husband who supports me by helping me buy photography equipment whenever I have an inkling for wanting to shoot in a different way.  </Typography>
                </Item>
            <Grid item xs={12} sx={{paddingTop:'10px'}}>
                <Item>
                    <ImageWrapperBottom />
                </Item>
            </Grid>
            </Grid>
            
          </Grid>
        </Box>
      );
}

export default AboutMePage;