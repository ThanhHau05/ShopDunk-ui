import { useState } from 'react';
import styles from './Page_iPhone.module.scss';
import classNames from 'classnames/bind';
import Product from '~/Components/Product';
import TitleandSlider from '~/Components/TitleandSlider';
import { ImagesiPhone } from './Images';
import ImagesListItemiPhone from '~/Components/iPhone';
import ButtonPages from '~/Components/ButtonPages';
const cx = classNames.bind(styles);

const LIST_ITEMS = [
    {
        title: 'Tất cả',
        current: 'tatca',
    },
    {
        title: 'iPhone 13',
        current: 'iphone13',
    },
    {
        title: 'iPhone 12',
        current: 'iphone12',
    },
    {
        title: 'iPhone 11',
        current: 'iphone11',
    },
    {
        title: 'iPhone SE',
        current: 'iphonese',
    },
];

function Page_iPhone() {
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
                    title="iPhone"
                    image={ImagesiPhone}
                    imagelength={ImagesiPhone.length - 1}
                />
            </div>
            <div className={cx('content')}>
                <div className={cx('list-items-row')}>{_handleButton()}</div>
                <div className={cx('list-items-product-row')}>
                    <Product current={current} isHighlight={background} data={ImagesListItemiPhone} />
                </div>
            </div>
        </div>
    );
}

export default Page_iPhone;
