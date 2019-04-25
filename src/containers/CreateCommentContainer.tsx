import CreateComment from '../components/CreateComment';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface OwnProps {
    author: string;
    articleId: number;
}

export function mapStateToProps( {userName}: StoreState) {
    return {
        userName
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AddComment>, ownProps: OwnProps) {
    return {
        onShowComment: (text: string, date: string)=> dispatch(actions.AddComment(
            ownProps.articleId, ownProps.author, text, date
        ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);