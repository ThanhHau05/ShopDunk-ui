import Config from '~/Config';

function importAll(r) {
    return r.keys().map(r);
}

export const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

const ImagesListItemMac = {
    data: [
        {
            image: images[0],
            current: 'macpro',
            to: 'macbook-pro-m2-2022',
            label: 'MacBook Pro 13 M2 2022',
            price: 'Giá từ 31.990.000₫',
        },
        {
            image: images[0],
            current: 'macpro',
            to: 'macbook-pro-m2-2022',
            label: 'MacBook Pro 13 M2 2022',
            price: 'Giá từ 31.990.000₫',
        },
        {
            image: images[0],
            current: 'macpro',
            to: 'macbook-pro-m2-2022',
            label: 'MacBook Pro 13 M2 2022',
            price: 'Giá từ 31.990.000₫',
        },
        {
            image: images[1],
            current: 'macair',
            to: 'macbook-air-m2-2022-8gb-ram256gb-ssd',
            label: 'MacBook Air M2 2022 (8GB RAM|256GB SSD)',
            price: '500.000₫',
        },
        {
            image: images[1],
            current: 'macair',
            to: 'macbook-air-m2-2022-8gb-ram256gb-ssd',
            label: 'MacBook Air M2 2022 (8GB RAM|256GB SSD)',
            price: '500.000₫',
        },
        {
            image: images[2],
            current: 'imac',
            to: 'imac-2020-21-5-mhk33-3-0-6c-8gb-256gb-rp560x-soa',
            label: 'iMac 2020 21.5" - MHK33 (3.0 6C/8GB/ 256GB/RP560X-SOA)',
            price: '25.990.000₫',
        },
        {
            image: images[2],
            current: 'imac',
            to: 'imac-2020-21-5-mhk33-3-0-6c-8gb-256gb-rp560x-soa',
            label: 'iMac 2020 21.5" - MHK33 (3.0 6C/8GB/ 256GB/RP560X-SOA)',
            price: '25.990.000₫',
        },
        {
            image: images[3],
            current: 'macmini',
            to: 'mac-studio',
            label: 'Mac Studio',
            price: 'Giá từ 59.990.000₫',
        },
    ],
    more: [
        {
            image: images[4],
            to: 'so-sanh',
            title1: 'Tìm Mac',
            title2: 'phù hợp với bạn',
            text: 'So sánh các Mac',
        },
        {
            image: images[5],
            to: Config.routes.dich_vu,
            title1: 'Phụ kiện Mac',
            title2: 'thường mua kèm',
            text: 'Tim phụ kiện Mac',
        },
    ],
};

export default ImagesListItemMac;
