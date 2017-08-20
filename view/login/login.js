/**
 * Created by Ryo Mikami on 2017/08/18.
 */
'use strict';
import React, {Component} from 'react';
// import AutoComplete from 'material-ui/AutoComplete';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// }from 'react-router-dom'

class login extends Component {

    render() {
        return (
            <div className="login-form">
                <form action="./login" method="POST">
                    <p>ログイン</p>
                    <input type='text' name="id" placeholder='ログインID'/>
                    <input type='password' name="pass" placeholder='パスワード'/>
                    <input type="submit" value='ログイン'/>
                </form>
            </div>
        )
    }
}

export default login;
