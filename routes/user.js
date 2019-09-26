const express = require('express');
const router = express.Router();

router.get('/', (req,res, next) => {
  res.send('user-get')
})

router.post('/', (req,res, next) => {
  res.send('user-post')
})

router.get('/add', (req,res, next) => {
  res.send('user-add')
})

module.exports = router;
