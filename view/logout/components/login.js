/**
 * Created by Ryo Mikami on 2017/08/18.
 */
"use strict";
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

const RaisedButtonComplex = () => (
    <div>
        <RaisedButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            label="Github Link"
            secondary={true}
            style={styles.button}
        />
    </div>

);



class login extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                 <RaisedButtonComplex/>
                </MuiThemeProvider>
            </div>
        )
    }
}


export default login;
