import styles from './Products.module.scss';
import classNames from 'classnames/bind';
import { SelectedContext } from '~/Layouts/DefaultLayout/DefaultLayout';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
const cx = classNames.bind(styles);
function Product({ current, isHighlight, data }) {
    const setSelectedTitle = useContext(SelectedContext);
    const _hanldeProducts = () => {
        if (current === undefined || current === 'tatca') {
            return _handleRenderProductAll();
        } else {
            return _handleRenderProduct();
        }
    };
    const _handleRenderProduct = () => {
        const filtered = data.data.filter((event) => {
            return event.current === current;
        });
        return filtered.map((item, index) => (
            <div key={index} className={cx('product-description')}>
                <a className={cx('product-a')} href={item.to}>
                    <div className={cx('product-label-title-image')}>
                        <img className={cx('product-image')} src={item.image} alt="" />
                        <h5 className={cx('product-label')}>{item.label}</h5>
                        <div className={cx('product-old-price-new-price')}>
                            <span className={cx('product-price')}>{item.price}</span>
                        </div>
                    </div>
                </a>
                {isHighlight && <div className={cx('list-items-background')}></div>}
            </div>
        ));
    };
    const _handleRenderProductAll = () => {
        return data.data.map((item, index) => (
            <div key={index} className={cx('product-description')}>
                <a className={cx('product-a')} href={item.to}>
                    <div className={cx('product-label-title-image')}>
                        <img className={cx('product-image')} src={item.image} alt="" />
                        <h5 className={cx('product-label')}>{item.label}</h5>
                        <div className={cx('product-old-price-new-price')}>
                            <span className={cx('product-price')}>{item.price}</span>
                        </div>
                    </div>
                </a>
                {isHighlight && <div className={cx('list-items-background')}></div>}
            </div>
        ));
    };
    const _handleSelectedTitle = (value) => {
        if (value !== 'so-sanh') {
            setSelectedTitle('Phụ Kiện');
        } else {
            setSelectedTitle('');
        }
    };
    const _hanldeSeeMore = () => {
        return data.more.map((item, index) => (
            <div
                key={index}
                className={
                    index === 0
                        ? cx('content-see-more', 'content-see-more-left')
                        : cx('content-see-more', 'content-see-more-right')
                }
            >
                <a className={cx('see-more-a')} href={item.to}>
                    <img className={cx('see-more-image')} src={item.image} alt="" />
                </a>
                <div className={cx('see-more-title-text')}>
                    <Link className={cx('see-more-a')} to={item.to}>
                        <div className={cx('see-more-two-title')} onClick={() => _handleSelectedTitle(item.to)}>
                            <div className={cx('see-more-title')}>{item.title1}</div>
                            <div className={cx('see-more-title')}>{item.title2}</div>
                        </div>
                    </Link>
                    <a className={cx('see-more-a')} href={item.to}>
                        <div className={cx('see-more-text')}>{item.text}</div>
                        <div className={cx('see-more-icon')}>
                            <IoIosArrowForward className={cx('icon')} />
                        </div>
                    </a>
                </div>
            </div>
        ));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>{_hanldeProducts()}</div>
            <div className={cx('see-more')}>
                <div className={cx('see-more-container')}>{_hanldeSeeMore()}</div>
            </div>
        </div>
    );
}

export default Product;
