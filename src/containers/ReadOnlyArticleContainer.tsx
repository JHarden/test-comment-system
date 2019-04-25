import ReadOnlyArticle from '../components/ReadOnlyArticle';
import * as actions from '../actions';
import { StoreState, IArticle } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface OwnProps {
    id: number;
    showMore: boolean;
}

export function mapStateToProps( {articles} : StoreState, ownProps: OwnProps) {

    const article = articles.find((a: IArticle) => {
           return a.id === ownProps.id
    });

    return {
        article, ...articles
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ShowMore>) {
    return {
        onShowMore: (value: boolean, id: number)=> dispatch(actions.ShowMore(value, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadOnlyArticle);