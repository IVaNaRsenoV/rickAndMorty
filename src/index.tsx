import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persister } from 'store';
import { store } from 'store';

import { BrowserRouter } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';

import App from 'App';
import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <GoogleOAuthProvider clientId={"424225957640-mk3u0grae98a4ppli4087n582n0sr4j8.apps.googleusercontent.com"}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persister}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>,
);