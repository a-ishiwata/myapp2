var express = require('express');
var router = express.Router();
require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
  // データベース、コレクションを設定
  const database = client.db('notes');
  const notes = database.collection('notes');
  
  // idが1のドキュメントを取得
  const query = { name: "Koh" };
  const note = await notes.findOne(query);
  
  res.json(note);
  })  

module.exports = router;
