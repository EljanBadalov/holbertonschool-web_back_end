const http = require('http');
const countStudents = require('./3-read_file_async.js');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];

    countStudents(databasePath)
      .then((studentsInfo) => {
        res.end(`This is the list of our students\n${studentsInfo}`);
      })
      .catch((err) => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  }
});

app.listen(1245);

export default app;
