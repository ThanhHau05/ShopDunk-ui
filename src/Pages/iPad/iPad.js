import styles from './iPad.module.scss';
import classNames from 'classnames/bind';
import TitleandSlider from '~/Components/TitleandSlider';
import { ImagesiPad } from './Images';
const cx = classNames.bind(styles);

function iPad() {
    return (
        <TitleandSlider classes="pages_slider" title="iPad" image={ImagesiPad} imagelength={ImagesiPad.length - 1} />
    );
}

export default iPad;
