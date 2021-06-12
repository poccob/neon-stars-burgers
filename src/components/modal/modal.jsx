import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

export default function Modal(props) {
  const isOpen = props.isOpen;
  const visibleModal = props.visibleModal;

  React.useEffect(() => {
    const keyPress = (event) => {
      if (isOpen && event.keyCode === 27) {
        visibleModal(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', keyPress);
    }
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, [visibleModal, isOpen]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay visibleModal={props.visibleModal} s>
        <div className={`${styles.modal} pr-10 pl-10 pt-10 pb-15`}>
          <h2 className='text text_type_main-large'>{props.title}</h2>
          <div className={styles.closeButton} onClick={props.visibleModal}>
            <CloseIcon type='primary' />
          </div>
          {props.children}
        </div>
      </ModalOverlay>
    </>,
    document.getElementById('react-modals'),
  );
}

Modal.propTypes = {
  visibleModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
