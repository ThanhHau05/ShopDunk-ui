import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    menu_item_header = false,
    list_item_search = false,
    leftline,
    rightline,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        menu_item_header,
        list_item_search,
    });
    const CheckPathName = () => {};
    return (
        <>
            <>{leftline && <span className={cx('line')}></span>}</>
            <Comp className={classes} aria-current="page" {...props} onClick={CheckPathName}>
                <span className={cx('title')}>{children}</span>
            </Comp>
            <>{rightline && Comp !== 'button' && <span className={cx('line')}></span>}</>
        </>
    );
}

export default Button;
