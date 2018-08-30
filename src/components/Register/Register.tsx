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
    return (
        <section>
            <div>
                <h1>Registro</h1>
            </div>
            <form onSubmit={props.register}>
                <input type="email" placeholder="Correo" value={props.email} onChange={props.handleChangeEmail}/>
                <input type="password" placeholder="Contraseña" value={props.password} onChange={props.handleChangePassword}/>
                <button type="submit">Registrar</button>

                <button onClick={props.goToLoggin}>Iniciar sesión</button>
            </form>
        </section>
    )

};

export default Register;