import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('home')}>
            <h2>Home Page</h2>
        </div>
    );
}

export default Home;
