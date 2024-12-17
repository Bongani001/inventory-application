const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/indexRouter");
const categoriesRouter = require("./routes/categoriesRouter");
const productsRouter = require("./routes/productsRouter");

app.use("/", indexRouter);
app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
