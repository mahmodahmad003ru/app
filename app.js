const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status code 200 and Content-Type text/plain
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Write the response body
  res.end("Hello, World!\n");
});

// Define the port to listen on
const port = 3000;

// Start listening on the defined port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
