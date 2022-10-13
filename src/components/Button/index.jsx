import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <div>
      <button {...props} className={styles.button + props.className} />
    </div>
  );
};

export default Button;
