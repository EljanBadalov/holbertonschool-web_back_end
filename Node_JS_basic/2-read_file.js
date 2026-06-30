const fs = require('fs')

const countStudents = (path) => {
  const data = fs.readFileSync(path, "utf8");
  try {
    const fileContent = fs.readFileSync("./database.csv", "utf8");

    const lines = fileContent.split("\n").filter((line) => line.trim() !== "");

    const header = lines.shift();

    const students = lines.map((line) => {
      const [firstname, lastname, age, field] = line.split(",");
      return { firstname, lastname, age: parseInt(age, 10), field };
    });

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      if (fields[!student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstname);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(", ")}`,
      );
    }

    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Average age: ${averageAge.toFixed(1)}`);
  } catch {
    throw error("Cannot load the database");
  }
};
