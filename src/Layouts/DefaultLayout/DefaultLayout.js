import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ScrollTop from '~/Components/ScrollTop';
import styles from './DefaultLayout.module.scss';
import Contact from '~/Components/Contact';
import classNames from 'classnames/bind';
import Register from '~/Layouts/Components/Register';
import Footer from '~/Layouts/Components/Footer';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                {children}
                <ScrollTop />
                <Contact />
                <Register />
                <Footer />
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
