import styles from './ProductHome.module.scss';
import classNames from 'classnames/bind';
import { IoIosArrowForward } from 'react-icons/io';
import { SelectedContext } from '~/Layouts/DefaultLayout/DefaultLayout';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function ProductHome({ data }) {
    const setSelectedTitle = useContext(SelectedContext);
    const _hanldeProducts = () => {
        return data.data.map((item, index) => (
            <div key={index} className={cx('product-description')}>
                <a className={cx('product-a')} href={item.to}>
                    <div className={cx('product-label-title-image')}>
                        <img className={cx('product-image')} src={item.image} alt="" />
                        <h5 className={cx('product-label')}>{item.label}</h5>
                        <div className={cx('product-old-price-new-price')}>
                            {item.old_price ? (
                                <>
                                    <span className={cx('product-old-price')}>{item.old_price}</span>
                                    <span className={cx('distance')}>&#160;</span>
                                    <span className={cx('product-new-price')}>{item.price}</span>
                                </>
                            ) : (
                                <span className={cx('product-price')}>{item.price}</span>
                            )}
                        </div>
                    </div>
                </a>
            </div>
        ));
    };
    return (
        <div className={cx('product')}>
            <div className={cx('product-container')}>
                <div className={cx('product-container-title')}>
                    <h2 className={cx('product-title')} onClick={() => setSelectedTitle(data.current)}>
                        <Link to={data.to}>{data.title}</Link>
                    </h2>
                </div>
                <div className={cx('product-container-content')}>
                    <div className={cx('product-container-description')}>{_hanldeProducts()}</div>
                </div>
                <div className={cx('product-more')}>
                    <a href={data.to}>
                        <button className={cx('more-btn')}>
                            {data.more}
                            <IoIosArrowForward className={cx('icon-more')} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductHome;
