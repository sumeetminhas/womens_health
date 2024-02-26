const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const util = require('util');

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extende: false }))

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'womens_health'
})

const query = util.promisify(db.query).bind(db);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.get('/fetchBlogs', async (req, res) => {
  try {
    const blogQuery = await query(`SELECT * from posts`)
    console.log("posts", blogQuery)
    return res.json(blogQuery)
  } catch (err) {
    console.error("error", err)
    if (err) return res.json(err)
  }
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})