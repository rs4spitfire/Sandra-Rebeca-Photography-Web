import ImageListComponent from 'src/content/pages/Portfolio/ImageListComponent';

function PortraitPage(){
    return(<>
    <ImageListComponent itemList={portraitImages} numColumns={2} gapSize={8} bannerTitle="PORTRAITS"></ImageListComponent>    
    </>);
}


export default PortraitPage;

const portraitImages = [
    {
        img: '/static/images/Photos/Portrait/Paulina1.jpg',
        title: 'Paulina 1'

    },
    {
        img: '/static/images/Photos/Portrait/Michael1.jpg',
        title: 'Michael 1'

    },
    {
        img: '/static/images/Photos/Portrait/Mariela1.jpg',
        title: 'Mariela 1'

    },
    {
        img: '/static/images/Photos/Portrait/Paulina2.jpg',
        title: 'Paulina 2'

    },
    {
        img: '/static/images/Photos/Portrait/Mariela2.jpg',
        title: 'Mariela 2'

    },
    {
        img: '/static/images/Photos/Portrait/Michael2.jpg',
        title: 'Michael 2'

    },
    {
        img: '/static/images/Photos/Portrait/8947.jpg',
        title: '1'

    },
    {
        img: '/static/images/Photos/Portrait/Paulina3.jpg',
        title: 'Paulina 3'

    },
    {
        img: '/static/images/Photos/Portrait/Michael3.jpg',
        title: 'Michael 3'

    }, 
    {
        img: '/static/images/Photos/Portrait/Mariela4.jpg',
        title: 'Mariela 4'

    },
    {
        img: '/static/images/Photos/Portrait/Michael4.jpg',
        title: 'Michael 4'

    },
    {
        img: '/static/images/Photos/Portrait/8977.jpg',
        title: '2'

    }
    
];