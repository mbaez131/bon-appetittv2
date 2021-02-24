const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const axios = require("axios");
const { useEffect } = require("react");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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

// app.get("/", (req, res) => {
//   res.send("Hello from this server");
// });

app.post("/Contact", (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let subject = req.body.subject;
  db.query(
    "INSERT INTO users (first_name, last_name, email, subject_box) VALUES (?, ?, ?, ?)",
    [firstname, lastname, email, subject],
    (err, data) => {
      if (err) {
        throw err;
      }
      console.log("Got body:", req.body);
      console.log(data);
    }
  );
});

// useEffect(() => {
//   const article = {title: "post"};
//   axios.post()
// })

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
