import Vote from '../components/Vote';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface OwnProps {
    articleId: number
}
export function mapStateToProps({userName}: StoreState) {
    return {
        userName
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.Vote>, ownProps: OwnProps) {

    return {
        onVote: (value: number)=> dispatch(actions.VoteOnArticle(value, ownProps.articleId))
    }
   
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote);