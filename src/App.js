import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [desending, setDesending] = useState(false);
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const desendingOrderHandler = useCallback(() => {
    setDesending(!desending);
  }, [desending])

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} desending={desending} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={desendingOrderHandler}>{!desending ? 'Change To Desending Order': 'Change To Assending Order'}</Button>
    </div>
  );
}

export default App;
