import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BtnSearch } from '~/Components/Icons';
import { BsCart4 } from 'react-icons/bs';
import { useClickOutside } from '~/Hooks/useClickOutside';
import { IoMdClose } from 'react-icons/io';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Config from '~/Config';
import Button from '~/Components/Button';
import Search from '~/Layouts/Components/Search';
import Dialog from '~/Components/Dialog';
import LogoWeb from '~/Images/logoweb.svg';
const cx = classNames.bind(styles);

const MENU_ITEMS_HEADER = [
    {
        title: 'iPhone',
        to: Config.routes.iphone,
    },
    {
        title: 'iPad',
        to: Config.routes.ipad,
    },
    {
        title: 'Mac',
        to: Config.routes.mac,
    },
    {
        title: 'Watch',
        to: Config.routes.watch,
    },
    {
        title: 'Âm Thanh',
        to: Config.routes.am_thanh,
    },
    {
        title: 'Phụ Kiện',
        to: Config.routes.phu_kien,
    },
    {
        title: 'Dịch vụ',
        to: Config.routes.dich_vu,
    },
    {
        title: 'Khuyến Mại',
        to: Config.routes.khuyen_mai,
    },
    {
        title: 'Trả Góp',
        to: Config.routes.tragop,
    },
];

function Header({ selectedtitle }) {
    const [searchModal, setSearchModal] = useState(false);
    const [menucartModal, setMenuCartModal] = useState(false);
    const [count, setCount] = useState();
    const _onClick = (value) => {
        setCount(value);
    };
    useMemo(() => {
        setCount(selectedtitle);
    }, [selectedtitle]);
    const _handleMenuItemsHeader = () => {
        return MENU_ITEMS_HEADER.map((item, index) => (
            <Button menu_item_header key={index} isHighLight={count === item.title} to={item.to} Selected={_onClick}>
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
        <section className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={Config.routes.home} className={cx('logo-link')} onClick={_onClick}>
                        <img src={LogoWeb} alt="ShopDunk" />
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
        </section>
    );
}

export default Header;
