const fs = require("node:fs");

fs.writeFile("message.txt", "Hello I'm Flavius", "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("is working");
});
