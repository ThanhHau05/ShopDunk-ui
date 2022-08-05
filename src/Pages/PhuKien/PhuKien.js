import styles from './PhuKien.module.scss';
import classNames from 'classnames/bind';
import TitleandSlider from '~/Components/TitleandSlider';
import { ImagesPhuKien } from './Images';
import { ImagesPhuKienMobile } from './Images/ImagesMobile';
import ImagesProducts from './Images/PhuKien';
import ImageProduct from '~/Components/ImageProduct';
import RadioorCheckbox from '~/Components/RadioorCheckbox/RadioorCheckbox';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

const ITEM_SELECT = [
    {
        title: 'Sản phẩm tương thích',
    },
    {
        title: 'iPhone',
    },
    {
        title: 'iPad',
    },
    {
        title: 'Watch',
    },
    {
        title: 'Mac',
    },
];

const ITEM_SORTING = [
    {
        title: 'Lọc theo...',
    },
    {
        title: 'Giá thấp nhất đến cao nhất',
    },
    {
        title: 'Giá cao nhất đến thấp nhất',
    },
];

const ITEM_RADIO = {
    title: 'Danh mục sản phẩm',
    data: [
        {
            title: 'Cường lực bảo vệ',
            current: 'cuongluc',
        },
        {
            title: 'Sạc dự phòng',
            current: 'sacduphong',
        },
        {
            title: 'But Pencil',
            current: 'butpencil',
        },
    ],
};

const ITEM_CHECKBOX_BRAND = {
    title: 'Thương hiệu',
    data: [
        {
            title: 'Apple',
            value: 'apple',
        },
        {
            title: 'Mipow',
            value: 'mipow',
        },
        {
            title: 'RAVPower',
            value: 'ravpower',
        },
        {
            title: 'JINYA',
            value: 'jinya',
        },
    ],
};

const ITEM_CHECKBOX_PRICE = {
    title: 'Mức giá',
    data: [
        {
            title: 'đ0 — đ2.000.000',
            value: '0_2000000',
        },
        {
            title: 'đ2.000.000 — đ4.000.000',
            value: '2000000-4000000',
        },
        {
            title: 'đ4.000.000 — đ6.000.000',
            value: '4000000-6000000',
        },
        {
            title: 'đ6.000.000 — đ8.000.000',
            value: '6000000-8000000',
        },
        {
            title: 'đ8.000.000 — đ10.000.000',
            value: '8000000-10000000',
        },
    ],
};

const newarray = [];
function PhuKien() {
    const [background, setBackground] = useState(false);
    const [iproduct, setIProduct] = useState([]);
    const [iproductclone, setIProductClone] = useState([]);
    const [cuurentnull, setCurrentNull] = useState(0);
    const [sanpham, setSanPham] = useState();
    useEffect(() => {
        setIProduct(ImagesProducts);
    }, []);
    const _SanPham = (value) => {
        setBackground(true);
        setTimeout(() => {
            setBackground(false);
            if (newarray.length === 0) {
                newarray.push(iproduct);
            }
            setIProduct([]);
            newarray[0].map((item) => {
                return item.current === value
                    ? setIProduct((prev) => [...prev, item])
                    : setCurrentNull((prev) => prev + 1);
            });
            if (cuurentnull === newarray[0].length) {
                setIProduct([]);
            }
            setSanPham(value);
        }, 2000);
    };
    const _ThuongHieu = (value) => {
        setBackground(true);
        value.length === 0
            ? setTimeout(() => {
                  setBackground(false);
                  setIProduct(ImagesProducts);
                  setSanPham('');
              }, 2000)
            : _handleThuongHieu(value);
    };
    const _handleThuongHieu = (value) => {
        console.log(value);
        console.log(sanpham);
        if (sanpham) {
            setTimeout(() => {
                setBackground(false);
                setIProduct([]);
                setIProductClone([]);
                ImagesProducts.map((item) => {
                    return sanpham === item.current ? setIProductClone((prev) => [...prev, item]) : null;
                });
                console.log(iproductclone);
                iproductclone.map((item) => {
                    return value.includes(item.thuonghieu) ? setIProduct((prev) => [...prev, item]) : null;
                });
            }, 2000);
        } else {
            setTimeout(() => {
                setBackground(false);
                setIProduct([]);
                ImagesProducts.map((item) => {
                    return value.includes(item.thuonghieu) ? setIProduct((prev) => [...prev, item]) : null;
                });
            }, 2000);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('slider-pc')}>
                    <TitleandSlider
                        classes="pages_slider"
                        title="Phụ kiện"
                        image={ImagesPhuKien}
                        imagelength={ImagesPhuKien.length - 1}
                    />
                </div>
                <div className={cx('slider-mobile')}>
                    <TitleandSlider
                        classes="pages_slider"
                        title="Phụ kiện"
                        image={ImagesPhuKienMobile}
                        imagelength={ImagesPhuKienMobile.length - 1}
                    />
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('all-filters')}>
                    <input className={cx('input')} placeholder="Bạn muốn mua gì?" />
                    <RadioorCheckbox select data={ITEM_SELECT} />
                    <RadioorCheckbox radio isHighLight={background} data={ITEM_RADIO} SanPham={_SanPham} />
                    <RadioorCheckbox
                        checkbox
                        isHighLight={background}
                        data={ITEM_CHECKBOX_BRAND}
                        ThuongHieu={_ThuongHieu}
                    />
                    <RadioorCheckbox checkbox isHighLight={background} data={ITEM_CHECKBOX_PRICE} />
                </div>
                <div className={cx('elementor-column-wrap')}>
                    <RadioorCheckbox select classSelects data={ITEM_SORTING} />
                    <ImageProduct data={iproduct} isHighLight={background} sanpham={sanpham} />
                </div>
            </div>
        </div>
    );
}

export default PhuKien;
