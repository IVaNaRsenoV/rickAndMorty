import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persister } from 'store';
import { store } from 'store';

import { BrowserRouter } from 'react-router-dom';

import App from 'App';
import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persister}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
);