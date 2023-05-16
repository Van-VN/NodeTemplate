const http = require("http");
const fs = require("fs");
const qs = require("qs");

let userInfo = "";
let userData = [];

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    fs.readFile("./NewUsers/register.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err.message);
        console.log(123);
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "POST") {
    req.on("data", (chunk) => {
      console.log(chunk);
      userInfo += chunk;
      userInfo = qs.parse(userInfo);
      userData.push(userInfo);
      userInfo = "";
      console.log(userInfo);
      console.log(userData);
    });

    req.on("end", () => {
      res.write("<h1>Done!</h1>");
      userData.forEach((item) => {
        res.write(JSON.stringify(item));
      });
      res.write("<button><a href='./NewUsers/register.html'>BACK</a></button>");
      res.end();
    });
  } else {
    console.log(`OUT!`);
    res.end();
  }
});

server.listen(1423, () => {
  console.log(`Server started!!`);
});
