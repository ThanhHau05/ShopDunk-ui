import styles from './iPhone.module.scss';
import classNames from 'classnames/bind';
import TitleandSlider from '~/Components/TitleandSlider';
import { ImagesiPhone } from './Images';
import Sliders from '~/Components/Slider';
const cx = classNames.bind(styles);

function iPhone() {
    return (
        <TitleandSlider
            classes="iphone_slider"
            title="iPhone"
            image={ImagesiPhone}
            imagelength={ImagesiPhone.length - 1}
        />
    );
}

export default iPhone;
