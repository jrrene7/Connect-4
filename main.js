jQuery(function() {
	console.log('jQuery is up and running');
var connectFour = {
	column: 7,
	row: 6,
	slots: [],
  whosTurnIsIt: true,
  movesMadeByRed: [],
  movesMadeByBlue: [],
  $board: $('<div class="board"></div>'),


makeBoard: function(){
	 let $board = $('.board');
	 	connectFour.slots = [];
	  for(var column = 0; column < connectFour.column; column++){
	     	var $column = $('<div class="column"></div>').appendTo('.board');
	      for(var row = 0; row < connectFour.row; row++){
	        var $slot = $('<div class="slot"></div>')
	        									.attr("id", column.toString() + row.toString())
														.appendTo($column)
	        									//add event listener as the slots are created which will switch whos turn it is.
	        									.click(function(event){
	        											if (connectFour.whosTurnIsIt === true) {
	        												$(event.target).css('background-color','red');
	        												connectFour.whosTurnIsIt = "blue";
	        												connectFour.movesMadeByRed.push(event.target.id)
	        												console.log(connectFour.movesMadeByRed);

	        											} else {
        													$(event.target).css('background-color','blue');
	        												connectFour.whosTurnIsIt = true;
	        												connectFour.movesMadeByBlue.push(event.target.id)
	        												console.log(connectFour.movesMadeByBlue);

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
		}
	}
},

whoWon: function(){
	$selected = $('click')


}


// playerOne: function() {
// 	let $slot = $('<div class="slot"><div>');
// 	let board = $('.board');
// 	//board.on('click', $slot, function(event){
// 	//	$(event.target).css('background-color','red');
// 	//})
	
// },
// playerTwo: function() {
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

// isItTied: function(){



// }

}

connectFour.makeBoard();
connectFour.makeSlots();
// connectFour.playerTurn();
}); //JQUERY ENDS!











