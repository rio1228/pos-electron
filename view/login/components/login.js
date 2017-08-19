/**
 * Created by Ryo Mikami on 2017/08/18.
 */
'use strict';
import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom'

const colors = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Black',
    'White',
];

const menuProps = {
    desktop: true,
    disableAutoFocus: true,
};

const styles = {
    button: {
        margin: 12,
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
};

const AutoCompletefield = (e) => (
    <div>
        <AutoComplete
            hintText={e.value}
            dataSource={colors}
            menuProps={menuProps}
        />
    </div>

);
class login extends Component {
    constructor(props) {
        super(props)
    }
    // changeId (e) {
    //     this.setState({id: e.target.id})
    // }
    // changePass (e) {
    //     this.setState({pass: e.target.pass})
    // }
    loginClick (e) {
        let id = this.refs.id.value
        let pass = this.refs.pass.value
        const {ipcRenderer} = require('electron');
        // 非同期通信の結果を受けたときのコールバック
            ipcRenderer.on('login-reply', (event, arg) => {
                alert(arg)
            });
        // メインプロセスに引数を送信
            ipcRenderer.send('async-login', { id: id, password: pass });
    }
    // loginSubmit (e) {
    //     let id = this.ref.text.value
    //     let pass = this.ref.password.value
    //     console.log(id,pass)
    //     const {ipcRenderer} = require('electron');
    //     // // 非同期通信の結果を受けたときのコールバック
    //     ipcRenderer.on('login-reply', (event, arg) => {
    //         console.log('login-replay')
    //     });
    //     // メインプロセスに引数を送信
    //     ipcRenderer.send('async-login', { id:id,password:pass });
    // }

    render() {
        const { addId,addPass } = this.props;
        // const loginSubmit = e => this.loginSubmit(e)
        const loginClick = e => this.loginClick(e)
        return (
            <div>
                {/*<MuiThemeProvider>*/}
                    {/*<AutoCompletefield*/}
                        {/*value='ログインID'/>*/}
                {/*</MuiThemeProvider>*/}
                    <input type='text' ref="id" placeholder='ログインID'/>
                    <input type='password' ref="pass" placeholder='パスワード'/>
                    <button onClick={loginClick}>ログイン</button>
            </div>
        )
    }
}


export default login;
