import styles from './TitleandSlider.module.scss';
import classNames from 'classnames/bind';
import Sliders from '~/Components/Slider';
const cx = classNames.bind(styles);
function TitleandSlider({ classes, title, image, imagelength }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>{title}</h2>
            </div>
            <Sliders slider_pages classs={classes} image={image} imagelength={imagelength} />
        </div>
    );
}

export default TitleandSlider;
