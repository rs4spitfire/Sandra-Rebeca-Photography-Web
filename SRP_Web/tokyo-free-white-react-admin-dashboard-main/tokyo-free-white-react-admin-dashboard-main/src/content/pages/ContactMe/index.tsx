import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ImageWrapper from './ImageWrapper';
import ImageWrapperBottom from './ImageWrapperBottom';
import {ThemeProvider,useTheme} from '@mui/material/styles'
import{
Container,
Grid,
Card,
CardHeader,
CardContent,
Divider,
Box,
TextField,
Stack,
Button,
Chip,
Tooltip,
Link,
IconButton,
FormGroup,
FormControlLabel,
Typography
}from '@mui/material'

const Item = styled(Card)(({ theme }) => ({
    ...theme.typography.body1,
    borderRadius: '20px',
    textAlign: 'left'
  }));

function ContactMePage(props){
  const theme = useTheme();
return(
  <>
      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent="start" spacing={1} sx={{padding:"20px"}}>
           <Box component={Grid} item display={{xs: "none", sm: "block" }} sm={6} md={5} lg={4}> 
             <Item>
              <ImageWrapper></ImageWrapper>
             </Item>
            </Box>
           
            
        <Grid item xs={8} md={4} lg={6} paddingBottom={5}>
        <Card variant="outlined">
          <CardHeader title="Contact Sandra Rebeca" />
          <CardContent>
          <Box component="form" autoComplete="off">
            <Grid
            container
            direction="row"
            justifyContent="start"
            
            spacing={1}>
              <Grid item xs={12} lg={6}>
                  <TextField label="Name" variant="outlined" sx={{pb:1}} />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <TextField label="Phone" variant="outlined" sx={{pb:1}} />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <TextField label="Email" variant="outlined" sx={{pb:1}} />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <TextField label="Home City" variant="outlined" sx={{pb:1}} />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <TextField sx={{pb:1}} InputLabelProps={{style: {fontSize: 12}}} id="standard-basic" label="One place you would like to visit" variant="outlined" />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <TextField sx={{pb:1}} InputLabelProps={{style: {fontSize: 12}}} id="standard-basic" label="Favorite Photography Location" variant="outlined" /> 
              </Grid>
            </Grid>
          </Box>
          </CardContent>
            <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{padding:1}}>
              <Button variant="contained">Submit</Button>
            </Stack>
        </Card>
        </Grid>
        </Grid>
        </Container>
  
  </>
      );
}

export default ContactMePage;