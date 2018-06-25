import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App u={'Hello Anton'}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
