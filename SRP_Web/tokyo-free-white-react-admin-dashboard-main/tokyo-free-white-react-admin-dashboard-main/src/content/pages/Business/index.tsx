import React from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';

const pricingData = [
  {
    title: 'Engagements',
    price: '$500',
    sessionDuration: '2 hours',
    editedImages: '30 images',
  },
  {
    title: 'Newborn',
    price: '$400',
    sessionDuration: '3 hours',
    editedImages: '20 images',
  },
  {
    title: 'Senior Photos',
    price: '$350',
    sessionDuration: '1.5 hours',
    editedImages: '25 images',
  },
  {
    title: 'Family',
    price: '$450',
    sessionDuration: '2 hours',
    editedImages: '25 images',
  },
];

export default function PricingPage() {
  return (
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 800, marginBottom: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ marginBottom: 2 }}>
          Package Pricing
        </Typography>
        <Divider variant="inset" sx={{ borderColor: 'black', borderBottomWidth: '45px' }} /> {/* Thicker divider */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4, // Spacing between cards
          alignItems: 'center', // Center cards horizontally
          width: '100%',
          maxWidth: 800, // Match card width
        }}
      >
        {pricingData.map((item) => (
          <Card
            key={item.title}
            sx={{
              width: '100%', // Full width of container
              maxWidth: 800, // Max width for larger screens
              padding: 3,
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Shadow for the card
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {item.price}
              </Typography>
              <Typography variant="body1">
                Session Duration: {item.sessionDuration}
              </Typography>
              <Typography variant="body1">
                Edited Images: {item.editedImages}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}