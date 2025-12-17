const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const equipmentRoutes = require("./routes/equipmentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://danithad03_db_user:eJVnj26STpnZ04B0@cluster0.iqzgus3.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/equipment", equipmentRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
