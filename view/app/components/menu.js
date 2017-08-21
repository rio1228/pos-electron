/**
 * Created by Ryo Mikami on 2017/08/17.
 */
"use strict";
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link
}from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

const styles= StyleSheet.create({
  menu: {
      color: '#c7aeba'
  }
})

class menu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const logout = () => this.logout()
        return (
            <nav className="nav-group">
                <h4 className="nav-group-title">
                    <span className="icon icon-home"/>
                    分析
                </h4>
                <span className="nav-group-item">
                    <span className="icon icon-home"/>
                    <Link to='/analysis/sale'>
                        <span className={css(styles.menu)}>売上分析</span>
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-download"/>
                    <Link to='/analysis/purchase'>
                       <span className={css(styles.menu)}>販売分析</span>
                    </Link>
                </span>
                <h4 className="nav-group-title">管理</h4>
                <span className="nav-group-item">
                    <span className="icon icon-folder"/>
                    <Link to='/management/order'>
                        <span className={css(styles.menu)}>発注管理</span>
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-signal"/>
                    <Link to='/management/stock'>
                        <span className={css(styles.menu)}>在庫管理</span>
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-print"/>
                    <Link to='/management/daily-report'>
                        <span className={css(styles.menu)}>日報管理</span>
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-cloud"/>
                    <Link to='/management/sale'>
                        <span className={css(styles.menu)}>売上</span>
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-cloud"/>
                    <Link to='/'>
                         <span className={css(styles.menu)}>戻る</span>
                    </Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-cloud"/>
                    <Link to='/logout'>
                        <span className={css(styles.menu)}>ログアウト</span>
                    </Link>
                </span>
            </nav>
        )
    }
}


export default menu;
