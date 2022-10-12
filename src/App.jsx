import React from 'react';
import './index.scss';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { onToggleButton, tg } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
