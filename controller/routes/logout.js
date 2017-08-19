/**
 * Created by ohs60275 on 2017/08/18.
 */
"use strict";
const express = require('express');
// const app = express()
const router = express.Router();
// app.set('view engine', 'html');

router.get('/', function(req, res, next) {
    console.log('logout.js')//ここまできてる
    console.log(__dirname)
    console.log(__filename)
    res.render('../../view/entry/logout/')
    console.log('done')
});

module.exports = router;