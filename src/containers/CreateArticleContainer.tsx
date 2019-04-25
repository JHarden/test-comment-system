import CreateArticle from '../components/CreateArticle';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface OwnProps {
    author: string | undefined;
}

export function mapStateToProps({ userName }: StoreState) {
    return {
        userName
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AddArticle>, ownProps: OwnProps) {
    return {
        onCreateArticle: (title: string, body: string, date: string) => dispatch(actions.AddArticle(
            ownProps.author? ownProps.author : '', title, body, date
        ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);