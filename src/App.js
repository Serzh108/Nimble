import React from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import ItemList from './components/ItemList/ItemList';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <ItemList />
    </div>
  );
}

export default App;
