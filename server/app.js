require('dotenv').config();

const jwt = require('jsonwebtoken'),
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  app = express(),
  mongoose = require('mongoose'),
  url = process.env.DBCONNECT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Handle the login process
app.post('/api/user/login', (req, res) => {
  mongoose.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    db.collection('user').findOne({
      $and: [
        { "username": req.body.username },
        { "password": req.body.password }
      ]
    }, function (err, user) {
      if (err) throw err;
      if (user) {
        return res.status(200).json({
          status: 'success',
          data: jwt.sign({
            id: user._id
          },
            '71F66E5233A19139C26BDBC35FCFA20E80E01C0467CF27D0D970B5E1F13EBAF7675B3AE4F30214AAF995AA47C3A913BD22D957612D0D647DE34CDCE00A2EF0BC',
            { expiresIn: '1h' }
          ),
          expires: 3600
        })
      } else {
        return res.status(401).json({
          status: "fail",
          message: "Unotharised"
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
