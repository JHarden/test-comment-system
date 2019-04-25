import MainContent from '../components/MainContent';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps( {userName, articles, isCreatingArticle}: StoreState) {
    return {
        userName,
        articles,
        isCreatingArticle
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onClickArticleCreate: (value: boolean)=> dispatch(actions.ToggleAddArticle(value)),
        onGetArticles: ()=> dispatch(actions.GetArticles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);