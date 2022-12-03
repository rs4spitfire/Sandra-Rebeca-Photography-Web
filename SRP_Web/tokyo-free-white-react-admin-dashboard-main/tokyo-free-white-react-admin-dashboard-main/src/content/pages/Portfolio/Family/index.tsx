import ImageListComponent from 'src/content/pages/Portfolio/ImageListComponent';

function FamilyPage(){
    return(<>
    <ImageListComponent itemList={FamilyImages} numColumns={2} gapSize={4} bannerTitle="FAMILY"></ImageListComponent>    
    </>);
}

export default FamilyPage;

const FamilyImages = [
    {
        img: '/static/images/Photos/Family/1.jpg',
        title: 'Sheppard Family'

    },
    {
        img: '/static/images/Photos/Family/2.jpg',
        title: 'Ian and Isa'

    },
    
    {
        img: '/static/images/Photos/Family/14.jpg',
        title: 'Ian'

    },
    {
        img: '/static/images/Photos/Family/3.jpg',
        title: 'Marta\'s Family'

    },
    {
        img: '/static/images/Photos/Family/4.jpg',
        title: 'Marta\'s Girls'

    },
    
    {
        img: '/static/images/Photos/Family/5.jpg',
        title: 'Isa Sugar'

    },
    {
        img: '/static/images/Photos/Family/6.jpg',
        title: 'Wilber\'s Kids1'

    },
    {
        img: '/static/images/Photos/Family/7.jpg',
        title: 'Wilber\'s Kids2'

    },
    {
        img: '/static/images/Photos/Family/8.jpg',
        title: 'Wilber\'s Kids3'

    },
    {
        img: '/static/images/Photos/Family/9.jpg',
        title: 'Norma\'s Girls'

    },
    {
        img: '/static/images/Photos/Family/10.jpg',
        title: 'Norma and Family'

    },
    {
        img: '/static/images/Photos/Family/11.jpg',
        title: 'Erik and Mel'

    },
    {
        img: '/static/images/Photos/Family/12.jpg',
        title: 'Darrin\'s Kids'

    },
    {
        img: '/static/images/Photos/Family/13.jpg',
        title: 'Ian and Isa'

    }
];