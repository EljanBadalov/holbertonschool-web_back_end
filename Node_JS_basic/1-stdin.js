console.log("Welcome to Holberton School, what is your name?");

process.stdin.once("data", (data) => {
  const name = data.toString().trim();
  console.log("Your name is:", name);
  console.log("This important software is now closing");
  process.exit(0);
});
