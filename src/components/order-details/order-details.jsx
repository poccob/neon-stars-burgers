import React from 'react';

import imgDone from '../../images/done.png';
import styles from './order-details.module.css';

export default function OrderDetails() {
  return (
    <div className={styles.wrapOrderDetails}>
      <h2 className={`${styles.title} text text_type_digits-large mt-20 mb-8`}>034536</h2>
      <p className='text text_type_main-medium'>идентификатор заказа</p>
      <img className='mt-15 mb-15' src={imgDone} alt='ok' />
      <p className='text text_type_main-default'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive mt-2 mb-15'>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
