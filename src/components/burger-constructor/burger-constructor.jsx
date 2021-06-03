import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import dotsImg from '../../images/dots.svg';
import currencySignBig from '../../images/currencySignBig.svg';

export default function BurgerConstructor(props) {
  return (
    <section className={`${styles.constructor} mt-25 ml-4 mr-4`}>
      <div className={styles.wrapConstructorItems}>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {props.ingredients.map((ingredient, index) => (
            <li className={`${styles.wrapConstructorElement} pl-8`} key={ingredient._id}>
              {index !== 0 && <img className={styles.dots} src={dotsImg} alt='dots' />}
              <ConstructorElement
                type={index === 0 ? 'top' : ''}
                isLocked={index === 0 ? true : false}
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.wrapTotalPrice} mt-15 pr-6`}>
        <span className='text text_type_digits-medium'>610 </span>
        <img className={`${styles.totalPriceImg} mr-10`} src={currencySignBig} alt='money' />
        <Button type='primary' size='large'>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    }),
  ),
};
