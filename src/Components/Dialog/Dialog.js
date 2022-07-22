import styles from './Dialog.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Dialog({ ref, dialogsearch = false, children, onClick }) {
    const classes = cx('wrapper', {
        dialogsearch,
    });
    return (
        <div ref={ref} className={classes} onClick={onClick}>
            {children}
        </div>
    );
}

export default Dialog;
