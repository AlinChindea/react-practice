import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';

import './main.css';

const App = () => {
  const title = 'React Coin';
  return (
    <div>
      <Header />
      
      <h1>{title}</h1>

      <h3>Up to date crypto currencies financial data</h3>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
