import styles from './Dialog.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);

const Dialog = forwardRef(({ dialogsearch = false, children }, ref) => {
    const classes = cx('wrapper', {
        dialogsearch,
    });
    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
});

export default Dialog;
