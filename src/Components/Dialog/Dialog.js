import { forwardRef } from 'react';
import styles from './Dialog.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Dialog = forwardRef(
    (
        {
            dialog_search = false,
            dialog_menu_cart = false,
            dialog_bars = false,
            wrapper_dialogbars = false,
            wrapper_menucart = false,
            wrapper_dialogsearch = false,
            children,
        },
        ref,
    ) => {
        const classes = cx({
            dialog_search,
            dialog_menu_cart,
            dialog_bars,
        });
        const classes_wrapper = cx('wrapper', {
            wrapper_dialogsearch,
            wrapper_menucart,
            wrapper_dialogbars,
        });
        const _handleScroll = (e) => {
            console.log(e.nativeEvent.contentOffset.y);
        };
        return (
            <div className={classes} onScroll={_handleScroll}>
                <div ref={ref} className={classes_wrapper}>
                    {children}
                </div>
            </div>
        );
    },
);

export default Dialog;
