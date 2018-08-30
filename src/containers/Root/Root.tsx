import * as React from 'react';

import './Root.scss';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import Anagram from '../../components/Anagram/Anagram';

interface Props {}

interface State {
    statusScreen:number;
    email: string;
    password: string;
    errorLogged: boolean;
}

export class Root extends React.Component <Props, State> {

constructor(props:Props){
    super(props);
    this.state = {
        statusScreen:0,
        email: '',
        password: '',
        errorLogged:false
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
            statusScreen:1
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
            statusScreen:1
        })
    };


    login = (event: any) => {
        event.preventDefault();

        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if(this.state.email === email && this.state.password == password){
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
        return (
            <section>
            {
                this.state.statusScreen === 0 &&
                    <Register 
                        email = {this.state.email}
                        password={this.state.password}
                        handleChangeEmail={this.handleChangeEmail}
                        handleChangePassword={this.handleChangePassword}
                        register={this.register}
                        goToLoggin={this.goToLoggin}
                    />
            }

            {
                this.state.statusScreen === 1 &&
                    <Login 
                        email={this.state.email}
                        password={this.state.password}
                        handleChangeEmail={this.handleChangeEmail}
                        handleChangePassword={this.handleChangePassword}
                        login={this.login}
                        errorLogged={this.state.errorLogged}
                    />
            }


            {
                this.state.statusScreen === 2 &&
                    <Anagram />
            }
            </section>    
        ) 
    }
}























