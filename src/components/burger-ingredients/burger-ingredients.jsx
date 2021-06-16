import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsCard from '../ingredients-card/ingredients-card';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import styles from './burger-ingredients.module.css';

export default function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('Булки');
  const [visibleModalIngredients, setVisibleModalIngredients] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});

  const hedleVisibleModalIngredients = (props) => {
    setVisibleModalIngredients(!visibleModalIngredients);

    props &&
      setSelectedItem({
        name: props.name,
        imageLarge: props.image_large,
        calories: props.calories,
        proteins: props.proteins,
        fat: props.fat,
        carbohydrates: props.carbohydrates,
      });
  };

  return (
    <section className={`${styles.ingredients} mt-10 mr-10`}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
      <div className={styles.wrapTab}>
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
            <IngredientsCard
              hedleVisibleModalIngredients={hedleVisibleModalIngredients}
              key={ingredient._id}
              ingredient={ingredient}
            />
          ))}
        </ul>
        <h3 className='text text_type_main-medium'>Соусы</h3>
        <ul className={`${styles.ingredientsGrid} pt-6 pb-2 pl-4 pr-4`}>
          {props.sauce.map((ingredient) => (
            <IngredientsCard
              hedleVisibleModalIngredients={hedleVisibleModalIngredients}
              key={ingredient._id}
              ingredient={ingredient}
            />
          ))}
        </ul>
        <h3 className='text text_type_main-medium'>Начинки</h3>
        <ul className={`${styles.ingredientsGrid} pt-6 pb-2 pl-4 pr-4`}>
          {props.main.map((ingredient) => (
            <IngredientsCard
              hedleVisibleModalIngredients={hedleVisibleModalIngredients}
              key={ingredient._id}
              ingredient={ingredient}
            />
          ))}
        </ul>
      </div>
      {visibleModalIngredients && (
        <Modal
          title={'Детали ингридиента'}
          visibleModal={hedleVisibleModalIngredients}
          isOpen={visibleModalIngredients}>
          <IngredientDetails selectedItem={selectedItem} />
        </Modal>
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  bun: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ),
  main: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ),
  sauce: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
