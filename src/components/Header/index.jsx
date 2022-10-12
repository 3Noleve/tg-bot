import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import styles from './Header.module.scss';

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={styles.header}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={styles.username}>{user?.username}</span>
    </div>
  );
};

export default Header;
