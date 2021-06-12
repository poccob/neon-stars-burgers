import React from 'react';
import PropTypes from 'prop-types';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredients-card.module.css';

export default function IngredientsCard(props) {
  return (
    <li>
      <div
        onClick={() => props.hedleVisibleModalIngredients(props.ingredient)}
        className={`${styles.cardIngredient} mb-8`}>
        <img src={props.ingredient.image} alt={props.ingredient.name} />
        <Counter count={1} size='default' />
        <p className='text text_type_digits-default mt-1 mb-1'>
          {props.ingredient.price}&nbsp;
          <CurrencyIcon type='primary' />
        </p>
        <p className='text text_type_main-default mb-6'>{props.ingredient.name}</p>
      </div>
    </li>
  );
}

IngredientsCard.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
};
