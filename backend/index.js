const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbConnect = require('./util/dbConnect');



const app = express();

// MongoDB connection
(async function run() {
	try {
	  await dbConnect();
	  console.log("Connected to the database");
	} catch (err) {
	  console.error("Database connection error:", err);
	}
  })();

// CORS settings to allow frontend access
const corsOptions = {
	origin: "http://localhost:3000", // React frontend
	methods: ["POST", "GET", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type"],
	credentials: true, // Allows cookies/sessions
  };

// Use the CORS middleware
app.use(cors(corsOptions));

// Parse JSON requires
app.use(bodyParser.json());

// Default route
app.get('/', (req, res) => {
	res.send('Server is running');
});

// Start server
const port = 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});