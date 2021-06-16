import React from 'react';
import PropTypes from 'prop-types';

import styles from './ingredient-details.module.css';

export default function IngredientDetails(props) {
  return (
    <div className={styles.wrapIngredientDetails}>
      <img src={props.selectedItem.imageLarge} alt={props.selectedItem.name} />
      <h2 className='text text_type_main-medium mt-4 mb-8'>{props.selectedItem.name}</h2>
      <ul className={styles.structure}>
        <li className='mr-5'>
          <p className='text text_type_main-default text_color_inactive'>Калории,ккал</p>
          <p className='text text_type_digits-default text_color_inactive'>
            {props.selectedItem.calories}
          </p>
        </li>
        <li className='mr-5'>
          <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
          <p className='text text_type_digits-default text_color_inactive'>
            {props.selectedItem.proteins}
          </p>
        </li>
        <li className='mr-5'>
          <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
          <p className='text text_type_digits-default text_color_inactive'>
            {props.selectedItem.fat}
          </p>
        </li>
        <li>
          <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
          <p className='text text_type_digits-default text_color_inactive'>
            {props.selectedItem.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageLarge: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }),
};
