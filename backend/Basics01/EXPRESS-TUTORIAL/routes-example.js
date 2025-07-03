// Import the Express module
const express = require("express");

// Create an Express application
const app = express();

// ==========================
// Root Route - Home Page
// ==========================
app.get("/", (req, res) => {
  // Responds with a plain text message when user visits root URL
  res.send("Welcome to our home page");
});

// ==========================
// Route to Get All Products
// ==========================
app.get("/products", (req, res) => {
  // Hardcoded array of product objects
  const products = [
    { id: 1, label: "Product 1" },
    { id: 2, label: "Product 2" },
    { id: 3, label: "Product 3" },
  ];

  // Send the products array as a JSON response
  res.json(products);
});

// ========================================
// Route to Get a Single Product by ID
// ========================================
app.get("/products/:productId", (req, res) => {
  // Log the route parameters (e.g., { productId: '2' })
  console.log("req.params", req.params);

  // Extract productId from the request parameters and convert it to an integer
  const productId = parseInt(req.params.productId);

  // Hardcoded array of product objects (same as above)
  const products = [
    { id: 1, label: "Product 1" },
    { id: 2, label: "Product 2" },
    { id: 3, label: "Product 3" },
  ];

  // Use Array.find to get the product with the matching ID
  const getSingleProduct = products.find((product) => product.id === productId);

  // If product is found, send it as JSON
  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    // If not found, send a 404 Not Found response with a message
    res.status(404).send("product is not found! please try with different id");
  }
});

// ==========================
// Start the Express Server
// ==========================
const port = 3000; // Define the port number to listen on

// Start listening on the specified port and log a message
app.listen(port, () => {
  console.log(`Server is now running at port ${port}`);
});
