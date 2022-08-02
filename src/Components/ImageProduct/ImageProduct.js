import styles from './ImageProduct.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
const cx = classNames.bind(styles);

function ImageProduct({ data, isHighLight = false, sanpham }) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 15;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    const _handleRender = () => {
        return currentItems.map((item, index) => (
            <div key={index} className={cx('product-item-list')}>
                <div className={cx('product-item')}>
                    <div className={cx('product-title-image')}>
                        <a className={cx('product')} href={item.to}>
                            <img className={cx('product-image')} src={item.image} alt={item.to} />
                            <div className={cx('product-title-price')}>
                                <h5 className={cx('product-title')}>{item.title}</h5>
                                <div className={cx('product-old-price-new-price')}>
                                    {item.old_price && (
                                        <span className={cx('product-old-price')}>{item.old_price}</span>
                                    )}
                                    &#160;
                                    <span className={cx('product-price')}>{item.price}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    {item.giamgia && (
                        <div className={cx('elementor-sale')}>
                            <span className={cx('sale-text')}>{item.giamgia}</span>
                        </div>
                    )}
                </div>
                {isHighLight && <div className={cx('list-items-background')}></div>}
            </div>
        ));
    };

    const _handleRenderProduct = () => {
        return currentItems.map((item, index) => {
            return sanpham.includes(item.current) || sanpham.includes(item.thuonghieu) ? (
                <div key={index} className={cx('product-item-list')}>
                    <div className={cx('product-item')}>
                        <div className={cx('product-title-image')}>
                            <a className={cx('product')} href={item.to}>
                                <img className={cx('product-image')} src={item.image} alt={item.to} />
                                <div className={cx('product-title-price')}>
                                    <h5 className={cx('product-title')}>{item.title}</h5>
                                    <div className={cx('product-old-price-new-price')}>
                                        {item.old_price && (
                                            <span className={cx('product-old-price')}>{item.old_price}</span>
                                        )}
                                        &#160;
                                        <span className={cx('product-price')}>{item.price}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {item.giamgia && (
                            <div className={cx('elementor-sale')}>
                                <span className={cx('sale-text')}>{item.giamgia}</span>
                            </div>
                        )}
                    </div>
                    {isHighLight && <div className={cx('list-items-background')}></div>}
                </div>
            ) : null;
        });
    };

    return (
        <>
            <div className={cx('image-product')}>{sanpham ? _handleRenderProduct() : _handleRender()}</div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName={cx('pagination')}
                pageLinkClassName={cx('page-num')}
                previousLinkClassName={cx('prev-btn')}
                nextLinkClassName={cx('next-btn')}
                activeLinkClassName={cx('active')}
            />
        </>
    );
}

export default ImageProduct;
