import styles from './ButtonPages.module.scss';
import classNames from 'classnames/bind';
import { useMemo } from 'react';
const cx = classNames.bind(styles);
function Button_Pages({ children, current, dataBackground, isHighlight }) {
    const _handleBackground = () => {
        dataBackground(current);
    };
    const classes = useMemo(() => {
        if (isHighlight) {
            return 'item-btn-background';
        }
    }, [isHighlight]);
    return (
        <button className={cx('item-btn', classes)} onClick={_handleBackground}>
            {children}
        </button>
    );
}

export default Button_Pages;
