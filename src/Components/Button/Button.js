import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { useMemo, useRef } from 'react';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    menu_item_header = false,
    list_item_search = false,
    leftline,
    rightline,
    children,
    isHighLight,
    Selected,
    ...passProps
}) {
    const ref = useRef();
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
    const classes = {
        menu_item_header,
        list_item_search,
    };
    const selecte = useMemo(() => {
        if (isHighLight) {
            return 'selected';
        }
    }, [isHighLight]);
    const _handlSelected = () => {
        Selected(children);
    };
    return (
        <>
            <>{leftline && <span className={cx('line')}></span>}</>
            <Comp
                ref={ref}
                className={cx('wrapper', classes, selecte)}
                aria-current="page"
                {...props}
                onClick={_handlSelected}
            >
                <span className={cx('title')}>{children}</span>
            </Comp>
            <>{rightline && Comp !== 'button' && <span className={cx('line')}></span>}</>
        </>
    );
}

export default Button;
