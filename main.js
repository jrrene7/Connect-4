jQuery(function() {
	console.log('jQuery is up and running');
var connectFour = {
	let slots: [],
 let playerOne:  true,
 let movesMade: 0,
let $board: $('<div class="board"></div>');,

board: function(){
  let $board = $('.board');
 	connectFour.slots = [];
  for(var row = 0; row < 6; r++){
     var $row = $('<div class="row"></div>').appendTo($board);
          for(var column = 0; column < 7; c++){
            var $tile = $('<div class="slot"></div>').appendTo($row);

  }}},

slots: function(row, column, value){
return {
	result: '',
	column: column,
	row: row,
	value: value,
	make: function(){
		connectFour.value.text(connectFour.value);
	}}},


playerTurn: function(event){
	//event listener
let $makeSelection = $('event.target').on('click', playerTurn);
let row = $makeSelection.attr('data-row');
let column = $makeSelection.attr('data-col');
let slot = connectFour.slots.find(function(){
	return slot.row.toString() === row 
	&& slot.column.toString() === column;
//The find() method returns the value of the first element in the array that satisfies the provided testing function. 
//Otherwise undefined is returned. (MDN)
//The toString() method returns a string representing the object. (MDN).
})},

whoWon: function(){


}

isItTied: function(){



}

clearBoard: function(){



}

}
}); //JQUERY ENDS!











