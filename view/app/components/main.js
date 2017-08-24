/**
 * Created by Ryo Mikami on 2017/08/17.
 */
"use strict"
import React, {Component} from 'react'
import Menu from './menu'
import Content from './contents'
import {
    BrowserRouter as Router,
}from 'react-router-dom'
// import { browserHistory } from 'react-router'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    wrapper:{
        width: '100%'
    },
    menu: {
        backgroundColor: '#f5f5f4',
        width: '17%',
        height: '685px',
        float: 'left',
        borderTop: 'solid 1px #c7aeba',
        borderRight: 'solid 1px #c7aeba',
        textDecorationLine: 'none',
        '@media (min-width: 1000px)': {
            width: '10%'
        }
    },
    content: {
        borderTop: 'solid 1px #c7aeba',
        backgroundColor: '#a6c3ff',
        overflow: 'hidden',
        width: '83%',
        height: '685px','@media (min-width: 1000px)': {
            width: '90%'
        }
    },
    form: {
        margin: 'auto auto'
    }
})

class main extends Component {
      render() {
        return (
            localStorage.getItem("hoge") ?  <div className="window">
                <div classID="window-content">
                    <Router>
                        <div className={css(styles.wrapper)}>
                            <div className={css(styles.menu)}>
                                <Menu/>
                            </div>
                            <div className={css(styles.content)}>
                                <Content/>
                            </div>
                        </div>
                    </Router>
                </div>
            </div>　:　<div className={css(styles.form)}>
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


export default main
