const express = require("express");
const app = express();
const port = 3000;
const homeRouter = require("./routes/homeRouter");
const addRouter = require("./routes/addRouter");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", homeRouter);
app.use("/add", addRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
