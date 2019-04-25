import Login from '../components/Login';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({userName}: StoreState) {
    return {
        userName
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.Login>) {
    return {
        onLogin: (value: string)=> dispatch(actions.login(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);