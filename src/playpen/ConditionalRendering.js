import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {isLogged: false};
    }

    handleLogin(){
        this.setState({isLogged: true});
    }

    handleLogout(){
        this.setState({isLogged: false});
    }

    render(){
        const isLogged = this.state.isLogged;
        let button;

        if(isLogged){
            button = <LogoutButton onClick={this.handleLogout}/>
        } 
        else{
            button = <LoginButton onClick={this.handleLogin}/>
        }

        return(
            <div>
                <Message isLogged={isLogged} />
                {button}
            </div>
        );
    }
}

function WelcomeMsg(props){
    return <li>Welcome</li>;
}

function ByeMsg(props){
    return <li>Bye..!</li>;
}

function Message(props){
    const userLogged = props.isLogged;

    if (userLogged){
        return <WelcomeMsg/>;
    }
    else{
        return <ByeMsg/>;
    }
}

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

export default Login;