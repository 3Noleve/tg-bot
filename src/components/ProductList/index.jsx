import React from 'react';
import ProductItem from '../ProductItem';
import styles from './ProductList.module.scss';
import { tg } from '../../hooks/useTelegram';

const products = [
  { id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые' },
  { id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая' },
  { id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые' },
  { id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая' },
  { id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые' },
  { id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая' },
  { id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые' },
  { id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая' },
];

const ProductList = () => {
  const [addedItems, setAddedItems] = React.useState([]);

  const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
      return (acc += item.price);
    }, 0);
  };

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.find((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить за ${getTotalPrice(newItems)} `,
      });
    }
  };

  return (
    <div className={styles.list}>
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={styles.item} />
      ))}
    </div>
  );
};

export default ProductList;
