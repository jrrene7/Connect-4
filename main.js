jQuery(function() {
	console.log('jQuery is up and running');
var connectFour = {
	column: 7,
	row: 6,
	slots: [],
  playerOne:  true,
  movesMade: 0,
  $board: $('<div class="board"></div>'),


makeBoard: function(){
 let $board = $('.board');
 	connectFour.slots = [];
  for(var column = 0; column < connectFour.column; column++){
     var $column = $('<div class="column"></div>').appendTo('.board');
        for(var row = 0; row < connectFour.row; row++){
          var $slot = $('<div class="slot"></div>').width(25).appendTo($column);
          	var slot = connectFour.makeSlots(row, column, $slot);
      		    connectFour.slots.push(slot);

  }}},

makeSlots: function(row, column, value){
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


// whoWon: function(){


// }

// isItTied: function(){



// }

// clearBoard: function(){

// }

}

connectFour.makeBoard();
connectFour.makeSlots();
// connectFour.playerTurn();

}); //JQUERY ENDS!











