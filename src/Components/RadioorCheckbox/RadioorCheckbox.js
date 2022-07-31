import styles from './RadioorCheckbox.module.scss';
import classNames from 'classnames/bind';
import { BsCheckLg } from 'react-icons/bs';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function RadioorCheckbox({ select = false, classSelects = false, checkbox = false, radio = false, data }) {
    const [count, setCount] = useState();
    const [classes, setClasses] = useState();
    const [classSelect, setClassSelect] = useState();
    const [arraycheckbox, setArrayCheckbox] = useState([]);
    useEffect(() => {
        if (classSelects) {
            setClassSelect('classSelect');
            setClasses('classFilterSelect');
        }
    }, [classSelects]);
    const _handleBackground = (event) => {
        setCount(event);
    };

    const _handleSelect = () => {
        return data.map((item, index) => <option key={index}>{item.title}</option>);
    };

    const _handleRadio = () => {
        return data.data.map((item, index) => (
            <div key={index} className={cx('radio-list-row')}>
                <input type="radio" className={cx('radio-input')} name="product_cat" value={item.current} />
                <div className={cx('radio-list-button-title')} onClick={() => _handleBackground(item.current)}>
                    <span
                        className={cx(
                            'radio-list-button',
                            count === item.current ? 'radio-list-button-background' : '',
                        )}
                    >
                        <BsCheckLg className={cx('radio-list-button-icon')} />
                    </span>
                    <span className={cx('radio-list-title')}>{item.title}</span>
                </div>
            </div>
        ));
    };

    const _handleArrayCheckbox = (event) => {
        if (!arraycheckbox.includes(event)) {
            arraycheckbox.push(event);
            setArrayCheckbox([...arraycheckbox]);
        } else {
            arraycheckbox.splice(arraycheckbox.indexOf(event), 1);
            setArrayCheckbox([...arraycheckbox]);
        }
    };

    const _handleCheckbox = () => {
        return data.data.map((item, index) => (
            <div key={index} className={cx('checkbox-list-row')}>
                <input type="checkbox" className={cx('checkbox-input')} value={item.value} />
                <div className={cx('checkbox-list-button-title')} onClick={() => _handleArrayCheckbox(item.value)}>
                    <span
                        className={cx(
                            'checbox-list-button',
                            arraycheckbox.includes(item.value) ? 'checbox-list-button-background' : '',
                        )}
                    >
                        <BsCheckLg className={cx('checkbox-list-button-icon')} />
                    </span>
                    <span className={cx('checkbox-list-title')}>{item.title}</span>
                </div>
            </div>
        ));
    };

    return (
        <div className={cx('container')}>
            {select && (
                <div className={cx('filters-select', classes)}>
                    <select className={cx('elementor-select', classSelect)}>{_handleSelect()}</select>
                </div>
            )}
            {radio && (
                <div className={cx('filters-radio')}>
                    <h4 className={cx('filters-radio-title')}>{data.title}</h4>
                    <div className={cx('elementor-radio')}>{_handleRadio()}</div>
                </div>
            )}
            {checkbox && (
                <div className={cx('filters-checkbox-brand')}>
                    <h4 className={cx('filters-checkbox-title')}>{data.title}</h4>
                    <div className={cx('elementor-checkbox')}>{_handleCheckbox()}</div>
                </div>
            )}
        </div>
    );
}

export default RadioorCheckbox;
