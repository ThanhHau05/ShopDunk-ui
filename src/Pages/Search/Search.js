import { BtnSearch } from '~/Components/Icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <input className={cx('search')} placeholder="Tìm sản phẩm..." />
            <button className={cx('search-btn')}>
                <BtnSearch />
            </button>
        </div>
    );
}

export default Profile;
