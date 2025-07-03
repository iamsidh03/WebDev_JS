// Import the built-in 'http' module to create an HTTP server
const http = require("http");

// Create the server using http.createServer()
// The callback function gets called every time a request hits the server
const server = http.createServer((req, res) => {
  // Extract the requested URL path (e.g., "/", "/projects", etc.)
  const url = req.url;

  // Handle requests based on the URL
  if (url === "/") { //base page
    // If the request is to the root URL ("/"), respond with "Home page"
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response status and headers
    res.end("Home page"); // Send response and end it
  } else if (url === "/projects") {
    // If the request is to "/projects", respond with "Projects"
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Projects");
  } else {
    // For any other URL, send a 404 Not Found response
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This page can not be found!");
  }
});

// Define the port the server will listen on
const port = 3000;

// Start the server and listen for incoming requests on the defined port
server.listen(port, () => {
  // This callback runs once the server is successfully running
  console.log(`Server is now listening to port ${port}`);
});
