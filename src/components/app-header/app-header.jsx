import React from 'react';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <ul className={styles.wrap}>
        <li className={styles.column}>
          <ul>
            <li className={styles.navItem}>
              <span className={styles.iconActive}>
                <BurgerIcon type='primary' />
              </span>
              <span className={styles.textActive}>Конструктор</span>
            </li>
            <li className={`${styles.navItem} ml-2`}>
              <span className={styles.icon}>
                <ListIcon type='secondary' />
              </span>
              <span className={styles.textNoActive}>Лента заказов</span>
            </li>
          </ul>
        </li>
        <li className={styles.column}>
          <div className={styles.logo}>
            <Logo />
          </div>
        </li>
        <li className={styles.column}>
          <div className={styles.login}>
            <ProfileIcon type='secondary' />
            <span className={styles.textNoActive}>Личный кабинет</span>
          </div>
        </li>
      </ul>
    </header>
  );
}
