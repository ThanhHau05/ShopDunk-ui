import styles from './Mac.module.scss';
import classNames from 'classnames/bind';
import TitleandSlider from '~/Components/TitleandSlider';
import Product from '~/Components/Product';
import { useState } from 'react';
import ButtonPages from '~/Components/ButtonPages';
import { ImagesMac } from './Images';
import { ImagesMacMobile } from './Images/ImagesMobile';
import ImagesListItemMac from '~/Components/Mac';
const cx = classNames.bind(styles);
const LIST_ITEMS = [
    {
        title: 'Tất cả',
        current: 'tatca',
    },
    {
        title: 'MacBook Pro',
        current: 'macpro',
    },
    {
        title: 'MacBook Air',
        current: 'macair',
    },
    {
        title: 'iMac',
        current: 'imac',
    },
    {
        title: 'Mac Mini',
        current: 'macmini',
    },
];
function Mac() {
    const [background, setBackground] = useState(false);
    const [count, setCount] = useState();
    const [current, setCurrent] = useState();
    const _hanldeBackground = (value) => {
        setCount(value);
        setBackground(true);
        setTimeout(() => {
            setBackground(false);
            setCurrent(value);
        }, 2000);
    };
    const _handleButton = () => {
        return LIST_ITEMS.map((item, index) => (
            <ButtonPages
                key={index}
                current={item.current}
                dataBackground={_hanldeBackground}
                isHighlight={count === item.current}
            >
                {item.title}
            </ButtonPages>
        ));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('slider-pc')}>
                    <TitleandSlider
                        classes="pages_slider"
                        title="iPad"
                        image={ImagesMac}
                        imagelength={ImagesMac.length - 1}
                    />
                </div>
                <div className={cx('slider-mobile')}>
                    <TitleandSlider
                        classes="pages_slider"
                        title="iPad"
                        image={ImagesMacMobile}
                        imagelength={ImagesMacMobile.length - 1}
                    />
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('list-items-row')}>
                    <div className={cx('list-items-row-mobile')}>{_handleButton()}</div>
                </div>
                <div className={cx('list-items-product-row')}>
                    <Product current={current} isHighlight={background} data={ImagesListItemMac} />
                </div>
            </div>
        </div>
    );
}

export default Mac;
