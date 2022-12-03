import ImageListComponent from 'src/content/pages/Portfolio/ImageListComponent';

function NewbornPage(){
    return(<>
    <ImageListComponent itemList={newbornImages} numColumns={2} gapSize={8} bannerTitle="NEWBORN"></ImageListComponent>    
    </>);
}

export default NewbornPage;

const newbornImages = [
    {
        img: '/static/images/Photos/Newborn/Baby Dave 1.jpg',
        title: 'Baby Dave 1'

    },
    
    {
        img: '/static/images/Photos/Newborn/Dave\'s Hand.jpg',
        title: 'Baby Dave\'s Hand'

    },
    {
        img: '/static/images/Photos/Newborn/Ellie Festive.jpg',
        title: 'Baby Ellie 1'

    },
    
    {
        img: '/static/images/Photos/Newborn/Ian and Isa.jpg',
        title: 'Ian and Baby Isa 1'

    },
    
    {
        img: '/static/images/Photos/Newborn/Ian and Isa 2.jpg',
        title: 'Ian and Baby Isa 2'

    },
    {
        img: '/static/images/Photos/Newborn/Dave Halo.jpg',
        title: 'Baby Dave 2'

    },
    {
        img: '/static/images/Photos/Newborn/Isa sleeping full.jpg',
        title: 'Isa Sleeping Wide'

    },
    {
        img: '/static/images/Photos/Newborn/Isa Flower Headband.jpg',
        title: 'Isa Flowery Headband'
    },
    {
        img: '/static/images/Photos/Newborn/Isa Side Sleeping.jpg',
        title: 'Isa Sleeping'
    },
    
    {
        img: '/static/images/Photos/Newborn/Isa Sleeping 2.jpg',
        title: 'Isa Sleeping'
    },
    {
        img: '/static/images/Photos/Newborn/Isa Smiling.jpg',
        title: 'Isa Smiling'
    },
    {
        img: '/static/images/Photos/Newborn/Newborn Feet.jpg',
        title: 'Isa Feet and Family Hands'
    }
];