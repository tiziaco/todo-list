import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

// Import lists from data model
import {lists} from "./models/list.js"

// Initialize app
const app = express();
const port = 3000;

// Define middlewares
app.use(express.static("./public"));
app.use('/models', express.static('./models'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));

// Set the templating engine for EJS
app.set('views', './views');
app.set('view engine', 'ejs');

// Define routes
app.get("/", (req, res) => {
	res.render("today.ejs", {
		activeItem: 'today', // For the sidebar buttons
		listNames: Object.keys(lists)
	});
});

app.get("/upcoming", (req, res) => {
	res.render("upcoming.ejs", {
		activeItem: 'upcoming',
		listNames: Object.keys(lists)
	});
});

app.get("/showlist", (req, res) => {
	res.render("main.ejs", {
		activeItem: req.query.listId,
		listNames: Object.keys(lists),
		list: lists[req.query.listId]
	});
});

app.post("/additem", (req, res) => {
	var listId = req.body["listId"]
  	var item = req.body["newItem"];
	lists[listId].addItem({
		start: '',
		end: '',
		toDo: item});
	var date = new Date();
	res.redirect(`/showlist?listId=${listId}`);
});

app.post("/deleteitem", (req, res) => {
	var listId = req.body["listId"];
	var itemId = req.body["itemId"];

	lists[listId].deleteItem(itemId);
	
	res.redirect(`/showlist?listId=${listId}`);
});

/* app.post("/deletelist", (req, res) => {
	var listId = req.body["listId"];

	delete lists[listId];
	
	res.redirect(`/`);
}); */

// Run app
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});