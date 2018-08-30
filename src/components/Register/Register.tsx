import * as React from 'react';
import { checkPropTypes } from 'prop-types';

interface Props {
    email: string;
    password:string;
    register:any;
    handleChangeEmail: any;
    handleChangePassword:any;
    goToLoggin:any
}

const Register = (props:Props) => {
    return <div id="login" className='landing'>
        <div id="bodyLogin">
            <form className='login' onSubmit={props.register}>
                <h4 className='subHeader'>Join<br></br>The Publisher</h4>
                <input id='usern' type="email" placeholder="Email" value={props.email} onChange={props.handleChangeEmail} required/>
                <input id='psw' type="password" placeholder="Password" value={props.password} onChange={props.handleChangePassword} required/>
                <button id='entrada' type="submit" className="btnLogin btnLogin-primary btnLogin-block btnLogin-large">Get Started</button>
                
                <p className="subTexto">I already have an account! <a className="registro" href='#' onClick={props.goToLoggin} >Sign in</a></p>
           
            </form>
        </div>
    </div>
};

export default Register;