import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ScrollTop from '~/Components/ScrollTop';
import styles from './DefaultLayout.module.scss';
import Contact from '~/Components/Contact';
import classNames from 'classnames/bind';
import Register from '~/Layouts/Components/Register';
import Footer from '~/Layouts/Components/Footer';
import { createContext, useState } from 'react';
const cx = classNames.bind(styles);
export const SelectedContext = createContext();

function DefaultLayout({ children }) {
    const [selectedtitle, setSelectedTitle] = useState();
    return (
        <div className={cx('wrapper')}>
            <SelectedContext.Provider value={setSelectedTitle}>
                <Header selectedtitle={selectedtitle} />
                <div className={cx('content')}>
                    {children}
                    <ScrollTop />
                    <Contact />
                    <Register />
                    <Footer />
                </div>
            </SelectedContext.Provider>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
