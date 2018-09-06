import * as React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import { store } from '../../store/Store';
import { checkPropTypes } from 'prop-types';


export const Register = observer (withRouter((props) => {
    return <div id="login" className='landing'>
        <div id="bodyLogin">

            <form className='login' onSubmit={(evento) => {
                evento.preventDefault();
                let form : any = evento.target;
                store.setUser(form.nickname.value, form.email.value, form.pass.value);
                localStorage.setItem('user', form.email.value);
                localStorage.setItem('email', form.pass.value);
                localStorage.setItem('nickname', form.nickname.value);

                //Ir a Login
                props.history.push('/');
            }}>
        
                <h4 className='subHeader'>Join<br></br>The Publisher</h4>
                <input type="text" name='nickname' placeholder="Name" required />
                <input type="email" name='email' placeholder="Email" required />
                <input type="password" name='pass' placeholder="Password" required />
                <button id='entrada' type="submit" className="btnLogin btnLogin-primary btnLogin-block btnLogin-large">Get Started</button>

                <p className="subTexto">I already have an account! <a
                    className="registro"
                    href='#'
                    onClick={(evento) => { props.history.push('/') }}
                >Sign in</a></p>

            </form>
        </div>
    </div>
}));
