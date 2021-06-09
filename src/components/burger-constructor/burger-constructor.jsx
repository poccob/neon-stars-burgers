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

  React.useEffect(() => {
    const keyPress = (event) => {
      if (visibleModal && event.keyCode === 27) {
        setVisibleModal(false);
      }
    };
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, [visibleModal]);

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
                  text={bun.name}
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
              {props.bun[0] && (
                <ConstructorElement
                  type='bottom'
                  isLocked={true}
                  text={props.bun[0].name}
                  price={props.bun[0].price}
                  thumbnail={props.bun[0].image}
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
        <Modal visibleModal={hedleVisibleModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

BurgerConstructor.propTypes = {
  bun: PropTypes.arrayOf(
    PropTypes.shape({
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
