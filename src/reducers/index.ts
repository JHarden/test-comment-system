import { StoreState } from "../types";
import { LoginAction } from "../actions";
import { LOGIN, SHOW_MORE, ADD_COMMENT, TOGGLE_ADD_ARTICLE, ADD_ARTICLE, VOTE } from "../constants";

export function reducers(state: StoreState, action: any) {
    switch (action.type) {
        case LOGIN:
            return { ...state, userName: action.userName };
        case TOGGLE_ADD_ARTICLE:
            return { ...state, isCreatingArticle: action.isCreatingArticle };
        case SHOW_MORE:
            return {
                ...state, articles: state.articles.map((_article, idx) => {
                   return  _article.id === action.id ? { ..._article, showMore: action.showMore }
                        : _article
                })
            };
        case ADD_COMMENT:
            return {
                ...state, articles: state.articles.map((_article, idx) => {
                   return  _article.id === action.articleId ? 
                        { ..._article, comments: [..._article.comments, {author: action.author, date: action.date, text: action.text}]}
                        : _article
                })
            };
        case ADD_ARTICLE:
            return {
                ...state, articles: [...state.articles,     {
                    id: state.articles.length+1, 
                    author: action.author, 
                    title: action.title, 
                    body: action.body, 
                    date: action.date, 
                    votes: 1,
                    comments: []
                }]
            };
        case VOTE:
            return {
                ...state, articles: state.articles.map((_article, idx) => {
                    return  _article.id === action.articleId ? 
                         { ..._article, votes: action.votes, hasVoted: true}
                         : _article
                 })            };
        default:
            return { ...state }
    }
}