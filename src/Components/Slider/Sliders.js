import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const cx = classNames.bind(styles);
function Sliders({ classs, home_slider = false, image, imagelength }) {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === imagelength ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    });
    const classes = cx('wrapper', classs, {
        home_slider,
    });
    const _hanldeBackgroundImage = () => {
        return image.map((item, index) => (
            <div key={index} className={index === activeIndex ? cx('slides active') : cx('inactive')}>
                {item.image ? (
                    <img className={cx('slide-image')} src={item.image} alt="" />
                ) : (
                    <img className={cx('slide-image')} src={item} alt="" />
                )}
            </div>
        ));
    };
    return (
        <div className={classes}>
            {_hanldeBackgroundImage()}
            <div className={cx('arrows')}>
                <div
                    className={cx('prev')}
                    onClick={() => setActiveIndex(activeIndex < 1 ? imagelength : activeIndex - 1)}
                >
                    <IoIosArrowBack className={cx('prev-icon')} />
                </div>
                <span
                    className={cx('next')}
                    onClick={() => setActiveIndex(activeIndex === imagelength ? 0 : activeIndex + 1)}
                >
                    <IoIosArrowForward className={cx('next-icon')} />
                </span>
                <div className={cx('all-dots')}>
                    {image.map((slide, index) => (
                        <span
                            key={index}
                            className={activeIndex === index ? cx('dot active-dot') : cx('dot')}
                            onClick={(activeIndex) => setActiveIndex(activeIndex)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sliders;
