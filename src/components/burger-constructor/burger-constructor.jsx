import React from 'react';
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import styles from './burger-constructor.module.css';
export default function BurgerConstructor(props) {
  const [visibleModal, setVisibleModal] = React.useState(false);

  const hedleVisibleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const ingredients = [...props.main, ...props.sauce];
  const bun = props.bun[0];

  return (
    <>
      <section className={`${styles.constructor} mt-25 ml-4 mr-4`}>
        <div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li className={`${styles.wrapConstructorElement} pl-8 pr-2`}>
              {bun && (
                <ConstructorElement
                  type='top'
                  isLocked={true}
                  text={`${bun.name} (верх)`}
                  price={bun.price}
                  thumbnail={bun.image}
                />
              )}
            </li>
            <li>
              <ul
                className={styles.wrapConstructorItems}
                style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {ingredients.map((ingredient) => (
                  <li className={`${styles.wrapConstructorElement} pl-8`} key={ingredient._id}>
                    <span className={styles.dots}>
                      <DragIcon type='primary' />
                    </span>
                    <ConstructorElement
                      text={ingredient.name}
                      price={ingredient.price}
                      thumbnail={ingredient.image}
                    />
                  </li>
                ))}
              </ul>
            </li>
            <li className={`${styles.wrapConstructorElement} pl-8 pr-2`}>
              {bun && (
                <ConstructorElement
                  type='bottom'
                  isLocked={true}
                  text={`${bun.name} (низ)`}
                  price={bun.price}
                  thumbnail={bun.image}
                />
              )}
            </li>
          </ul>
        </div>
        <div className={`${styles.wrapTotalPrice} mt-15 pr-6`}>
          <span className={`${styles.totalPrice} text text_type_digits-medium mr-10`}>
            610 <CurrencyIcon type='primary' />
          </span>
          <Button type='primary' size='large' onClick={hedleVisibleModal}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {visibleModal && (
        <Modal visibleModal={hedleVisibleModal} isOpen={visibleModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

BurgerConstructor.propTypes = {
  bun: PropTypes.arrayOf(
    PropTypes.shape({
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
