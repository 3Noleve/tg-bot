import React from 'react';
import Button from '../Button';
import styles from './ProductItem.module.scss';

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className={styles.product + className}>
      <div className={styles.img} />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.price}>
        <span>
          Стоимость: <b>{product.price}</b>
        </span>
      </div>
      <Button className={styles.add - btn} onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductItem;
