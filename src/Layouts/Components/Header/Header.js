import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BtnSearch } from '~/Components/Icons';
import { BsCart4 } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
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

const MENU_ITEMS_HEADER_TABLET = [
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
];

const MENU_ITEMS_BARS = [
    {
        title: 'Dịch vụ',
        to: Config.routes.dich_vu,
    },
    {
        title: 'Khuyến mại',
        to: Config.routes.khuyen_mai,
    },
    {
        title: 'Trả góp',
        to: Config.routes.tragop,
    },
    {
        title: 'Hệ thống cửa hàng',
        to: '*',
    },
    {
        title: 'Liên hệ',
        title1: 'Mua hàng:',
        phone1: '1900.6626',
        title2: 'Khiếu nại:',
        phone2: '0886.308.688',
        title3: 'Doanh nghiệp & Đối tác:',
        phone3: '0822.688.668',
    },
];
const MENU_ITEMS_SEARCH = [
    {
        title: 'Truy cập nhanh',
    },
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
function Header({ selectedtitle }) {
    const [searchModal, setSearchModal] = useState(false);
    const [menucartModal, setMenuCartModal] = useState(false);
    const [barsModal, setBarsModal] = useState(false);
    const [barsSearch, setBarsSearch] = useState(false);
    const [count, setCount] = useState();
    if (window.location.pathname === '/') {
        localStorage.clear();
    }
    useMemo(() => {
        setCount(selectedtitle);
    }, [selectedtitle]);
    useEffect(() => {
        const localS = JSON.parse(localStorage.getItem('count'));
        setCount(localS);
    }, []);

    const _onClick = (value) => {
        setCount(value);
        localStorage.setItem('count', JSON.stringify(value));
    };

    const _onClickLogo = () => setCount('');

    const _handleSearch = () => {
        setSearchModal(!searchModal);
    };

    const _handleMenuCart = () => {
        setMenuCartModal(!menucartModal);
    };

    const _handleBars = () => {
        setBarsModal(!barsModal);
    };

    const domNode_Search = useClickOutside(() => {
        setSearchModal(false);
    });

    const domNode_MenuCart = useClickOutside(() => {
        setMenuCartModal(false);
    });

    const domNode_bars = useClickOutside(() => {
        setBarsModal(false);
    });

    const _handleMenuItemsHeader = () => {
        return MENU_ITEMS_HEADER.map((item, index) => (
            <Button menu_item_header key={index} isHighLight={count === item.title} to={item.to} Selected={_onClick}>
                {item.title}
            </Button>
        ));
    };
    const _handleMenuItemsHeaderTablet = () => {
        return MENU_ITEMS_HEADER_TABLET.map((item, index) => (
            <Button menu_item_header key={index} isHighLight={count === item.title} to={item.to} Selected={_onClick}>
                {item.title}
            </Button>
        ));
    };
    const _handleRenderItemBars = () => {
        return MENU_ITEMS_BARS.map((item, index) => (
            <div key={index} className={cx('menu-item-bars-contact')}>
                {!item.to ? (
                    <>
                        <span>{item.title}</span>
                        <div className={cx('menu-item-bars-contact-data')}>
                            <div className={cx('contact-data')}>
                                <p className={cx('contact-data-title')}>{item.title1}</p>
                                &#160;
                                <p className={cx('contact-data-phone')}>{item.phone1}</p>
                            </div>
                            <div className={cx('contact-data')}>
                                <p className={cx('contact-data-title')}>{item.title2}</p>
                                &#160;
                                <p className={cx('contact-data-phone')}>{item.phone2}</p>
                            </div>
                            <div className={cx('contact-data')}>
                                <p className={cx('contact-data-title')}>{item.title3}</p>
                                &#160;
                                <p className={cx('contact-data-phone')}>{item.phone3}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <a className={cx('contact-data-title-a')} href={item.to} alt={item.title}>
                            {item.title}
                        </a>
                        {index < MENU_ITEMS_SEARCH.length - 1 && <span className={cx('line-mobile')}></span>}
                    </>
                )}
            </div>
        ));
    };
    const _handlBarsSearch = () => {
        barsSearch ? setBarsSearch(false) : setBarsSearch(true);
    };
    const _handleItemBarInputsOnClick = () => {
        return MENU_ITEMS_SEARCH.map((item, index) => (
            <div key={index}>
                <Button list_item_bars_search rightlinebars to={item.to}>
                    {item.title}
                </Button>
                {index < MENU_ITEMS_SEARCH.length - 1 && <span className={cx('line')}></span>}
            </div>
        ));
    };
    return (
        <section className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-top-tablet')}>
                    <div className={cx('bars-tablet')}>
                        <FaBars className={cx('bars-cart-icon-tablet')} onClick={_handleBars} />
                    </div>
                    <div className={cx('logo-tablet')}>
                        <Link to={Config.routes.home} className={cx('logo-link-tablet')} onClick={_onClickLogo}>
                            <img src={LogoWeb} alt="ShopDunk" />
                        </Link>
                    </div>
                    <div className={cx('menu-cart-tablet')}>
                        <BsCart4 className={cx('bars-cart-icon-tablet')} />
                    </div>
                </div>
                <div className={cx('logo')}>
                    <Link to={Config.routes.home} className={cx('logo-link')} onClick={_onClickLogo}>
                        <img src={LogoWeb} alt="ShopDunk" />
                    </Link>
                </div>
                <div className={cx('menu-item-header-tablet')}>{_handleMenuItemsHeaderTablet()}</div>
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
            {barsModal && (
                <Dialog ref={domNode_bars} dialog_bars wrapper_dialogbars>
                    <div className={cx('menu-bars')}>
                        <IoMdClose className={cx('bars-close-icon')} onClick={_handleBars} />
                        <div className={cx('menu-bars-container')}>
                            <div className={cx('menu-bars-elementor-search')}>
                                <div className={cx('menu-bars-search-icon-input')}>
                                    <HiSearch className={cx('bars-search-icon')} />
                                    <input
                                        className={cx('search-input')}
                                        placeholder="Tìm kiếm sản phẩm"
                                        onClick={() => _handlBarsSearch()}
                                    />
                                </div>
                            </div>
                            <div className={cx('menu-bars-contact')}>
                                {barsSearch ? (
                                    <div className={cx('menu-bars-contact-search')}>
                                        {_handleItemBarInputsOnClick()}
                                    </div>
                                ) : (
                                    _handleRenderItemBars()
                                )}
                            </div>
                        </div>
                    </div>
                </Dialog>
            )}
        </section>
    );
}

export default Header;
