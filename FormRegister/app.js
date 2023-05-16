const http = require("http");
const fs = require("fs");
const qs = require("qs");

const server = http.createServer((req, res) => {
  let userInput = "";
  if (req.method === "GET") {
    fs.readFile("./FormRegister/register.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.write(data);
        // userInput = data;
        res.end();
      }
    });
  } else if (req.method === "POST") {
    req.on("data", (chunk) => {
      userInput += chunk;
      userInput = qs.parse(userInput);
      console.log(userInput);
    });

    req.on("end", () => {
      console.log(`end!`);
      res.end();
    });
  }
});

server.listen(9876, () => console.log(`Server started!`));
