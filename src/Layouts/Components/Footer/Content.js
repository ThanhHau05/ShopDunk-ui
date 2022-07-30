import styles from './Content.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Content({
    data,
    introduce = false,
    product = false,
    information = false,
    policy = false,
    address = false,
    contact = false,
}) {
    const _handleIconListItems = () => {
        return data.icon.map((item, index) => (
            <div className={cx('content-item')} key={index}>
                <a href={item.to}>
                    <div className={cx('content-icon')}>
                        <item.icon className={cx('icon-' + index)} />
                    </div>
                </a>
            </div>
        ));
    };

    const _hanldeContentText = () => {
        return data.data.map((item, index) => (
            <div key={index}>
                <a href={item.to} className={cx('content-text-a')}>
                    {item.title}
                </a>
                <br></br>
            </div>
        ));
    };
    const _hanldeContentContact = () => {
        return data.data.map((item, index) => (
            <div key={index} className={2 === index ? null : cx('contact')}>
                <h4 className={cx('contact-h4')}>{item.title}&#160;</h4>
                <a className={cx('contact-a')} href={item.to}>
                    {item.phone}
                </a>
                <br></br>
            </div>
        ));
    };
    const classes = cx('wrapper', {
        product,
        information,
        policy,
        address,
        contact,
    });
    return (
        <>
            {introduce ? (
                <div className={cx('introduce')}>
                    <div className={cx('logo')}>{data.logo}</div>
                    <p className={cx('content')}>{data.title}</p>
                    <div className={cx('icon-list-items')}>{_handleIconListItems()}</div>
                </div>
            ) : (
                <div className={classes}>
                    <div className={contact ? cx('container', 'container-contact') : cx('container')}>
                        <div className={cx('content-title')}>
                            <h2 className={cx('title')}>{data.title}</h2>
                        </div>
                        <div className={cx('content-text')}>
                            {contact ? (
                                <p className={cx('content-text-contact-p')}>{_hanldeContentContact()}</p>
                            ) : (
                                <p className={cx('content-text-p')}>{_hanldeContentText()}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Content;
