import styles from './Page_iPad.module.scss';
import classNames from 'classnames/bind';
import TitleandSlider from '~/Components/TitleandSlider';
import { ImagesiPad } from './Images';
import { useState } from 'react';
import ButtonPages from '~/Components/ButtonPages';
import Product from '~/Components/Product';
import ImagesListItemiPad from '~/Components/iPad';
const cx = classNames.bind(styles);

const LIST_ITEMS = [
    {
        title: 'Tất cả',
        current: 'tatca',
    },
    {
        title: 'iPad Pro',
        current: 'ipadpro',
    },
    {
        title: 'iPad Air',
        current: 'ipadair',
    },
    {
        title: 'iPad 9',
        current: 'ipad9',
    },
    {
        title: 'iPad mini',
        current: 'ipadmini',
    },
];

function Page_iPad() {
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
                <TitleandSlider
                    classes="pages_slider"
                    title="iPad"
                    image={ImagesiPad}
                    imagelength={ImagesiPad.length - 1}
                />
            </div>
            <div className={cx('content')}>
                <div className={cx('list-items-row')}>{_handleButton()}</div>
                <div className={cx('list-items-product-row')}>
                    <Product current={current} isHighlight={background} data={ImagesListItemiPad} />
                </div>
            </div>
        </div>
    );
}

export default Page_iPad;
