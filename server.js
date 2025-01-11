const express = require("express");
const app = express();
const port = 3000;
const homeRouter = require("./routes/homeRouter");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", homeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
