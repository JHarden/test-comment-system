import React from "react";
import Comment from "./Comment";
import { IComment } from "../types";
import CreateComment from "./CreateComment";

export interface ReadOnlyArticleProps {
    id: number;
    author: string;
    title: string;
    body: string;
    votes: number;
    comments: IComment[];
    showMore: boolean;
    onShowMore: (value: boolean, id: number) => void;
    // userName: boolean;
    // onAddComment: () => Comment;
    // onCreateComment: () => Comment;
}

export interface ReadOnlyUIState {
    showMore: boolean
}
const divStyle = {
    color: 'blue',
    outline: '1px solid red',
    cursor: 'pointer'
};

class ReadOnlyArticle extends React.Component<ReadOnlyArticleProps, ReadOnlyUIState> {

    private toggle = () => {
        this.props.onShowMore(!this.props.showMore, this.props.id);
    }

    private getComments = () => {
        return this.props.comments.map((comment, idx) => {
            return <Comment
                author={comment.author}
                date={comment.date}
                text={comment.text}
                key={idx}>
            </Comment>
        })
    }

    render() {
        const { author, title, body, votes, comments, showMore } = this.props;
        return (
            <div style={divStyle} onClick={this.toggle}>
                <div>votes:{votes}</div>
                <div>by: {author} </div>
                <h2>{title}</h2>
                {
                    showMore ?
                        <div>
                            <div>
                                {body}
                            </div>
                            <div>
                                {this.getComments()}
                            </div>
                        </div> : ''
                }
            </div >
        )
    }
}

export default ReadOnlyArticle;