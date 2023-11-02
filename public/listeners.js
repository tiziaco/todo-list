console.log("  OK  ")
import { lists } from './index.js';

$( ".delete-list" ).on( "click", function() {
	var listId = $(this).attr('listId');
	alert(`Delete button clicked: ${listId}`);
	delete lists[listId];
	console.log("-- List removed --")
	$(`#${listId}`).remove();
});