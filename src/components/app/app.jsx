import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import styles from './app.module.css';

export default function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const URL = '../../utils/data.json';

  React.useEffect(() => {
    const getIngredients = () => {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          setIngredients((ingredients) => data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getIngredients();
  }, []);

  return (
    <main className={styles.app}>
      <AppHeader />
      <div className={styles.mainContentWrap}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </div>
    </main>
  );
}
