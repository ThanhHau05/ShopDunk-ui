import iphone from './iPhone';
import ipad from './iPad';
import mac from './Mac';
import Config from '~/Config';
import { ImageSlider } from './Slider';
import { ImageHomeColumn } from './HomeColumn';
import { ImagePhuKien } from './PhuKien';
const Images = {
    Image_Home_Slider: [
        {
            image: ImageSlider[0],
        },
        {
            image: ImageSlider[1],
        },
        {
            image: ImageSlider[2],
        },
        {
            image: ImageSlider[3],
        },
        {
            image: ImageSlider[4],
        },
        {
            image: ImageSlider[5],
        },
    ],
    Image_Home_Column: [
        {
            image: ImageHomeColumn[0],
            to: 'but-pencil',
        },
        {
            image: ImageHomeColumn[1],
            to: 'airpods',
        },
        {
            image: ImageHomeColumn[2],
            to: 'phu-kien',
        },
    ],
    Image_iPhone: {
        title: 'iPhone',
        current: 'iPhone',
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
        current: 'iPad',
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
        current: 'Mac',
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
    Image_Phu_Kien: {
        title: 'Phụ kiện chính hãng',
        title_name: 'Phụ kiện',
        current: 'Phụ Kiện',
        to: Config.routes.phu_kien,
        more: 'Xem tất cả Phụ kiện',
        data: [
            {
                image: ImagePhuKien[0],
                to: 'vi-da-iphone-leather-wallet-with-magsafe',
                label: 'Ví da iPhone Leather Wallet with MagSafe',
                price: '1.490.000₫',
            },
            {
                image: ImagePhuKien[1],
                to: 'sac-magsafe-charger',
                label: 'Sạc Magsafe charger',
                price: '1.290.000₫',
                old_price: '1.990.000₫',
            },
            {
                image: ImagePhuKien[0],
                to: 'vi-da-iphone-leather-wallet-with-magsafe',
                label: 'Ví da iPhone Leather Wallet with MagSafe',
                price: '1.490.000₫',
            },
            {
                image: ImagePhuKien[1],
                to: 'sac-magsafe-charger',
                label: 'Sạc Magsafe charger',
                price: '1.290.000₫',
                old_price: '1.990.000₫',
            },
        ],
    },
};

export default Images;
