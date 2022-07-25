import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Sliders from '~/Components/Slider';
import Images from '~/Images';
const cx = classNames.bind(styles);
function Home() {
    //console.log(Images.Images_Test);
    const _handleColumn = () => {
        return Images.Image_Home_Column.map((item, index) => (
            <div key={index} className={cx('element-column-inner')}>
                <a href={item.to}>
                    <img className={cx('element-column-image')} src={item.image} alt="" />
                </a>
            </div>
        ));
    };
    return (
        <div className={cx('wrapper')}>
            <Sliders home_slider />
            <div className={cx('container')}>
                <div className={cx('empty')}></div>
                <div className={cx('element-column')}>
                    <div className={cx('element-column-row')}>{_handleColumn()}</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
