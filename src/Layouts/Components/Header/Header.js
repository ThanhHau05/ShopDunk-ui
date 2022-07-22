import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BtnSearch } from '~/Components/Icons';
import { BsCart4 } from 'react-icons/bs';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Config from '~/Config';
import Button from '~/Components/Button';
import Search from '~/Pages/Search';
import Dialog from '~/Components/Dialog';
const cx = classNames.bind(styles);

const MENU_ITEMS_HEADER = [
    {
        title: 'iPhone',
        to: 'iphone',
    },
    {
        title: 'iPad',
        to: 'ipad',
    },
    {
        title: 'Mac',
        to: 'mac',
    },
    {
        title: 'Watch',
        to: 'watch',
    },
    {
        title: 'Âm Thanh',
        to: 'am-thanh',
    },
    {
        title: 'Phụ Kiện',
        to: 'phu-kien',
    },
    {
        title: 'Dịch vụ',
        to: 'dich-vu',
    },
    {
        title: 'Khuyến Mại',
        to: 'khuyen-mai',
    },
    {
        title: 'Trả Góp',
        to: 'tragop',
    },
];

function Header() {
    const [searchModal, setSearchModal] = useState(false);
    const _handleMenuItemsHeader = () => {
        return MENU_ITEMS_HEADER.map((item, index) => (
            <Button menu_item_header key={index} to={item.to}>
                {item.title}
            </Button>
        ));
    };
    const _handleSearch = () => {
        setSearchModal(!searchModal);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={Config.routes.home} className={cx('logo-link')}>
                        <img
                            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-07875ad/wp-content/uploads/2021/10/Property-1White.svg"
                            alt="ShopDunk"
                        />
                    </Link>
                </div>
                <div className={cx('menu-item-header')}>{_handleMenuItemsHeader()}</div>
                <div className={cx('search-btn')} onClick={_handleSearch}>
                    <BtnSearch />
                </div>
                <div className={cx('menu-cart')}>
                    <div className={cx('oder-number')}>0</div>
                    <BsCart4 />
                </div>
                {searchModal && <Dialog dialogsearch children={<Search onClick={_handleSearch} />} />}
            </div>
        </div>
    );
}

export default Header;
