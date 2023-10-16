const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  let filePath = "";

  if (url === "/" || url === "/index.html") {
    filePath = path.join(__dirname, "index.html");
  } else if (url === "/contact-me") {
    filePath = path.join(__dirname, "contact-me.html");
  } else if (url === "/about") {
    filePath = path.join(__dirname, "about.html");
  } else {
    filePath = path.join(__dirname, "404.html");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html " });
      res.end(data);
    }
  });
});

const port = 8080;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
