const http = require("http");
const fs = require("fs");
const qs = require("qs");
const converNumToText = require("./numToText.js");

let numInputToText = "";
let numResult = "";

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    fs.readFile("./NumToText/index.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.write(data);
        res.end;
      }
    });
  } else if (req.method === "POST") {
    fs.readFile("./NumToText/index.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        req.on("data", (chunk) => {
          numInputToText += chunk;
          numInputToText = qs.parse(numInputToText);
          numInputToText = parseInt(numInputToText.numInput);
          numResult = converNumToText(numInputToText);
        });

        req.on("end", () => {
          data = data.replace("{ReadResult}", numResult);
          res.write(data);
          numInputToText = "";
          numResult = "";
          res.end();
        });
      }
    });
  }
});

server.listen(8888, () => {
  console.log(`Server started!`);
});
