import React from "react";
import styled from "styled-components";

export interface CommentProps {
    onShowComment: (text: string, date: string) => void;
}

const StyledComment = styled.div`
    background: #dedcdc;
    min-height: 80px;
    display: flex;
    padding: 0 0 0 20px;
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

    render() {
        return (
            <StyledComment>
                <CommentBody>
                    <CommentInput type='text' placeholder={'write comment...'} onChange={(e) =>this.text = e.currentTarget.value}></CommentInput>
                    <CommentButton onClick={this.onSubmit}>send</CommentButton>
                </CommentBody>
            </StyledComment>
        )
    }
}

export default CreateComment;