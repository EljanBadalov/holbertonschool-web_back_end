import fs from 'fs';

const countStudents = (path) => {
  try {
    const fileContent = fs.readFileSync(path, 'utf8');

    const lines = fileContent
      .split('\n')
      .filter((line) => line.trim() !== '');

    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((student) => {
      const studentData = student.split(',');
      const firstname = studentData[0];
      const field = studentData[3];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    });

    Object.entries(fields).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

export default countStudents;
