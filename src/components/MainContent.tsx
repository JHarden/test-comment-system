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

const CreateArticleButton = styled.button`
    font-size: 20px;
    padding: 5px 0;
    background: #4ca4ff;
    position: relative;
    left: 20px;
    border-radius: 5px;
    color: #fff;
    width: 140px;
    height: 35px;
    cursor: pointer;
    position: relative;
    top: 3px;
`;

const CreateArticleButtonWrapper = styled.div`
    width: 95%;
    display: flex;
    justify-content: flex-start;
`;


const CreateArticleWrapper = styled.div`
    width: 100%;
`;
class MainContent extends React.Component<MainContentProps, {}> {

    private renderCreateArticle = () => {
        return this.props.userName ? <CreateArticleButtonWrapper>
            <CreateArticleButton onClick={this.onClickArticleCreate}>New Article +</CreateArticleButton>
        </CreateArticleButtonWrapper> : null
    };

    private sortArticles = (): IArticle[] => {
        const compare = (a: IArticle, b: IArticle) => {
            if (a.votes < b.votes) {
                return -1;
            }
            if (a.votes > b.votes) {
                return 1;
            }
            return 0;
        }
        let articles = this.props.articles;
        articles = articles.sort(compare);
        return articles;
    }

    private onClickArticleCreate = () => {
        this.props.onClickArticleCreate(!this.props.isCreatingArticle);
    }

    render() {
        const { userName } = this.props;

        return (
            <div>
                {this.renderCreateArticle()}
                {this.props.isCreatingArticle ?
                    <CreateArticleWrapper>
                        <CreateArticleContainer author={userName}>
                        </CreateArticleContainer>
                    </CreateArticleWrapper>
                    : null
                }

                <StyledMainContent>
                    {
                        this.sortArticles().reverse().map((article, index) => {
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

                </StyledMainContent>
            </div>
        )
    }
}

export default MainContent;