import React from "react";

export interface CommentProps {
    author: string;
    text: string;
    date: string;
}

const commentStyle ={
    color: 'green',
    outline: '1px solid green'
}
class Comment extends React.Component<CommentProps, {}> {

    render() {
        const {author, text, date} = this.props;

        return(
            <div style={commentStyle}> 
                <div>{author}</div>
                <div>{text}</div>
                <div>{date}</div>
            </div>
        )
    }
}

export default Comment;