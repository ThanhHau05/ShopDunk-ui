import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { IoIosArrowForward } from 'react-icons/io';
const cx = classNames.bind(styles);

function Product({ data }) {
    const _hanldeProducts = () => {
        return data.data.map((item, index) => (
            <div key={index} className={cx('product-description')}>
                <a href={item.to}>
                    <div className={cx('product-label-title-image')}>
                        <img className={cx('product-image')} src={item.image} alt="" />
                        <h5 className={cx('product-label')}>{item.label}</h5>
                        <span className={cx('product-price')}>{item.price}</span>
                    </div>
                </a>
            </div>
        ));
    };
    return (
        <div className={cx('product')}>
            <div className={cx('product-container')}>
                <div className={cx('product-container-title')}>
                    <h2 className={cx('product-title')}>
                        <a href={data.to}>{data.title}</a>
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

export default Product;