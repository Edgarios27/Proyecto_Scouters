import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
<<<<<<< HEAD
import './index.css';
import { AuthProvider } from './AuthContext/AuthContext';
import { Context } from './Context/Context';


=======
import './index.css'
import { AuthProvider } from './AuthContext/AuthContext';
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
  <AuthProvider >
     <Context>
         <App />
    </Context>
  </AuthProvider>
</React.StrictMode>
=======
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
);
