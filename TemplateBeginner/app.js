const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./TemplateBeginner/index.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(4321, () => console.log(`Server started!`));
