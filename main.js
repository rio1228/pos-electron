/**
 * Created by Ryo Mikami on 2017/08/10.
 */
const electron = require('electron')
const express = require("express")
const app = express()
const logger = require('morgan')//コマンドプロンプトでlogが見れるようにするためのもの
app.use(logger('dev'))

//プロセス間通信をするためのもの
const {ipcMain} = require('electron')

// セッション
const session = require('express-session')

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

// htmlをレンダリングするためのもの
var engine = require('consolidate');
app.set('views', __dirname + '/view/entry/');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

const portNo = 3000
const ip_address = '127.0.0.1'

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

//path
const routes = require( __dirname + '/controller/routes/index')
const login = require( __dirname + '/controller/routes/login')
const logout = require( __dirname + '/controller/routes/logout')

app.listen(portNo, ip_address)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 60 * 1000
    }
}))

//開発中のディレクトリ構造
//開発中はこれをコメントから外す
//これの役割は静的ファイルの置き場所がどこか指定してあげるもの
app.use(express.static(__dirname + '/'))

const loginCheck = function(req, res, next) {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/login')
    }
}

app.use('/login', login)  // 追加
app.use('/logout', login)  // 追加
app.use('/', loginCheck, routes)  // sessionCheckを前処理に追加

// ビルド後のディレクトリ構造
// 開発中はコメントアウトする
// app.use(express.static("./resources/app/"))
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
// Electronのライフサイクルを定義

let mainWindow //メインウィンドウを表す変数

// ウィンドウを作成してコンテンツを読み込む
function createWindow () {

    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600})

    // and load the login.html of the app.
    mainWindow.loadURL(`http://${ip_address}:${portNo}/`)

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', electron.app.quit)
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron.app.on('ready', createWindow)

// Quit when all windows are closed.
electron.app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron.app.quit()
    }
})

electron.app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

// 非同期プロセス通信
//レンダラプロセスから呼び出される
ipcMain.on('async',( event, args ) =>{
    // console.log( args )
    // データベースの設定情報
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        port : 3306,
        database: 'taiken'
    })
    connection.connect()
    connection.query('SELECT * from kyak LIMIT 10', (err, rows, fields) => {
        if (err) throw err

        // レンダラプロセスへ送る
        event.sender.send('async-reply', rows)
    })
})