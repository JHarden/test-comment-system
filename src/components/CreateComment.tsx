import React from "react";
import styled from "styled-components";

export interface CommentProps {
    onShowComment: (text: string, date: string) => void;
}

const commentStyle = {
    color: 'green',
    outline: '1px solid green'
}


const StyledComment = styled.div`
    background: #dedcdc;
    min-height: 80px;
    display: flex;
    padding: 0 0 0 20px;
    `


const Avatar = styled.div`
    width: 50px;
    height: 50px;
    background: grey;
    border-radius: 50%;
`;

const CommentBody = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    align-items: flex-start;
    width: 80%;
    text-align: left;
    
`;

const CommentButton = styled.button`
    font-size: 20px;
    padding: 5px 0;
    height: 50px;
    width: 100px;
    background: #4ca4ff;
    position: relative;
    left: 20px;
    border-radius: 5px;
    color: #fff;
`;

const CommentInput = styled.input`
    font-size: 14px;
    min-width: 50%;
    height: 50px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
`;
class CreateComment extends React.Component<CommentProps, {}> {

    private text: string = '';
    private onSubmit = () => {
        this.props.onShowComment(this.text, new Date().toString())
    }

    private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.text = event.currentTarget.value;
    }

    render() {

        return (
            <StyledComment>
                <CommentBody>
                    <CommentInput type='text' placeholder={'write comment...'} onChange={this.handleChange}></CommentInput>
                    <CommentButton onClick={this.onSubmit}>send</CommentButton>
                </CommentBody>
            </StyledComment>
        )
    }
}

export default CreateComment;