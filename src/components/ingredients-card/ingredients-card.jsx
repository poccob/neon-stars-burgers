import React from 'react';
import PropTypes from 'prop-types';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import styles from './ingredients-card.module.css';

export default function IngredientsCard(props) {
  const [visibleModalIngredients, setVisibleModalIngredients] = React.useState(false);

  const hedleVisibleModalIngredients = () => {
    setVisibleModalIngredients(!visibleModalIngredients);
  };

  React.useEffect(() => {
    const keyPress = (event) => {
      if (visibleModalIngredients && event.keyCode === 27) {
        setVisibleModalIngredients(false);
      }
    };
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, [visibleModalIngredients]);

  return (
    <>
      <div onClick={hedleVisibleModalIngredients} className={`${styles.cardIngredient} mb-8`}>
        <img src={props.ingredient.image} alt={props.ingredient.name} />
        <Counter count={1} size='default' />
        <p className='text text_type_digits-default mt-1 mb-1'>
          {props.ingredient.price}&nbsp;
          <CurrencyIcon type='primary' />
        </p>
        <p className='text text_type_main-default mb-6'>{props.ingredient.name}</p>
      </div>
      {visibleModalIngredients && (
        <Modal title={'Детали ингридиента'} visibleModal={hedleVisibleModalIngredients}>
          <IngredientDetails ingredient={props.ingredient} />
        </Modal>
      )}
    </>
  );
}

IngredientsCard.propTypes = {
  ingredient: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    }),
  ),
};
