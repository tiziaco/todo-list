
export class List {

	constructor(name) {
		this.name = this._setName(name);
		this.items = [];
	}
	addItem(toDo) {
		this.items.push(toDo);
	}
	getItems() {
		return this.items;
	}
	getName() {
		return this.name;
	}
	_setName(name) {
		return name[0].toUpperCase() + name.slice(1);
		}
}


// TEST object

// Initialize default lists: Personal and Work
const personal = new List("personal");
const work = new List("work")
const lists = {"personal" : personal, "work": work}

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
console.log(Object.keys(lists));