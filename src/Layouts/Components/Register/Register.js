import styles from './Register.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Đăng ký nhận tin từ ShopDunk</h2>
                <p className={cx('text')}>Thông tin sản phẩm mới nhất và chương trình khuyến mãi</p>
                <div className={cx('input-register-btn')}>
                    <input type="email" className={cx('input')} placeholder="Email của bạn" />
                    <button type="submit" className={cx('register-btn')}>
                        Đăng ký
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
