/**
 * Created by Ryo Mikami on 2017/08/17.
 */
"use strict";
import React, {Component} from 'react';


class menu extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    render() {
        return (
            <nav className="nav-group" style={{backgroundColor: '#f5f5f4'}}>
                <h4 className="nav-group-title">
                    <span className="icon icon-home"/>
                    分析
                </h4>
                <a className="nav-group-item active">
                    <span className="icon icon-home"/>
                    売上分析
                </a>
                <span className="nav-group-item">
                            <span className="icon icon-download"/>
                            販売分析
                        </span>
                <h4 className="nav-group-title">管理</h4>
                <span className="nav-group-item">
                            <span className="icon icon-folder"/>
                            発注管理
                        </span>
                <span className="nav-group-item">
                            <span className="icon icon-signal"/>
                            在庫管理
                        </span>
                <span className="nav-group-item">
                            <span className="icon icon-print"/>
                            日報
                        </span>
                <span className="nav-group-item">
                            <span className="icon icon-cloud"/>
                            売上
                        </span>
            </nav>
        )
    }
}


export default menu;
