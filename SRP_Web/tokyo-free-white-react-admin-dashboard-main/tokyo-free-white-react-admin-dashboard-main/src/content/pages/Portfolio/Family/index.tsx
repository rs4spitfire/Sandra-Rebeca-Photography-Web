import ImageListComponent from 'src/content/pages/Portfolio/ImageListComponent';
import SelectFamily from './SelectFamily';
import {ThemeProvider, useTheme} from '@mui/material/styles';

function FamilyPage(){
    const theme = useTheme();
    return(
        <div>
        <SelectFamily itemData={galleryData} />
      </div>  
    );
}


export default FamilyPage;

const galleryData = [
    {
      img: '/static/images/Photos/Family/Mariela/JF (1 of 9).jpg',
      title: 'Mariela Family',
      credit: 'Sandra Rebeca Photography'
    },
    {
        img: '/static/images/Photos/Family/Schofield/JF (8 of 9).JPG',
        title: 'Schofield Family',
        credit: 'Sandra Rebeca Photography'
    },
    {
      img:'/static/images/Photos/Family/Payne/JF (2 of 11).JPG',
      title: 'Payne Family',
      credit: 'Sandra Rebeca Photography'
    },
    {
      img:'/static/images/Photos/Family/Sheppard/JF (1 of 10).JPG',
      title: 'Sheppard Family',
      credit: 'Sandra Rebeca Photography'
    },
    {
      img:'/static/images/Photos/Family/Nicholls/JF (8 of 13).JPG',
      title: 'Nicholls Family',
      credit: 'Sandra Rebeca Photography'
    }
    
  ];
