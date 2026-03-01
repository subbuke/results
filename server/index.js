require('dotenv').config(); // ✅ Move to the very top, before anything else

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./Model")

app.use(express.json());
app.use(cors());

// ✅ Use process.env.MONGO_URI instead of just MONGO_URI
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch(err => console.log(err));

 app.post("/create", (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));
 })

app.get("/", (req, res) => {
  res.send("Server is running");
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});