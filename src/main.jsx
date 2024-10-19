import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index.js'; // Importing the store correctly
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cssTransition } from 'react-toastify';

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  appendPosition: false,
  collapse: true,
  collapseDuration: 300
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <App />
      <ToastContainer  position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
textContent
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="colored"
transition: Slide />
    </Provider>
  </StrictMode>
);
