import React from 'react';
import './index.scss';

const tg = window.Telegram.WebApp;

function App() {
  React.useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
