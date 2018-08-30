import * as React from 'react';

interface Props {
    email: string;
    password: string;
    login: any;
    handleChangeEmail: any;
    handleChangePassword: any;
    errorLogged:boolean;
    goToRegister:any
}

const Login = (props: Props) => {
    return (
            <div id="login" className='landing'>
                <div id="bodyLogin">
            <form className='login' onSubmit={props.login}>
                <h4 className='subHeader'>Welcome back!</h4>
                <input id='usern' type="email" placeholder="Email" value={props.email} onChange={props.handleChangeEmail} required />
                <input id='psw' type="password" placeholder="Password" value={props.password} onChange={props.handleChangePassword} required />
                <button id='entrada' type="submit" className="btnLogin btnLogin-primary btnLogin-block btnLogin-large">Sign in</button>

                <p className="subTexto">Hello, <a className="registro" href='#' onClick={props.goToRegister} >I'm new</a></p>
            
                    {
                        props.errorLogged &&
                        <div>
                            <p className="subTexto">Las credenciales no son correctas</p>
                        </div>
                    }
            </form>
            
                </div>
            </div>
    )

};

export default Login;