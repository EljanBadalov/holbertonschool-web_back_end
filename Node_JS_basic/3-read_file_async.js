const fs = require('fs');

function countStudents(dataPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      
      if (lines.length <= 1) {
        const emptyMsg = 'Number of students: 0';
        console.log(emptyMsg);
        resolve(emptyMsg);
        return;
      }

      const headers = lines[0].split(',');
      const fieldIndex = headers.indexOf('field');
      const firstnameIndex = headers.indexOf('firstname');

      const fields = {};
      let totalStudents = 0;

      for (let i = 1; i < lines.length; i += 1) {
        const row = lines[i].split(',');
        if (row.length === headers.length) {
          totalStudents += 1;
          const field = row[fieldIndex].trim();
          const firstname = row[firstnameIndex].trim();

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }

      let output = `Number of students: ${totalStudents}`;
      console.log(output);

      for (const [field, names] of Object.entries(fields)) {
        const lineMsg = `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        console.log(lineMsg);
        output += `\n${lineMsg}`;
      }

      resolve(output);
    });
  });
}

module.exports = countStudents;
