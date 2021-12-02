import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { VscClose } from 'react-icons/vsc';
import s from './Modal.module.scss';

const Modal = ({ modalActive, setModalActive, selectedDate }) => {
    const dayOfWeekFullName = useSelector((state) => state.dayOfWeekFullName);

    if (!selectedDate) return null;

    const handleClose = () => {
        setModalActive(false);
    };

    const onChangeHandle = () => {
        
    }

    return (
        <div
            className={modalActive ? s.ModalActive : s.Modal}
            onClick={handleClose}
        >
            <div className={s.ModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={s.ButtonClose}>
                    <button  onClick={handleClose}>
                        <VscClose style={{fontSize: '30px'}}/>
                    </button>
                </div>
                <form className={s.someForm1}>
                    <label>Month
                        <input 
                            type="text" 
                            onChange={onChangeHandle} 
                            value={selectedDate.toLocaleString('en-us', { month: 'long' })} 
                        />
                    </label>
                    <label>Day
                        <input 
                            type="text" 
                            onChange={onChangeHandle} 
                            value={`${selectedDate.getDate()}th ${dayOfWeekFullName[selectedDate.getDay()]}` }
                        />
                    </label>
                </form>
            </div>
        </div>
    );
};

Modal.propTypes = {
    modalActive: PropTypes.bool,
    setModalActive: PropTypes.func
};

Modal.defaultProps = {
    setModalActive: false
};

export default Modal;