const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.send('This is the list of our students\n');

  const databasePath = process.argv[2];

    countStudents(databasePath)
      .then((studentsInfo) => {
        res.end(studentsInfo);
      })
      .catch((err) => {
        res.end(err.message);
      });
});

app.listen(1245);

module.exports = app;
