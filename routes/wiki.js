const express = require('express');
const router = express.Router();
// const addPage = require('../views/addPage');
const parser = require('body-parser');
const { Page } = require("../models");
const { addPage } = require("../views");

router.use(parser.json())
router.use(parser.urlencoded({extended: true}))

// this route is for /wiki
router.get('/', (req,res, next) => {
  res.redirect('/');
})

router.post('/', async (req,res, next) => {
  const page = await Page.create({
    title: req.body.title ,
    content: req.body.content,
    slug: req.protocol + '://' + req.get('host') + req.originalUrl,
    status: 'open'
  });
  console.log('are you defined?', req.body);
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
})

router.get('/add', (req,res, next) => {
  res.send(addPage())
})

module.exports = router;
