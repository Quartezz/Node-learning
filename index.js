const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  serveFile(filePath, res);
});

app.get("/contact-me", (req, res) => {
  const filePath = path.join(__dirname, "contact-me.html");
  serveFile(filePath, res);
});

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "about.html");
  serveFile(filePath, res);
});

// Handling other routes
app.get("*", (req, res) => {
  const filePath = path.join(__dirname, "404.html");
  serveFile(filePath, res, 404);
});

function serveFile(filePath, res, statusCode = 200) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(404).send("404 Not Found");
    } else {
      res.status(statusCode).type("text/html").send(data);
    }
  });
}

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
