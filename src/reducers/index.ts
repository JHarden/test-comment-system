import { StoreState } from "../types";
import { LoginAction } from "../actions";
import { LOGIN, SHOW_MORE, ADD_COMMENT } from "../constants";

export function reducers(state: StoreState, action: any) {
    switch (action.type) {
        case LOGIN:
            return { ...state, userName: action.userName };
        case SHOW_MORE:
            return {
                ...state, articles: state.articles.map((_article, idx) => {
                   return  _article.id === action.id ? { ..._article, showMore: action.showMore }
                        : _article
                })
            };
        case ADD_COMMENT:
            console.log('add comment', action);
            return {
                ...state, articles: state.articles.map((_article, idx) => {
                   return  _article.id === action.articleId ? 
                        { ..._article, comments: [..._article.comments, {author: action.author, date: action.date, text: action.text}]}
                        : _article
                })
            };
        default:
            return { ...state }
    }
}