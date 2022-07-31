import styles from './PhuKien.module.scss';
import classNames from 'classnames/bind';
import TitleandSlider from '~/Components/TitleandSlider';
import { ImagesPhuKien } from './Images';
import { BsCheckLg } from 'react-icons/bs';
import RadioorCheckbox from '~/Components/RadioorCheckbox/RadioorCheckbox';
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
            title: 'ADAM',
            value: 'adam',
        },
        {
            title: 'Google',
            value: 'google',
        },
        {
            title: 'Harman Kardon',
            value: 'harman-kardon',
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

function PhuKien() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <TitleandSlider
                    classes="pages_slider"
                    title="Phụ kiện"
                    image={ImagesPhuKien}
                    imagelength={ImagesPhuKien.length - 1}
                />
            </div>
            <div className={cx('content')}>
                <div className={cx('all-filters')}>
                    <RadioorCheckbox select data={ITEM_SELECT} />
                    <RadioorCheckbox radio data={ITEM_RADIO} />
                    <RadioorCheckbox checkbox data={ITEM_CHECKBOX_BRAND} />
                    <RadioorCheckbox checkbox data={ITEM_CHECKBOX_PRICE} />
                </div>
                <div className={cx('elementor-column-wrap')}>
                    <RadioorCheckbox select classSelects data={ITEM_SORTING} />
                </div>
            </div>
        </div>
    );
}

export default PhuKien;
