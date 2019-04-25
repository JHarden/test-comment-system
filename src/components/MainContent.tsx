import React from "react";
import { IArticle } from "../types";
import ReadOnlyArticle from "./ReadOnlyArticle";
import ReadOnlyArticleContainer from "../containers/ReadOnlyArticleContainer";
import CreateComment from "./CreateComment";
import CreateCommentContainer from "../containers/CreateCommentContainer";
import CreateArticle from "./CreateArticle";
import CreateArticleContainer from "../containers/CreateArticleContainer";

export interface MainContentProps {
    userName: string | undefined;
    articles: IArticle[];
    isCreatingArticle: boolean;
    onGetArticles: () => void;
    onClickArticleCreate: (value: boolean) => void;
}

class MainContent extends React.Component<MainContentProps, {}> {

    private title: string = '';
    private body: string = '';

    private onSubmit = () => {
        console.log('submitted');
    }

    private renderCreateArticle = () => {
        return this.props.userName ? <div>
            <button onClick={this.onClickArticleCreate}>Create Article</button>
        </div> : null
    };

    private onClickArticleCreate = () => {
        this.props.onClickArticleCreate(!this.props.isCreatingArticle);
    }

    render() {
        const { userName, articles } = this.props;

        return (
            <div>
                {
                    articles.map((article, index) => {
                        return (
                            <div>
                                <div>
                                    <ReadOnlyArticleContainer
                                        id={article.id}
                                        author={article.author}
                                        title={article.title}
                                        body={article.body}
                                        votes={article.votes}
                                        showMore={article.showMore}
                                        hasVoted={article.hasVoted}
                                        comments={article.comments}
                                        key={index}>
                                    </ReadOnlyArticleContainer>
                                    {article.showMore && userName ? <CreateCommentContainer author={userName} articleId={article.id}></CreateCommentContainer> : null}
                                </div>
                            </div>
                        )
                    })
                }
                {this.renderCreateArticle()}
                { this.props.isCreatingArticle ? 
                <div>
                                    TESTINNNNNG

                    <CreateArticleContainer author={userName}>
                    </CreateArticleContainer>
                </div>
                : null
                }
            </div>
        )
    }
}

export default MainContent;