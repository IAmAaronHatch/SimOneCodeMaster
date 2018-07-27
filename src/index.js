import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/form' component={Form}/>
            <Route path='/edit/:id' component={Form}/>
        </Switch>
    </HashRouter>
   
    , document.getElementById('root'));
registerServiceWorker();
