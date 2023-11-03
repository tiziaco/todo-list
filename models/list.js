class Item {

	constructor(id, start, end, toDo) {
		this.id = id
		this.start = start;
		this.end = end;
		this.toDo = toDo;
		this.completed = false;
	}
	isCompleted() {
		return this.completed;
	}
	setCompleted() {
		this.completed = true;
	}
	getId() {
		return this.id;
	}
}

class List {

	constructor(name) {
		this.name = List.setName(name);
		this.items = {};
		this.nextId = 0;
	}
	addItem(toDo) {
		var id = this.getNextId();
		var newItem = new Item(id, toDo.start, toDo.end, toDo.toDo);
		this.items[newItem.getId()] = newItem;
	}
	deleteItem(id) {
		delete this.items[id];
	}
	getItems() {
		return this.items;
	}
	getName() {
		return this.name;
	}
	static setName(name) {
		return name[0].toUpperCase() + name.slice(1);
	}
	getNextId() {
		return this.nextId++;
	  }
}

// Initialize default lists: Personal and Work
const personal = new List("personal");
const work = new List("work")
export const lists = {"Personal" : personal, "Work": work}

// Populate lists
personal.addItem({
	start : '23-12-2023',
	end : '',
	toDo: "Grocery shopping"
});
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
// console.log(Object.keys(lists));
// console.log(lists["personal"]);

// Test Delete item OK
/* lists.personal.deleteItem(1);
personal.addItem({
	start : '23-12-2023',
	end : '',
	toDo: "Grocery shopping"
});
console.log(lists["personal"]); */
/* var items = lists["personal"].getItems()
for (let itemId in items) {
	var item = items[itemId]
	console.log(item.toDo)
	//console.log(item.toDo);
	console.log(" ---- ")
}
console.log(lists["personal"].getItems())
console.log(lists["personal"]) */