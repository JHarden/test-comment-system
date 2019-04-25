export interface StoreState {
    userName: string | undefined;
    articles: IArticle[];
    isCreatingArticle: boolean;
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
    hasVoted: boolean;
}

export interface IComment {
    author: string;
    date: string;
    text: string;
}