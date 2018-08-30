import * as React from 'react';

import './Root.scss';
import '../../components/Register/Register.scss';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import Home from '../../components/Projects/Home';

interface Props {}
interface State {
    statusScreen:number;
    email: string;
    password: string;
    writer: string;
    text: string;
    code: string;
    departament: string;
    title: string;
    errorLogged: boolean;
    user:any;
}

export class Root extends React.Component <Props, State> {
constructor(props:Props){
    super(props);
    this.state = {
        statusScreen:0,
        email: '',
        password: '',
        writer: '',
        code: '',
        departament: '', 
        title: '',
        text: '',
        errorLogged:false,
        user:null,
    }
}
    handleChangeEmail = (event:any) => {
        this.setState({email:event.target.value})
    }

    handleChangePassword = (event: any) => {
        this.setState({password: event.target.value})
    }

    goToLoggin = () => {
        this.setState({
            statusScreen:0
        })
    }

    goToRegister = () => {
        this.setState({
            statusScreen: 1
        })
    }

    register = (event:any) => {
        event.preventDefault;
        /*------------------*/
        localStorage.setItem('email',this.state.email);
        localStorage.setItem('password', this.state.password);
        /*------------------*/
        this.setState({
            email:'',
            password:''
        })

        this.setState({
            statusScreen:0
        })
    };


    login = (event: any) => {
        event.preventDefault();

        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if(this.state.email === email && this.state.password == password){
            localStorage.setItem('writer', this.state.writer);
            localStorage.setItem('text', this.state.text);

            this.setState({
                statusScreen:2
            });
            return;
        }
        this.setState({
            errorLogged:true
        })
    };

    render(){
        console.log(this.state);
        return (
            <section>
            {
                this.state.statusScreen === 0 &&
                    <Login
                        email={this.state.email}
                        password={this.state.password}
                        handleChangeEmail={this.handleChangeEmail}
                        handleChangePassword={this.handleChangePassword}
                        login={this.login}
                        errorLogged={this.state.errorLogged}
                        goToRegister={this.goToRegister}
                    />
            }

            {
                this.state.statusScreen === 1 &&
                    <Register
                        email={this.state.email}
                        password={this.state.password}
                        handleChangeEmail={this.handleChangeEmail}
                        handleChangePassword={this.handleChangePassword}
                        register={this.register}
                        goToLoggin={this.goToLoggin}
                    />
            }

            {
                this.state.statusScreen === 2 &&
                <Home 
                        writer={this.state.writer}
                        code={this.state.code}
                        departament={this.state.departament}
                        title={this.state.title}
                        text={this.state.text}
                        handleChangeEmail={this.handleChangeEmail}
                        handleChangePassword={this.handleChangePassword}
                        register={this.register}
                        goToLoggin={this.goToLoggin}
                />
            }
            </section>    
        ) 
    }
}