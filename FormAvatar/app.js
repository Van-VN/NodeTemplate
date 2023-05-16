const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const qs = require("qs");

let userInput = "";

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    fs.readFile("./FormAvatar/register.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "POST") {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log(err.message);
      } else {
        let userInfo = {
          name: fields.name,
          email: fields.email,
          password: fields.password,
        };
        let newPath = files.avatar.originalFilename;
        console.log(newPath);
        console.log(userInfo);
        res.write(newPath);
        res.end();
      }
    });
  }
});

server.listen(1237, () => console.log(`server started!`));
