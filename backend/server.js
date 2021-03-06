const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const spaceRoute = require("./routes/spaceRouter");

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("mongo db connected successfully");
    else
      console.log("Error while connecting" + JSON.stringify(err, undefined, 2));
  }
);

app.use("/users", require("./routes/userRouter"));
app.use("/spaces", spaceRoute);
app.use("/book", require("./routes/bookingRouter"));
