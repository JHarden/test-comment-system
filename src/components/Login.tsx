import React from "react";
import styled from "styled-components";

export interface LoginProps {
    userName: string | undefined;
    onLogin: (value: string) => void;
}

const StyledLogin = styled.div`
    background: #dedcdc;
`;

class Login extends React.Component<LoginProps, {}> {

    private userName: string = '';

    private handleLogin = () => {
        this.props.onLogin(this.userName);
    }

    private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.userName = event.currentTarget.value;
    }

    render() {
        const { userName } = this.props;
        return (
            <StyledLogin>
                {
                    userName ?
                        <div>Hello {userName}
                        </div> :
                        <div>
                            <p>Login</p>
                            <input type='text' onChange={this.handleChange}></input>
                            <button onClick={this.handleLogin}>click me</button>
                        </div>
                }
            </StyledLogin>
        )
    }
}

export default Login;