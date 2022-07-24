import { createContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BtnSearch } from '~/Components/Icons';
import { BsCart4 } from 'react-icons/bs';
import { useClickOutside } from '~/Hooks/useClickOutside';
import { IoMdClose } from 'react-icons/io';

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

export const CountuseContext = createContext();

function Header() {
    const [searchModal, setSearchModal] = useState(false);
    const [menucartModal, setMenuCartModal] = useState(false);
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
    const _handleMenuCart = () => {
        setMenuCartModal(!menucartModal);
    };

    const domNode_Search = useClickOutside(() => {
        setSearchModal(false);
    });
    const domNode_MenuCart = useClickOutside(() => {
        setMenuCartModal(false);
    });
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
                <div className={cx('menu-cart')} onClick={_handleMenuCart}>
                    <div className={cx('menu-cart-icon')}>
                        <div className={cx('oder-number')}>0</div>
                        <BsCart4 />
                    </div>
                </div>
            </div>
            {searchModal && (
                <Dialog ref={domNode_Search} dialog_search wrapper_dialogsearch>
                    {<Search onClick={_handleSearch} />}
                </Dialog>
            )}
            {menucartModal && (
                <Dialog ref={domNode_MenuCart} dialog_menu_cart wrapper_menucart>
                    <div className={cx('menu-cart-main')}>
                        <div className={cx('menu-cart_close')}>
                            <IoMdClose className={cx('menu-cart_close_icon')} onClick={_handleMenuCart} />
                        </div>
                        <div className={cx('menu-cart_content')}>
                            <div className={cx('menu-cart_content_message')}></div>
                        </div>
                    </div>
                </Dialog>
            )}
        </div>
    );
}

export default Header;
