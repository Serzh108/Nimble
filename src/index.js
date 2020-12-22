import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import store, { persistor } from './redux/store';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'Loading...'} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
