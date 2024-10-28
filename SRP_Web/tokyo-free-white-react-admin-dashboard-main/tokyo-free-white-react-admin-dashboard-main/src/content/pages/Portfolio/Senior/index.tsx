import ImageListComponent from 'src/content/pages/Portfolio/ImageListComponent';
import SelectSenior from './SelectSenior';
import {ThemeProvider, useTheme} from '@mui/material/styles';

function FamilyPage(){
    const theme = useTheme();
    return(
        <div>
        <SelectSenior itemData={galleryData} />
      </div>  
    );
}


export default FamilyPage;

const galleryData = [
    {
      img: '/static/images/Photos/Senior/Amber/JF (2 of 11).jpg',
      title: 'Amber',
      credit: 'Sandra Rebeca Photography'
    },
    {
      img: '/static/images/Photos/Senior/Michael/JF (2 of 8).jpg',
      title: 'Michael',
      credit: 'Sandra Rebeca Photography'
    }
    
  ];
