console.log("  OK  ")
import {lists} from "./models/list.js"

$( ".delete-list" ).on( "click", function() {
	var listId = $(this).attr('id');
	delete lists[listId];
	console.log(lists);
	$(`#${listId}`).remove();
});