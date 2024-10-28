import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ImageWrapper from './ImageWrapper';
import { useTheme } from '@mui/material/styles';

// Styled Card component
const Item = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row', // Image on the left, text on the right by default
  alignItems: 'flex-start',
  padding: theme.spacing(2),
  width: '100%',
  gap: theme.spacing(2),

  // For smaller screens, stack the image at the bottom
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', // Stack image below text on small screens
  },
}));

export default function AboutMePage() {
  const theme = useTheme();

  // Preserve newlines by using template literals
  const aboutText = `
I’m originally from El Salvador, and, as you might expect, summer feels like home to me.

I love spending time with my wonderful husband and our three beautiful kids—whether we’re at the beach, hiking through nature, playing sports, 
or exploring new destinations together.

Photography has been my passion for over a decade. There is something special about capturing vivid colors, human moments, and family memories.

Throughout the years, I’ve taken several photography courses, and with my background in graphic design, I use Adobe Software to 
enhance the vibrancy of each image and I am very detail-oriented in all of my edits.

My goal is to create timeless photos that celebrate the beauty of life and the people we share it with. 
  `;

  return (
    <Box sx={{ width: '100%', padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <Item>
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: '60%', sm: 300 }, // Adjusted width for small screens
            alignSelf: { xs: 'center', sm: 'flex-start' }, // Centered alignment for small screens
          }}
        >
          <ImageWrapper />
        </Box>

        {/* Text Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h1">About Sandra Rebeca</Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h3" gutterBottom>Hello</Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
            {aboutText}
          </Typography>

          {/* Call to Action */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'bold', // Make the text bold
              fontSize: { xs: '1.2rem', sm: '1.5rem' }, // Increase font size on small screens
              
              marginTop: 2, // Add some space above
            }}
          >
            If you're looking to capture your most meaningful moments, I’d be honored to work with you. 
            <br/>Let’s create memories that last a lifetime—reach out today to book your session!
          </Typography>
        </Box>
      </Item>
    </Box>
  );
}