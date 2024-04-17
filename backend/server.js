require("./dbConnect");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
const clientProfileRoutes = require("./routes/clientProfileRoutes");
const trainingSessionRoutes = require("./routes/trainingSessionRoutes");

// middlewares
app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

// routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/exercise", exerciseRoutes);
app.use("/client-profile", clientProfileRoutes);
app.use("/training-session", trainingSessionRoutes);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
 console.log(`Server is running on port 
${PORT}.`);
});