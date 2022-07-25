import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Images from '~/Images';
//import Slider from 'react-slick';
const cx = classNames.bind(styles);

const ImageHomeLength = Images.Image_Home_Slider.length - 1;

function Sliders({ home_slider = false }) {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === ImageHomeLength ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);
    const classes = cx('wrapper', {
        home_slider,
    });
    const _hanldeBackgroundImage = () => {
        return Images.Image_Home_Slider.map((item, index) => (
            <div key={index} className={index === activeIndex ? cx('slides active') : cx('inactive')}>
                <img className={cx('slide-image')} src={item.image} alt="" />
            </div>
        ));
    };
    return (
        <div className={classes}>
            {_hanldeBackgroundImage()}
            <div className={cx('arrows')}>
                <div
                    className={cx('prev')}
                    onClick={() => setActiveIndex(activeIndex < 1 ? ImageHomeLength : activeIndex - 1)}
                >
                    <IoIosArrowBack className={cx('prev-icon')} />
                </div>
                <span
                    className={cx('next')}
                    onClick={() => setActiveIndex(activeIndex === ImageHomeLength ? 0 : activeIndex + 1)}
                >
                    <IoIosArrowForward className={cx('next-icon')} />
                </span>
                <div className={cx('all-dots')}>
                    {Images.Image_Home_Slider.map((slide, index) => (
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
