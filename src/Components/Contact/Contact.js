import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { Zalo, Phone, Messenger } from '~/Components/Icons';
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
    return (
        <div className={cx('Contact')}>
            {count && (
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>{_hanldeContact()}</div>
                </div>
            )}
        </div>
    );
}

export default Contact;
