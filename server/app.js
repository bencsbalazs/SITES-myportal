const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const url = 'mongodb://localhost/test'

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
          status: 'success',
          data: user
        })
      } else {
        return res.status(200).json({
          status: 'fail',
          message: 'Login Failed'
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
  const id = req.params.id;
  mongoose.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    db.collection('posts').find().toArray((error, result) => {
      if (error) throw error
      res.send(result).end()
    });
    db.close();
  })
})

app.listen(3000, () => console.log('blog server running on port 3000!'))
