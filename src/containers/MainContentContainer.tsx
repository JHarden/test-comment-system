import MainContent from '../components/MainContent';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps( {userName, articles}: StoreState) {
    return {
        userName,
        articles
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.GetArticles>) {
    return {
        onGetArticles: ()=> dispatch(actions.GetArticles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);