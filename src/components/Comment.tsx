import React from "react";
import styled from "styled-components";

export interface CommentProps {
    author: string;
    text: string;
}

const StyledComment = styled.div`
    background: #dedcdc;
    min-height: 80px;
    display: flex;
    padding: 20px 0 0 20px;
    `


const Avatar = styled.div`
    width: 50px;
    height: 50px;
    background: grey;
    border-radius: 50%;
`;

const CommentBody = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    align-items: flex-start;
    max-width: 80%;
    text-align: left;
    
`;

const CommentText = styled.div`
    font-size: 20px;
    padding: 5px 0;
`;

const CommentAuthor = styled.div`
    font-size: 14px;
`;
class Comment extends React.Component<CommentProps, {}> {

    render() {
        const { author, text } = this.props;

        return (
            <StyledComment>
                <Avatar></Avatar>
                <CommentBody>
                    <CommentAuthor>{author}</CommentAuthor>
                    <CommentText>{text}</CommentText>
                </CommentBody>
            </StyledComment>
        )
    }
}

export default Comment;