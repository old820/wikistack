const morgan = require('morgan');
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const parser = require('body-parser');
const layout = require('./views/layout');
const addPage = require('./views/addPage');
const editPage = require('./views/editPage');
const index = require('./views/index');
const main = require('./views/main');
const userList = require('./views/userList');
const userPages = require('./views/userPages');
const wikipage = require('./views/wikipage');
const { db } = require('./models');
const wiki = require('./routes/wiki');
const user = require('./routes/user');

app.use('/wiki', wiki);
app.use('/user', user);



db.authenticate().
then(() => {
  console.log('connected to the database');
})




app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

const port = 3663;

app.get('/', (req, res) => {
  res.send(layout(''));
})

const models = require('./models');
// console.log(models);
const dbSync = async() => {
  // await models.User.sync();
  // await models.Page.sync();
  models.db.sync({force: true})
  app.listen(port, () => {
  console.log(`app listening in ${port}`);
  })
}

dbSync();
