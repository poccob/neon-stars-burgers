import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal-overlay.module.css';

export default function ModalOverlay(props) {
  const onClickModalOverlay = (event) => {
    if (event.target.tagName === 'SECTION') {
      props.visibleModal();
    }
  };

  return (
    <section onClick={onClickModalOverlay} className={styles.modalOverlay}>
      {props.children}
    </section>
  );
}

ModalOverlay.propTypes = {
  visibleModal: PropTypes.func,
  children: PropTypes.object,
};
