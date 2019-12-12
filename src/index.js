import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MainForm from './components/MainForm';
const App = () => {
    return (
        <MainForm />
    );
}
ReactDOM.render(<App />, document.getElementById('ds-root'));
registerServiceWorker();
