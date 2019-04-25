import React from "react";
import { IArticle } from "../types";
import ReadOnlyArticleContainer from "../containers/ReadOnlyArticleContainer";
import CreateCommentContainer from "../containers/CreateCommentContainer";
import CreateArticleContainer from "../containers/CreateArticleContainer";
import styled from "styled-components";

export interface MainContentProps {
    userName: string | undefined;
    articles: IArticle[];
    isCreatingArticle: boolean;
    onGetArticles: () => void;
    onClickArticleCreate: (value: boolean) => void;
}

const StyledMainContent = styled.div`
    background: #dedcdc;
    font-family: 'Roboto', sans-serif;
    color: #000;
    padding-top: 10px;
`;
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
            <StyledMainContent>
                {
                    articles.map((article, index) => {
                        return (
                            <div>
                                <ReadOnlyArticleContainer
                                    isLoggedIn={userName ? true : false}
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
                        )
                    })
                }
                {this.renderCreateArticle()}
                {this.props.isCreatingArticle ?
                    <div>
                        <CreateArticleContainer author={userName}>
                        </CreateArticleContainer>
                    </div>
                    : null
                }
            </StyledMainContent>
        )
    }
}

export default MainContent;