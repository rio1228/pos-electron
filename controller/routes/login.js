const express = require('express');
// const app = express()
const router = express.Router();
// app.set('view engine', 'html');

router.get('/', function(req, res, next) {
    console.log('login.js')//ここまできてる
    console.log(__dirname)
    console.log(__filename)
    res.render('../../login.html')
    console.log('done')
});

router.post('/', function(req, res, next) {
    if (req.body.userName) {
        console.log('login.js true')
        req.session.user = { name: req.body.userName };
        res.redirect('../');
    } else {
        console.log('login.js false')
        const err = 'data is wrong';
        res.render('login', { error: err });
    }
});

module.exports = router;