import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import styles from './app.module.css';

export default function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const URL = 'https://norma.nomoreparties.space/api/ingredients';

  React.useEffect(() => {
    const getIngredients = () => {
      fetch(URL)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((result) => {
          setIngredients(result.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getIngredients();
  }, []);

  function findIngredientsByType(type) {
    return ingredients.filter((ingredient) => ingredient.type === type);
  }

  const ingredientsTypeBun = findIngredientsByType('bun');
  const ingredientsTypeMain = findIngredientsByType('main');
  const ingredientsTypeSauce = findIngredientsByType('sauce');

  return (
    <main className={styles.app}>
      <AppHeader />
      <div className={styles.mainContentWrap}>
        <BurgerIngredients
          bun={ingredientsTypeBun}
          main={ingredientsTypeMain}
          sauce={ingredientsTypeSauce}
        />
        <BurgerConstructor
          bun={ingredientsTypeBun}
          main={ingredientsTypeMain}
          sauce={ingredientsTypeSauce}
        />
      </div>
    </main>
  );
}
