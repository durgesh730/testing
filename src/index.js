import './index.css';
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthContext';
import { SnackbarProvider } from './context/SnackBarContext';
import { store } from './redux/store';
import { InventoryProvider } from './context/InventoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <InventoryProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </InventoryProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
