export interface StoreState {
    userName: string | undefined;
    articles: IArticle[];
};

export interface IArticle {
    author: string;
    date: string;
    title: string;
    body: string;
    votes: number;
    comments: IComment[];
}

export interface IComment {
    author: string;
    date: string;
    text: string;
}