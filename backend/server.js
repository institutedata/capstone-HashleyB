require("./dbConnect");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

// middlewares
app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

// routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
 console.log(`Server is running on port 
${PORT}.`);
});