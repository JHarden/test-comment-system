import { StoreState } from "../types";
import { LoginAction } from "../actions";
import { LOGIN } from "../constants";

export function doLogin(state: StoreState, action: LoginAction) {
    switch(action.type) {
        case LOGIN:
            return { ...state, userName: action.userName };
        default:
        return { ...state}
    }
}