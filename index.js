import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { render } from "ejs";

// Initialize app
const app = express();
const port = 3000;

// Define middlewares
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));

// Set the view engine for EJS
app.set('views', './views');
app.set('view engine', 'ejs');

// Define routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Run app
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
