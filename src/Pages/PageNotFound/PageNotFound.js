import styles from './PageNotFound.module.scss';
import classNames from 'classnames/bind';
import { Error } from '~/Components/Icons';
import Config from '~/Config';
import { Link } from 'react-router-dom';
import { SelectedContext } from '~/Layouts/DefaultLayout/DefaultLayout';
import { useContext } from 'react';
const cx = classNames.bind(styles);
function PageNotFound() {
    localStorage.clear();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('elementor-icon-error')}>
                        <Error className={cx('icon-error')} />
                    </div>
                    <div className={cx('elementor-text-404')}>
                        <h2 className={cx('text-404')}>404</h2>
                    </div>
                    <div className={cx('elementor-text-oops')}>
                        <h2 className={cx('text-oops')}>Oops! Trang bạn tìm kiếm không tồn tại.</h2>
                    </div>
                    <div className={cx('elementor-text-content')}>
                        <span className={cx('text-content')}>
                            Website Shopdunk mới nâng cấp, do đó có một số link có thể được thay đổi.
                        </span>
                        <span className={cx('text-content')}>
                            Bạn vui lòng trở lại trang chủ, tìm kiếm với từ khóa khác hoặc tiếp tục mua sắm!.
                        </span>
                    </div>
                    <Link to={Config.routes.home} className={cx('elementor-btn')}>
                        <button className={cx('btn-back')}>Trở về trang chủ ShopDunk</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
