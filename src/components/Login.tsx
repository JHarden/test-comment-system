import React from "react";
import styled from "styled-components";

export interface LoginProps {
    userName: string | undefined;
    onLogin: (value: string) => void;
}

const StyledLogin = styled.div`
    background: #dedcdc;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    margin: 20px;
`;

const StyledLoginInput = styled.input`
    font-size: 14px;
    min-width: 80px;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
`
const LoginButton = styled.button`
    font-size: 20px;
    padding: 5px 0;
    background: #4ca4ff;
    position: relative;
    left: 20px;
    border-radius: 5px;
    color: #fff;
    width: 60px;
    height: 35px;
    cursor: pointer;
    position: relative;
    top: 3px;
`;

const WelcomeMessage = styled.div`
    color: grey;
    font-size: 22px;

`
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
                        <WelcomeMessage>Hello {userName}</WelcomeMessage> :
                        <div>
                            <StyledLoginInput type='text' onChange={this.handleChange}></StyledLoginInput>
                            <LoginButton onClick={this.handleLogin}>login</LoginButton>
                        </div>
                }
            </StyledLogin>
        )
    }
}

export default Login;