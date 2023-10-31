import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import {List, Item} from "./list.js";

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
	console.log(listId, item)
	var date = new Date();
	res.redirect(`/showlist?listId=${listId}`);
});

app.get("/deleteitem", (req, res) => {
	var listId = req.body["listId"];
	var itemId = req.body["itemId"];
	// PROBLEMA: non mi legge i parametri
	console.log(listId, itemId);

	lists[listId].deleteItem(itemId);
	
	res.redirect(`/showlist?listId=${listId}`);
});

// Run app
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

// Initialize default lists: Personal and Work
const personal = new List("personal");
const work = new List("work");
const lists = {"Personal" : personal, "Work": work};

// Populate lists: TEST ONLY
personal.addItem({
	start: '23-12-2023',
	end: '',
	toDo: "Grocery shopping"});
personal.addItem({
	start: '22-12-2023',
	end: '',
	toDo: "Buy underwears"});
work.addItem({
	start: '20-10-2023',
	end: '',
	toDo: "Complete portfolio website"});
work.addItem({
	start: '24-12-2023',
	end: '29-12-2023',
	toDo: "Christmas vacation"});
// console.log(lists);