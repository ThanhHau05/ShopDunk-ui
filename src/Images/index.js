import iphone from './iPhone';
import ipad from './iPad';
import mac from './Mac';
import Config from '~/Config';

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
    Image_iPhone: {
        title: 'iPhone',
        to: Config.routes.iphone,
        more: 'Xem tất cả iPhone',
        data: [
            {
                image: iphone.iphone1,
                to: 'iphone13-pro-max',
                label: 'iPhone 13 Pro Max',
                price: 'Giá từ 27.390.000₫',
            },
            {
                image: iphone.iphone2,
                to: 'iphone-12',
                label: 'iPhone 12',
                price: 'Giá từ 15.790.000₫',
            },
            {
                image: iphone.iphone1,
                to: 'iphone13-pro-max',
                label: 'iPhone 13 Pro Max',
                price: 'Giá từ 27.390.000₫',
            },
            {
                image: iphone.iphone2,
                to: 'iphone-12',
                label: 'iPhone 12',
                price: 'Giá từ 15.790.000₫',
            },
        ],
    },
    Image_iPad: {
        title: 'iPad',
        to: Config.routes.ipad,
        more: 'Xem tất cả iPad',
        data: [
            {
                image: ipad.ipad1,
                to: 'ipad-air-5',
                label: 'iPad Air 5',
                price: 'Giá từ 15.190.000₫',
            },
            {
                image: ipad.ipad2,
                to: 'ipad-pro-11-inch-m1-2021',
                label: 'iPad Pro 11 inch (M1, 2021)',
                price: 'Giá từ 19.490.000₫',
            },
            {
                image: ipad.ipad1,
                to: 'ipad-air-5',
                label: 'iPad Air 5',
                price: 'Giá từ 15.190.000₫',
            },
            {
                image: ipad.ipad2,
                to: 'ipad-pro-11-inch-m1-2021',
                label: 'iPad Pro 11 inch (M1, 2021)',
                price: 'Giá từ 19.490.000₫',
            },
        ],
    },
    Image_Mac: {
        title: 'Mac',
        to: Config.routes.mac,
        more: 'Xem tất cả Mac',
        data: [
            {
                image: mac.mac1,
                to: 'macbook-pro-m2-2022',
                label: 'MacBook Pro 13 M2 2022',
                price: 'Giá từ 31.990.000₫',
            },
            {
                image: mac.mac2,
                to: 'macbook-air-m1-2020',
                label: 'MacBook Air M1 2020',
                price: 'Giá từ 22.190.000₫',
            },
            {
                image: mac.mac1,
                to: 'macbook-pro-m2-2022',
                label: 'MacBook Pro 13 M2 2022',
                price: 'Giá từ 31.990.000₫',
            },
            {
                image: mac.mac2,
                to: 'macbook-air-m1-2020',
                label: 'MacBook Air M1 2020',
                price: 'Giá từ 22.190.000₫',
            },
        ],
    },
};

export default Images;
