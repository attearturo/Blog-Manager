import * as React from 'react';
import { observer, Observer } from 'mobx-react';
import { BrowserRouter as Router,
        Link, Route } from 'react-router-dom';

import './Root.scss';
import '../../components/Register/Register.scss';
import Register from '../../components/Register/Register';
import { Login } from '../Login/Login';
import { Home } from '../Home/Home';

import { store } from '../../store/Store';

interface IProps {}

@observer export class Root extends React.Component<IProps> {

    render(){
        return <Router>

            <div>
                <Route path="/" exact component={Login}/>
                <Route path="/home" exact component={Home} />
            </div>    
    
        </Router> 
    }
}