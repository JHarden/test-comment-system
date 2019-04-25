import React from "react";

export interface ReadOnlyArticleProps {
    author: string;
    title: string;
    body: string;
    votes: number;
}

class ReadOnlyArticle extends React.Component<ReadOnlyArticleProps, {}> {

    render() {
        const { author, title, body, votes } = this.props;
        return(
            <div>  
                <div>votes:{votes}</div>
                <div>by: {author} </div>
                <h2>{title}</h2>
                <div>{body}</div>
            </div>
        )
    }
}

export default ReadOnlyArticle;