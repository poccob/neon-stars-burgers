import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsCard from '../ingredients-card/ingredients-card';

import styles from './burger-ingredients.module.css';

export default function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('Булки');

  function findIngredientsByType(type) {
    return props.ingredients.filter((ingredient) => ingredient.type === type);
  }

  const ingredientsTypeBun = findIngredientsByType('bun');
  const ingredientsTypeMain = findIngredientsByType('main');
  const ingredientsTypeSauce = findIngredientsByType('sauce');

  return (
    <section className={`${styles.ingredients} mt-10 mr-10`}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
      <div style={{ display: 'flex' }}>
        <Tab value='Булки' active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value='Соусы' active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value='Начинки' active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.ingredientsWrapItems} mt-10`}>
        <h3 className='text text_type_main-medium'>Булки</h3>
        <IngredientsCard ingredientsType={ingredientsTypeBun} />
        <h3 className='text text_type_main-medium'>Соусы</h3>
        <IngredientsCard ingredientsType={ingredientsTypeSauce} />
        <h3 className='text text_type_main-medium'>Начинки</h3>
        <IngredientsCard ingredientsType={ingredientsTypeMain} />
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    }),
  ),
};
