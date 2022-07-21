import styles from './Dialog.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Dialog({ dialogsearch, children }) {
    const classes = cx('wrapper', {
        dialogsearch,
    });
    return <div className={classes}>{children}</div>;
}

export default Dialog;
