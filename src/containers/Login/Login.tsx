import * as React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import { store } from '../../store/Store';

export const Login = observer (withRouter((props) => {
    return  <div id="login" className='landing'>
                <div id="bodyLogin">

                    <form className='login' onSubmit ={(evento) => {
                        evento.preventDefault();
                        let form : any = evento.target;
                        store.setUser(form.user.value, form.pass.value);

                        //Ir a Home
                        props.history.push('/home');
                    }}>
                    
                    <h4 className='subHeader'>Welcome back!</h4>
                    <input type="email" name='user' placeholder="Email" required />
                    <input type="password" name='pass' placeholder="Password" required />
                    <button type="submit" className="btnLogin btnLogin-primary btnLogin-block btnLogin-large">Sign in</button>

                        <p className="subTexto">Hello, <a 
                        className="registro" 
                        href='#' 
                        onClick={(evento) => {props.history.push('/register')}}
                        >I'm new</a></p>
                    
                    </form>
                </div>
            </div>
}));
