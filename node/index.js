//Node JS - A new beginning

const os = require("node:os");

console.log(os.release()); // 6.1.7601

console.log(os.platform()); // win32

console.log(os.arch()); // x64

const fs = require("fs");
//sync should be avoided at all cost
//console.log(fs.readdirSync("./"));
files = fs.readdir("./", function (err, result) {
  if (result) console.log(result);
});
console.log(files);

fs.writeFile("test.txt", "Hello World", (err) => {
  if (err) throw err;
  console.log("File created");
});

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.write(JSON.stringify(["Ali", "Ahmad", "Azi", "Ahem"]));
    res.end();
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello World</h1>");
  res.end();
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
