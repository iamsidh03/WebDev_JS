// Import the built-in 'http' module to create an HTTP server
const http = require("http");

// Create the HTTP server
// The callback function is executed for every incoming request
const server = http.createServer((req, res) => {
  // Log the entire incoming request object to the console
  // This includes method, headers, URL, etc.
  console.log(req, "req");

  // Set the HTTP response status code to 200 (OK)
  // Set the Content-Type header to 'text/plain' to send plain text
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body and close the connection
  res.end("Hello node js from http module");
});

// Set the port the server should listen on
const port = 3000;

// Start the server and listen for incoming requests
server.listen(port, () => {
  // Log a message to confirm the server is running
  console.log(`Server is now listening to port ${port}`);
});
