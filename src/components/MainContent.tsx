import React from "react";
import { IArticle } from "../types";
import ReadOnlyArticle from "./ReadOnlyArticle";
import ReadOnlyArticleContainer from "../containers/ReadOnlyArticleContainer";
import CreateComment from "./CreateComment";
import CreateCommentContainer from "../containers/CreateCommentContainer";

export interface MainContentProps {
    userName: string | undefined;
    articles: IArticle[];
    onGetArticles: () => void;

}

class MainContent extends React.Component<MainContentProps, {}> {

    private title: string = '';
    private body: string = '';

    private onSubmit = () => {
        console.log('submitted');
    }

    render() {
        const { userName, articles } = this.props;

        return (
            <div>
                {
                    articles.map((article, index) => {
                        return (
                        <div>
                            <ReadOnlyArticleContainer
                                id={article.id}
                                author={article.author}
                                title={article.title}
                                body={article.body}
                                votes={article.votes}
                                showMore={article.showMore}
                                comments={article.comments}
                                key={index}>
                            </ReadOnlyArticleContainer>
                            {article.showMore && userName? <CreateCommentContainer author={userName} articleId={article.id}></CreateCommentContainer> : null }
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default MainContent;