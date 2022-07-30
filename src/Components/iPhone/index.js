import Config from '~/Config';

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

const ImagesListItemiPhone = {
    data: [
        {
            image: images[0],
            current: 'iphone13',
            to: 'iphone13-pro-max',
            label: 'iPhone 13 Pro Max',
            price: 'Giá từ 27.390.000₫',
        },
        {
            image: images[1],
            current: 'iphone12',
            to: 'iphone-12',
            label: 'iPhone 12',
            price: 'Giá từ 15.790.000₫',
        },
        {
            image: images[0],
            current: 'iphone13',
            to: 'iphone13-pro-max',
            label: 'iPhone 13 Pro Max',
            price: 'Giá từ 27.390.000₫',
        },
        {
            image: images[2],
            current: 'iphone11',
            to: 'iphone-11',
            label: 'iPhone 11',
            price: 'Giá từ 10.590.000₫',
        },
        {
            image: images[3],
            current: 'iphonese',
            to: 'iphone-se-2022',
            label: 'iPhone SE (2022)',
            price: 'Giá từ 10.990.000₫',
        },
    ],
    more: [
        {
            image: images[4],
            to: 'so-sanh',
            title1: 'Tìm iPhone',
            title2: 'phù hợp với bạn',
            text: 'So sánh các iPhone',
        },
        {
            image: images[5],
            to: Config.routes.dich_vu,
            title1: 'Phụ kiện iPhone',
            title2: 'thường mua kèm',
            text: 'Tim phụ kiện iPhone',
        },
    ],
};
export default ImagesListItemiPhone;
