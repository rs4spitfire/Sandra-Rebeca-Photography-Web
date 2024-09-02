import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/static/images/Photos/Nature/sunset_beach.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: -1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 1,
  },
}));

export default function ContactMePage() {
  return (
    <>
      <BackgroundContainer />
      <Container 
        maxWidth={false} 
        sx={{ 
          width: { xs: '100%', md: '85%', lg: '90%' },
          mt: 4, 
          display: 'flex', 
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            boxShadow: 2,
            maxWidth: '80%',
            margin: '0 auto',
          }}
        >
          <Box 
            sx={{ 
              flex: 1, 
              display: { xs: 'none', md:'none', lg: 'flex' }, 
              alignItems: 'center', 
              justifyContent: 'center', 
              p: 2 
            }}
          >
            <img
              src="/static/images/Photos/Sandra_Contact.jpg"
              alt="Sandra with Lens"
              loading="lazy"
              title="Sandra with Lens"
              style={{ width: '100%', height: 'auto', borderRadius: '4px', objectFit: 'cover' }}
            />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
          <Box sx={{ flex: 2, p: 3 }}>
            <CardHeader
              title={<Typography variant="h5">Contact Sandra Rebeca</Typography>}
            />
            <Divider variant="middle" sx={{ mb: 3 }} />
            <CardContent>
              <Box 
                component="form" 
                name="contact" // This is required for Netlify Forms
                method="POST" 
                data-netlify="true" // This attribute is required
                data-netlify-honeypot="bot-field" // Honeypot for spam protection
                autoComplete="off"
              >
                <input type="hidden" name="form-name" value="contact" /> {/* Hidden field for form name */}
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Tooltip title="Enter your name">
                      <TextField
                        name="name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{ pb: 2 }}
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="phone"
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      required
                      sx={{ pb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      sx={{ pb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="homeCity"
                      label="Home City"
                      variant="outlined"
                      fullWidth
                      sx={{ pb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="placeToVisit"
                      label="One place you would like to visit"
                      variant="outlined"
                      fullWidth
                      sx={{ pb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="photoLocation"
                      label="Favorite Photography Location"
                      variant="outlined"
                      fullWidth
                      sx={{ pb: 2 }}
                    />
                  </Grid>
                </Grid>
                <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ p: 1 }}>
                  <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Container>
    </>
  );
}