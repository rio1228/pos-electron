/**
 * Created by Ryo Mikami on 2017/08/19.
 */
"use strict";
import * as types from '../actions/actionTypes';

/**
 * stateの初期設定。
 * これを設定するまではreducerではstateがundefinedになっているので、ここで初期設定をしてあげる必要がある
 * @type {{count: number}}
 */
const initialState = {
    id: '',
    pass: ''
};

export default function auth(state = initialState, action = {}) {

    switch (action.type) {
        case types.ADD_ID:{/*types.INCREMENTはINCREMENTという文字列が入っていた場合こちらの*/}
            return {
                ...state,
                id: state
            };
        case types.ADD_PASS:{/*types.INCREMENTはINCREMENTという文字列が入っていた場合こちらの*/}
            return {
                ...state,
                password: ''
            };
        default:
            return state;
    }

}

export default auth;
