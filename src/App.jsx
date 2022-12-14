// main imports

import './index.scss';
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Form from './components/Form';

//  lib imports and custom hooks

import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';

// code

function App() {
  const { onToggleButton, tg } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}

// end of code
export default App;
