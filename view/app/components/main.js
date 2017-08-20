/**
 * Created by Ryo Mikami on 2017/08/17.
 */
"use strict";
import React, {Component} from 'react';
import Menu from './menu'
import Content from './contents'
import {
    BrowserRouter as Router,
}from 'react-router-dom'
import { browserHistory } from 'react-router';

const styles = {
    wrapper: {
      backgroundColor:'#ff2e50'
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
      render() {
        return (
            <div className="window">
                <div className="window-content">
                    <Router>
                        <div>
                            <div className="menu">
                                <Menu/>
                            </div>
                            <div className="content">
                                <Content/>
                            </div>
                        </div>
                    </Router>
                </div>
            </div>

        )
    }
}


export default main;
