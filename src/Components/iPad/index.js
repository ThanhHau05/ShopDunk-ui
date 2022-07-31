import Config from '~/Config';

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

const ImagesListItemiPad = {
    data: [
        {
            image: images[0],
            current: 'ipadpro',
            to: 'ipad-pro-11-inch-m1-2021',
            label: 'iPad Pro 11 inch (M1, 2021)',
            price: 'Giá từ 19.490.000₫',
        },
        {
            image: images[1],
            current: 'ipadair',
            to: 'ipad-air-5',
            label: 'iPad Air 5',
            price: 'Giá từ 15.190.000₫',
        },
        {
            image: images[0],
            current: 'ipadpro',
            to: 'ipad-pro-11-inch-m1-2021',
            label: 'iPad Pro 11 inch (M1, 2021)',
            price: 'Giá từ 19.490.000₫',
        },
        {
            image: images[2],
            current: 'ipad9',
            to: 'ipad-gen-9-2021',
            label: 'iPad gen 9 (2021)',
            price: 'Giá từ 8.490.000₫',
        },
        {
            image: images[3],
            current: 'ipadmini',
            to: 'ipad-mini-6-2021',
            label: 'iPad mini 6 (2021)',
            price: 'Giá từ 13.190.000₫',
        },
    ],
    more: [
        {
            image: images[4],
            to: 'so-sanh',
            title1: 'Tìm iPad',
            title2: 'phù hợp với bạn',
            text: 'So sánh các iPad',
        },
        {
            image: images[5],
            to: Config.routes.phu_kien,
            title1: 'Phụ kiện iPad',
            title2: 'thường mua kèm',
            text: 'Tim phụ kiện iPad',
        },
    ],
};
export default ImagesListItemiPad;
