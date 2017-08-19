/**
 * Created by Ryo Mikami on 2017/08/17.
 */
"use strict";
import React, {Component} from 'react';
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

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <Login/>
                </div>
            </div>
        )
    }
}


export default main;
