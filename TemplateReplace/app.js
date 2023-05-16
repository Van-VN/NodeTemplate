const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./TemplateReplace/index.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      data = data.replace("{username}", "Admin!");
      res.write(data);
      res.end();
    }
  });
});

server.listen(8978, () => {
  console.log(`Server started!`);
});
