import React from "react";
import { IArticle } from "../types";
import ReadOnlyArticle from "./ReadOnlyArticle";

export interface MainContentProps {
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
        const { articles } = this.props;

        console.log('articles: ', articles);
        return(
            <div>  
                {
                    articles.map((article, index) => {
                        return <ReadOnlyArticle
                                    author={article.author}
                                    title={article.title}
                                    body={article.body}
                                    votes={article.votes}
                                    key={index}>
                                </ReadOnlyArticle>
                    })
                }
            </div>
        )
    }
}

export default MainContent;