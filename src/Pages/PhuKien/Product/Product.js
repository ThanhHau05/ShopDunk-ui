import styles from './Product.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('elementor-product')}>
            <h2>hi</h2>
        </div>
    );
}

export default Product;
