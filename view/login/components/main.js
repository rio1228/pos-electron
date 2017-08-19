/**
 * Created by Ryo Mikami on 2017/08/17.
 */
"use strict";
import React, {Component} from 'react';
import Menu from './menu'
import Login from './login'

const styles = {
    wrapper: {
      backgroundColor:'#85737a',
        width: 500
    },
    button: {
        width: 100,
        height: '30px',
        padding: '10px',
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'10px auto',
    },
    text: {
        fontSize:100,
        color:'#ff1cba',
        textAlign: 'center'
    },
    buttonText:{
        color:'#434bff'
    }
};


class main extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }
    // mysqlと接続するためのfunction
    mysql () {
        const {ipcRenderer} = require('electron');
        // // 非同期通信の結果を受けたときのコールバック
        ipcRenderer.on('async-reply', (event, arg) => {
            for (let i = 0; i<arg.length; i++) {
                console.log(arg[i]['k_no'])
                console.log(arg[i]['k_name'])
                console.log(arg[i]['k_ado'])
                console.log(arg[i]['k_sei'])
                console.log(arg[i]['k_nen'])
                console.log(arg[i]['k_id'])
                console.log(arg[i]['k_pass'])
            }
        });
        // メインプロセスに引数を送信
        ipcRenderer.send('async', { value:200 });
    }

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <Menu/>
                    <Login/>
                </div>
            </div>
        )
    }
}


export default main;