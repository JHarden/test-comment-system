import React from "react";
import Comment from "./Comment";
import { IComment } from "../types";
import CreateComment from "./CreateComment";
import Vote from "./Vote";
import VoteContainer from "../containers/VoteContainer";
import styled from "styled-components";

export interface ReadOnlyArticleProps {
    isLoggedIn: boolean;
    id: number;
    author: string;
    title: string;
    body: string;
    votes: number;
    comments: IComment[];
    showMore: boolean;
    onShowMore: (value: boolean, id: number) => void;
    hasVoted: boolean;
}

export interface ReadOnlyUIState {
    showMore: boolean
}

const StyledArticle = styled.div`
    background: #eaeaea;
    display: flex;
    margin: 20px;
    flex-direction: column;
    cursor: pointer;
    transition: background-color 0.2s ease-in;
    &:hover {
        background: #fff;
    }
`;

const FlexContainer = styled.div`
    display: flex;
`

const CommentListWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
`
const BodyContent = styled.p`
    padding: 10px 20px 20px;
    text-align: left;
    line-height: 1.5;
    margin-top: 0;
`

const ArticleHeader = styled.div`
    font-weight: normal;
    text-align: left;
    width: 100%;
    margin-top: 10px;
    >div {
        font-size: 14px;
    }
    >h2 {
        margin-top: 5px;
        font-weight: normal;
        font-size: 20px;
    }
`;

const CommentList = styled.div`
    display: flex;
    min-width: 15%;
    font-size: 14px;
    padding-bottom: 10px;
    justify-content: flex-end;
`
class ReadOnlyArticle extends React.Component<ReadOnlyArticleProps, ReadOnlyUIState> {

    private toggle = () => {
        this.props.onShowMore(!this.props.showMore, this.props.id);
    }

    private getComments = () => {
        return this.props.comments.map((comment, idx) => {
            return <Comment
                author={comment.author}
                text={comment.text}
                key={idx}>
            </Comment>
        })
    }

    render() {
        const { id, author, title, body, votes, showMore, hasVoted, isLoggedIn, comments } = this.props;
        return (
            <StyledArticle>
                <FlexContainer>
                    <VoteContainer isLoggedIn={isLoggedIn} articleId={id} votes={votes} hasVoted={hasVoted}></VoteContainer>
                    <ArticleHeader onClick={this.toggle}>
                        <div>{author}</div>
                        <h2>{title}</h2>
                    </ArticleHeader>
                </FlexContainer>
                <CommentListWrapper>                    
                    <CommentList>{comments.length} comments</CommentList>
                </CommentListWrapper>
                {
                    showMore ?
                        <div>
                            <BodyContent>
                                {body}
                            </BodyContent>
                            <div>
                                {this.getComments()}
                            </div>
                        </div> : ''
                }
            </StyledArticle>
        )
    }
}

export default ReadOnlyArticle;