import React from 'react';
import PropTypes from 'prop-types';

import styles from './ingredient-details.module.css';

export default function IngredientDetails(props) {
  console.log(props);
  return (
    <div className={styles.wrapIngredientDetails}>
      <img src={props.ingredient.image_large} alt={props.ingredient.name} />
      <h2 className='text text_type_main-medium mt-4 mb-8'>{props.ingredient.name}</h2>
      <ul className={styles.structure}>
        <li className='mr-5'>
          <p className='text text_type_main-default text_color_inactive'>Калории,ккал</p>
          <p className='text text_type_digits-default text_color_inactive'>
            {props.ingredient.calories}
          </p>
        </li>
        <li className='mr-5'>
          <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
          <p className='text text_type_digits-default text_color_inactive'>
            {props.ingredient.proteins}
          </p>
        </li>
        <li className='mr-5'>
          <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
          <p className='text text_type_digits-default text_color_inactive'>
            {props.ingredient.fat}
          </p>
        </li>
        <li>
          <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
          <p className='text text_type_digits-default text_color_inactive'>
            {props.ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredient: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      image_large: PropTypes.string,
      calories: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
    }),
  ),
};
