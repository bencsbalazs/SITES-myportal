const jwt = require('jsonwebtoken'),
  fs = require("fs");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();
const app = express()
const mongoose = require('mongoose')
const url = process.env.DBCONNECT

const User = require('./model/user')
const Post = require('./model/post')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Handle the login process
app.post('/api/user/login', (req, res) => {
  mongoose.connect(url, function (err) {
    if (err) throw err;
    User.find({
      username: req.body.username, password: req.body.password
    }, function (err, user) {
      if (err) throw err;
      if (user.length === 1) {
        return res.status(200).json({
          data: jwt.sign({}, fs.readFileSync(__dirname+'/private.key'), {
            algorithm: 'RS256',
            expiresIn: 120,
            subject: req.body.username
          })
        })
      } else {
        return res.status(401).json({
          status: 'fail',
          message: 'Unotharised'
        })
      }
    })
  });
})

app.post('/api/blog/add', (req, res) => {
  mongoose.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    db.collection('posts').insertOne({
      title: req.body.title,
      content: req.body.content,
      date: req.body.date,
      tags: req.body.tags
    }, (error, response) => {
      if (error) res.send(error);
      res.send(response);
    })
    db.close();
  })
})

app.get('/api/blog/list', (req, res) => {
  mongoose.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    db.collection('posts').find().toArray((error, result) => {
      if (error) throw error
      res.send(result).end()
    });
    db.close();
  })
})

app.get('/api/blog/:id', (req, res) => {
  const id = req.params.id;
  mongoose.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    db.collection('posts').find({ "_id": mongoose.Types.ObjectId(id) }).toArray((error, result) => {
      if (error) throw error
      console.log(result)
      res.send(result).end()
    });
    db.close();
  })
})

app.listen(process.env.BACKENDPORT, () => console.log('blog server running on port' + process.env.BACKENDPORT + '!'))
