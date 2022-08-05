import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { Zalo, Phone, Messenger, LienHe } from '~/Components/Icons';
import { useClickOutside } from '~/Hooks/useClickOutside';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
const total = [
    {
        icon: Zalo,
        title: 'Chat Zalo',
        time: '(7h30 - 22h00)',
        to: 'https://zalo.me',
    },
    {
        icon: Phone,
        title: '1900.6626',
        time: '(7h30 - 22h00)',
        to: '00000000',
    },
    {
        icon: Messenger,
        title: 'Messenger',
        time: '(7h30 - 22h00)',
        to: 'https://www.messenger.com/',
    },
];

function Contact() {
    const [count, setCount] = useState(true);
    const [open, setOpen] = useState(false);
    const _hanldeContact = () => {
        return total.map((item, index) => (
            <div key={index} className={cx('content')}>
                <a href={item.to}>
                    <div className={cx('icon')}>
                        <item.icon />
                    </div>
                </a>
                <div className={cx('content-title-text')}>
                    <a href={item.to}>
                        <div className={cx('title')}>
                            <h3>{item.title}</h3>
                        </div>
                    </a>
                    <div className={cx('text')}>
                        <p>{item.time}</p>
                    </div>
                </div>
            </div>
        ));
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 2900) {
                setCount(false);
            } else {
                setCount(true);
            }
        });
    }, []);
    const _hanldeMobileContact = () => {
        return total.map((item, index) => (
            <div key={index} className={cx('content-mobile')}>
                <a href={item.to}>
                    <div className={cx('icon-mobile')}>
                        <item.icon />
                    </div>
                </a>
                <div className={cx('content-title-text-mobile')}>
                    <a href={item.to}>
                        <div className={cx('title-mobile')}>
                            <h3>{item.title}</h3>
                        </div>
                    </a>
                    <div className={cx('text-mobile')}>
                        <p>{item.time}</p>
                    </div>
                </div>
            </div>
        ));
    };
    const _handleOpenContact = () => {
        setOpen(!open);
    };
    const domNode = useClickOutside(() => {
        setOpen(false);
    });
    return (
        <div className={cx('Contact')}>
            <div className={cx('Contact-content')}>
                {count && (
                    <div className={cx('wrapper')}>
                        <div className={cx('container')}>{_hanldeContact()}</div>
                    </div>
                )}
            </div>
            <div className={cx('Contact-content-mobile')}>
                <div className={cx('wrapper-mobile')}>
                    {open && (
                        <div ref={domNode} className={cx('contact-mobile')}>
                            {_hanldeMobileContact()}
                        </div>
                    )}
                    <div className={cx('lienhe-btn')} onClick={_handleOpenContact}>
                        <LienHe classes={cx('lienhe-icon')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
