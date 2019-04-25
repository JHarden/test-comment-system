import * as constants from '../constants';

export interface Login {
    type: constants.LOGIN,
    userName: string
}
export interface GetArticles {
    type: constants.GET_ARTICLES
}

export interface ShowMore {
    type: constants.SHOW_MORE
    showMore: boolean,
    id: number
}
export interface AddComment {
    type: constants.ADD_COMMENT,
    articleId: number,
    author: string,
    text: string,
    date: string
}
export interface AddArticle {
    type: constants.ADD_ARTICLE,
    author: string,
    title: string,
    body: string,
    date: string
}
export interface ToggleAddArticle {
    type: constants.TOGGLE_ADD_ARTICLE,
    isCreatingArticle: boolean;
}

export type LoginAction = Login;
export type GetArticlesAction = GetArticles;
export type ShowMoreAction = ShowMore;
export type AddCommentAction = AddComment;

export function login(value: string): Login {
    return {
        type: constants.LOGIN,
        userName: value
    }
}

export function GetArticles(): GetArticles {
    return {
        type: constants.GET_ARTICLES
    }
}

export function ShowMore(showMore: boolean, id: number): ShowMore {
    return {
        type: constants.SHOW_MORE,
        showMore,
        id
    }
}
export function AddComment(articleId: number, author: string, text: string, date: string): AddComment {
    return {
        type: constants.ADD_COMMENT,
        articleId,
        author,
        text,
        date
    }
}

export function AddArticle(author: string, title: string, body: string, date: string): AddArticle {
    return {
        type: constants.ADD_ARTICLE,
        author,
        title,
        body,
        date
    }
}

export function ToggleAddArticle(isCreatingArticle: boolean): ToggleAddArticle {
    return {
        type: constants.TOGGLE_ADD_ARTICLE,
        isCreatingArticle
    }
}