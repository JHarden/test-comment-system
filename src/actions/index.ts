import * as constants from '../constants';

export interface Login {
    type: constants.LOGIN,
    userName: string
}

export type LoginAction = Login;

export function login(value: string): Login {
    return {
        type: constants.LOGIN,
        userName: value
    }
}