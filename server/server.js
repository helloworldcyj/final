const express = require('express');
const monggose = require('mongoose');

// 链接mongo 并且使用final这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/final';
monggose.connect(DB_URL, { useNewUrlParser: true });
const db = monggose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on("connected", () => {
    console.log("mongodb数据库连接成功")
});
// 类似于mysql的表 mongo里有文档、字段的概念
// mongoose文档类型
// string,number等类型
// create,remove,update分别用来增删改的操作
// Find, findOne用来查数据
const User = monggose.model('user', new monggose.Schema({
    user: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
}));

// 增 
// User.create({
//     user: 'BigPotato',
//     age: 23
// }, (err, doc) => {
//     if(!err) {
//         console.log(doc);
//     }else {
//         console.log(err);
//     }
// });
// 删
// User.remove({age: 18}, (err, doc) => {
//     if(!err) {
//         console.log(doc)
//     }else {
//         console.log(err)
//     }
// })
// 改
// User.update({'user': 'BigPotato'}, {'$set': {
//     age: 23
// }}, (err, doc) => {
//     if(!err) {
//         console.log(doc);
//     }else {
//         console.log(err);
//     }
// })
// 查 当传入的是一个空对象的时候 查询的是全部的数据
// User.find({}, (err, doc) => {
    
// })

const app = new express();


app.get('/', (req, res) => {
    res.send('<h1>hello world!!!</h1>');
});

app.get('/data', (req, res) => {
    User.find({}, (err, doc) => {
        if(!err) {
            res.json(doc);
        }else {
            res.send(err)
        }
    })
});

app.listen(3000, () => {
    console.log('app start at port 3000');
});