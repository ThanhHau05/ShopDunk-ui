import styles from './ScrollTop.module.scss';
import classNames from 'classnames/bind';
import { IoIosArrowUp } from 'react-icons/io';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function ScrollTop() {
    const [count, setCount] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 250) {
                setCount(true);
            } else {
                setCount(false);
            }
        });
    }, []);
    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className={cx('wrapper')}>
            {count && (
                <button className={cx('button')} onClick={ScrollUp}>
                    <IoIosArrowUp className={cx('icon')} />
                </button>
            )}
        </div>
    );
}

export default ScrollTop;
