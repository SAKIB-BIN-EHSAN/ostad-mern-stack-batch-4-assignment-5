const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.write("This is Home Page");
    res.end();
  } else if (req.url == "/about") {
    res.write("This is About Page");
    res.end();
  } else if (req.url == "/contact") {
    res.write("This is Contact Page");
    res.end();
  } else if (req.url == "/file-write") {
    fs.writeFile("demo.txt", "hello world", function (error) {
      if (error) {
        res.write("Something went wrong!");
        res.end();
      } else {
        res.write("File write done successfully.");
        res.end();
      }
    });
  }
});

server.listen(3000, function () {
  console.log("Server is running....");
});
