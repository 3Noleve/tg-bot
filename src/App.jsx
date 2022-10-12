import './index.scss';
import React from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header';

function App() {
  const { onToggleButton, tg } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
