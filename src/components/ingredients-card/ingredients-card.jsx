import React from 'react';
import PropTypes from 'prop-types';

import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredients-card.module.css';
import imgCurrency from '../../images/currencySign.svg';

export default function IngredientsCard(props) {
  return (
    <ul className={`${styles.ingredientsGrid} pt-6 pb-2 pl-4 pr-4`}>
      {props.ingredientsType.map((ingredient) => (
        <li className={`${styles.cardIngredient} mb-8`} key={ingredient._id}>
          <img src={ingredient.image} alt={ingredient.name} />
          <Counter count={1} size='default' />
          <p className='text text_type_digits-default mt-1 mb-1'>
            {ingredient.price}&nbsp;
            <img className={styles.imgCurrency} src={imgCurrency} alt='diamonds' />
          </p>
          <p className='text text_type_main-default mb-6'>{ingredient.name}</p>
        </li>
      ))}
    </ul>
  );
}

IngredientsCard.propTypes = {
  ingredientsType: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    }),
  ),
};
