export interface StoreState {
    userName: string | undefined;
    articles: IArticle[];
};

export interface IArticle {
    id: number;
    author: string;
    date: string;
    title: string;
    body: string;
    votes: number;
    showMore: boolean;
    comments: IComment[];
}

export interface IComment {
    author: string;
    date: string;
    text: string;
}