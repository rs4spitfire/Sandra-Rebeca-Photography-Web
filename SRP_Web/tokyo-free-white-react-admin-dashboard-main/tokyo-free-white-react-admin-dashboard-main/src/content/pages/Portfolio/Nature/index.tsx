import ImageListComponent from 'src/content/pages/Portfolio/ImageListComponent';

function NaturePage(){
    return(<>
    <ImageListComponent itemList={natureImages} numColumns={2} gapSize={8} bannerTitle="NATURE"></ImageListComponent>    
    </>);
}

export default NaturePage;

const natureImages = [
    {
        img: '/static/images/Photos/Nature/sunset_beach.jpg',
        title: 'Virginia Beach Sunset'

    },
    {
        img: '/static/images/Photos/Nature/beach_feet.jpg',
        title: 'Beach Relaxing'

    },
    {
        img: '/static/images/Photos/Nature/rose.jpg',
        title: 'Red Rose'

    },
    {
        img: '/static/images/Photos/Nature/squirrel.jpg',
        title: 'Squirrel'

    },
    
    {
        img: '/static/images/Photos/Nature/white_flowers.jpg',
        title: 'White Flowers'

    },
    {
        img: '/static/images/Photos/Nature/sunset-in-provo.jpg',
        title: 'Provo Utah Sunset'

    },
    {
        img: '/static/images/Photos/Nature/flower_mirror.jpg',
        title: 'Flower on a Mirror'

    },
    {
        img: '/static/images/Photos/Nature/yellow_flower_close.jpg',
        title: 'Yellow Flower Closeup'

    }
];