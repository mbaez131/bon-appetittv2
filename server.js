const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const axios = require("axios");
const { useEffect } = require("react");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bonapp",
});

db.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log("Connection successful...");
  }
});

app.get("/", (req, res) => {
  res.send("Hello from this server");
});

// app.post("/Contact/:firstname", (req, res) => {
//   let firstname = req.params.firstname;
//   db.query(
//     "INSERT INTO users (first_name, last_name, email, subject_box) VALUES ()"
//   );
// });

// useEffect(() => {
//   const article = {title: "post"};
//   axios.post()
// })

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
