import React from "react";

export interface LoginProps {
    userName: string | undefined;
    onLogin: (value: string) => void;
}

class Login extends React.Component<LoginProps, {}> {

    private userName: string = '';

    private handleLogin = () => {
        this.props.onLogin(this.userName);
    }

    private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.userName = event.currentTarget.value;
    }

    render() {
        return(
            <div> 
                <p>Login</p>
                <input type='text' onChange={this.handleChange}></input>
                <button onClick={this.handleLogin}>click me</button>
            </div>
        )
    }
}

export default Login;