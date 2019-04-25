import * as constants from '../constants';
import { IArticle } from '../types';

export interface Login {
    type: constants.LOGIN,
    userName: string
}
export interface GetArticles {
    type: constants.GET_ARTICLES
}

export type LoginAction = Login;
export type GetArticlesAction = GetArticles;

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