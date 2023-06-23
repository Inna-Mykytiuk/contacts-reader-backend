const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://innka-pinnka:dAo9tMJtvZXqMhej@cluster0.72bwed3.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
