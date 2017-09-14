jQuery(function() {
	console.log('jQuery is up and running');
var connectFour = {
	column: 7,
	row: 6,
	slots: [],
  whosTurnIsIt: "red",
  movesMade: 0,
  $board: $('<div class="board"></div>'),


makeBoard: function(){
	 let $board = $('.board');
	 	connectFour.slots = [];
	  for(var column = 0; column < connectFour.column; column++){
	     	var $column = $('<div class="column"></div>').appendTo('.board');
	      for(var row = 0; row < connectFour.row; row++){
	        var $slot = $('<div class="slot"></div>')
	        									.appendTo($column)
	        									.click(function(event){
	        											if (connectFour.whosTurnIsIt === "red") {
	        												$(event.target).css('background-color','red');
	        												connectFour.whosTurnIsIt = "blue";
	        											} else {
        													$(event.target).css('background-color','blue');
	        												connectFour.whosTurnIsIt = "red";
	        											}

														 });
	      	
	      	var slot = connectFour.makeSlots(row, column, $slot);
			    connectFour.slots.push(slot);
				}
		}
	},

makeSlots: function(row, column, value){
	//in order to create a slot, you will need to get its position and what is there,
return {
	result: '',
	column: column,
	row: row,
	value: value,
	make: function(){
		connectFour.value.text(connectFour.value);
	}}},


// switchTurns: function(event) {
// 	let $makeSelection = $('event.target').on('click', connectFour.switchTurns); 


playerOne: function() {
	let $slot = $('<div class="slot"><div>');
	let board = $('.board');
	//board.on('click', $slot, function(event){
	//	$(event.target).css('background-color','red');
	//})
	
},

// function playerTwo() {
// 	let $slot = $('<div class="slot"><div>');
// 	let board = $('.board');
// 	board.on('click', $slot, function(event){
// 		$(event.target).css('background-color','blue');
// 	})
	
// },



// //The find() method returns the value of the first element in the array that satisfies the provided testing function. 
// //Otherwise undefined is returned. (MDN)
// //The toString() method returns a string representing the object. (MDN).
// // })
// },


// whoWon: function(){


// }

// isItTied: function(){



// }

// clearBoard: function(){

// }

}

connectFour.makeBoard();
connectFour.makeSlots();
connectFour.playerOne();
// connectFour.playerTurn();

}); //JQUERY ENDS!











