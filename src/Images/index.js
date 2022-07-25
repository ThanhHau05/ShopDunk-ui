function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

const Images = {
    Image_Home_Slider: [
        {
            image: images[0],
        },
        {
            image: images[1],
        },
        {
            image: images[2],
        },
        {
            image: images[3],
        },
        {
            image: images[4],
        },
        {
            image: images[5],
        },
    ],
    Image_Home_Column: [
        {
            image: images[6],
            to: 'but-pencil',
        },
        {
            image: images[7],
            to: 'airpods',
        },
        {
            image: images[8],
            to: 'phu-kien',
        },
    ],
};

export default Images;
