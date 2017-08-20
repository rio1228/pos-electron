/**
 * Created by Ryo Mikami on 2017/08/17.
 */
"use strict";
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    NavLink
}from 'react-router-dom'

class menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="nav-group">
                <h4 className="nav-group-title">
                    <span className="icon icon-home"/>
                    分析
                </h4>
                <span className="nav-group-item active">
                    <span className="icon icon-home"/>
                    <Link to='/analysis/sale'>売上分析</Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-download"/>
                    <Link to='/analysis/purchase'>販売分析</Link>
                </span>
                <h4 className="nav-group-title">管理</h4>
                <span className="nav-group-item">
                    <span className="icon icon-folder"/>
                    <Link to='/management/order'>発注管理</Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-signal"/>
                    <Link to='/management/stock'>在庫管理</Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-print"/>
                    <Link to='/management/daily-report'>日報</Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-cloud"/>
                    <Link to='/management/sale'>売上</Link>
                </span>
                <span className="nav-group-item">
                    <span className="icon icon-cloud"/>
                    <Link to='/'>戻る</Link>
                </span>
            </nav>
        )
    }
}


export default menu;
