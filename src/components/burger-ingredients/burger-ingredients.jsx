import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsCard from '../ingredients-card/ingredients-card';

import styles from './burger-ingredients.module.css';

export default function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('Булки');

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
        <ul className={`${styles.ingredientsGrid} pt-6 pb-2 pl-4 pr-4`}>
          {props.bun.map((ingredient) => (
            <li key={ingredient._id}>
              <IngredientsCard
                name={ingredient.name}
                price={ingredient.price}
                image={ingredient.image}
                calories={ingredient.calories}
                proteins={ingredient.proteins}
                fat={ingredient.fat}
                carbohydrates={ingredient.carbohydrates}
                image_large={ingredient.image_large}
              />
            </li>
          ))}
        </ul>
        <h3 className='text text_type_main-medium'>Соусы</h3>
        <ul className={`${styles.ingredientsGrid} pt-6 pb-2 pl-4 pr-4`}>
          {props.sauce.map((ingredient) => (
            <li key={ingredient._id}>
              <IngredientsCard
                name={ingredient.name}
                price={ingredient.price}
                image={ingredient.image}
                calories={ingredient.calories}
                proteins={ingredient.proteins}
                fat={ingredient.fat}
                carbohydrates={ingredient.carbohydrates}
                image_large={ingredient.image_large}
              />
            </li>
          ))}
        </ul>
        <h3 className='text text_type_main-medium'>Начинки</h3>
        <ul className={`${styles.ingredientsGrid} pt-6 pb-2 pl-4 pr-4`}>
          {props.main.map((ingredient) => (
            <li key={ingredient._id}>
              <IngredientsCard
                name={ingredient.name}
                price={ingredient.price}
                image={ingredient.image}
                calories={ingredient.calories}
                proteins={ingredient.proteins}
                fat={ingredient.fat}
                carbohydrates={ingredient.carbohydrates}
                image_large={ingredient.image_large}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  bun: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    }),
  ),
  main: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    }),
  ),
  sauce: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    }),
  ),
};
