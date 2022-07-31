import { BtnSearch } from '~/Components/Icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Button from '~/Components/Button';
import { IoMdClose } from 'react-icons/io';
import { BiLoaderCircle } from 'react-icons/bi';
import { useState, useEffect } from 'react';
const cx = classNames.bind(styles);

const MENU_ITEMS_SEARCH = [
    {
        title: 'iPhone',
        to: 'iphone',
    },
    {
        title: 'Airpods',
        to: 'airpods',
    },
    {
        title: 'Pencil',
        to: 'but-pencil',
    },
    {
        title: 'Sản phẩm khuyến mãi',
    },
];

function Search({ onClick }) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [count, setCount] = useState('');
    useEffect(() => {
        if (!count.trim()) {
            return;
        }
        setTimeout(() => {
            setLoading(true);
        }, 200);
        setTimeout(() => {
            setLoading(false);
            setMessage(true);
        }, 2000);
    }, [count]);
    const _handleIconListItemSearch = () => {
        return MENU_ITEMS_SEARCH.map((item, index) => (
            <Button list_item_search key={index} to={item.to} rightline>
                {item.title}
            </Button>
        ));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('elementor-search')}>
                <button className={cx('search-btn')}>
                    <BtnSearch />
                </button>
                <input
                    onChange={(e) => setCount(e.target.value)}
                    className={cx('search')}
                    placeholder="Tìm sản phẩm..."
                />
                <button className={cx('close-btn')} onClick={onClick}>
                    <IoMdClose />
                </button>
            </div>
            <div className={cx('access')}>
                <h4 className={cx('access-h4')}>Truy cập nhanh</h4>
            </div>
            <div>
                <div className={cx('list-item-container')}>
                    <div className={cx('list-item')}>{_handleIconListItemSearch()}</div>
                    <div className={cx('search-loading-message')}>
                        {message && !loading && count !== '' && (
                            <div className={cx('search-message-btn')}>
                                <span className={cx('search-message')}>
                                    Rất tiếc, shopdunk.com không tìm thấy kết quả nào phù hợp với từ khóa này
                                </span>
                            </div>
                        )}
                        {loading && (
                            <div className={cx('loading-btn')}>
                                <BiLoaderCircle />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
