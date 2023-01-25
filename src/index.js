import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Store/StoreIndex';
import './index.css';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><Provider  store={store}><App /></Provider></BrowserRouter>);
