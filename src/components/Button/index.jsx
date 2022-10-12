import React from 'react';
import styles from 'Button.module.scss';

const Button = () => {
  return (
    <div>
      <button {...props} className={styles.button} />
    </div>
  );
};

export default Button;
