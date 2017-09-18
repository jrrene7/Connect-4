var connectFourForTesting;

jQuery(function() {
	console.log('jQuery is up and running');
var connectFour = {
	column: 7,
	row: 6,
	slots: [],
  playerTurn: true,
  movesMadeByRed: [],
  movesMadeByYellow: [],
  $board: $('<div class="board"></div>'),


makeBoard: function(){
	 let $board = $('.board').css('background-color', 'blue');
	 	connectFour.slots = [];
	  for(var column = 0; column < connectFour.column; column++){
	     	var $column = $('<div class="column"></div>').css('background-color', 'blue')
	     	.appendTo('.board');
	      for(var row = 0; row < connectFour.row; row++){
	        var $slot = $('<div class="slot"></div>').css('background-color', 'white')
	        									.attr("id", column.toString() + row.toString())
														.appendTo($column)
	        									//add event listener as the slots are created which will switch whos turn it is.
	        									.click(function(event){
	        											if (connectFour.playerTurn === true) {
	        												$(event.target).css('background-color','red');
	        												connectFour.playerTurn = false;
	        												connectFour.movesMadeByRed.push(event.target.id)
	        												console.log(connectFour.movesMadeByRed);

	        											} else {
        													$(event.target).css('background-color','yellow');
	        												connectFour.playerTurn = true;
	        												connectFour.movesMadeByYellow.push(event.target.id)
	        												console.log(connectFour.movesMadeByYellow);

	        											}
	        											var thereWasAWin = connectFour.checkForWin(event.target);
	        											if (thereWasAWin){
	        												console.log('you win!');
	        											} else {
	        												console.log('no win');
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

// switchTurn: function(event){
//       // remove event listener
//       var $clicked = $(event.target).off('click', connectFour.makeBoard);
//       //get row from tile
//       var row = $clicked.attr('data-row');
//       var column = $clicked.attr('data-column');
//       // get tile
//       var slot = connectFour.slots.find(function(slot){
//         return slot.row.toString() === row && slot.column.toString() === column;
//       })

//       slot.value = connectFour.playerTurn;

//       slot.make();

//       // check for wins
//       connectFour.whoWon(row, column);
//       // switch turn
//       connectFour.playerTurn = connectFour.playerTurn === 'red' ? 'yellow' : 'red';
//       $('#playerTurn').text(connectFour.playerTurn);

//     },


isRedWin: function(){

	return true;
},
isYellowWin: function(){

	return true;
},


getSlotByRowAndColumn: function(row, column){
	var el = document.querySelector(`*[id="${column}${row}"]`);
	return el;
},

// should return the row of a slot element
getRow: function(element){
 var id = element.id;
 return Number(id.charAt(1));
},

// should return the column of a slot element
getColumn: function(element){
	var id = element.id;
	return Number(id.charAt(0));
},

getColor: function(element) {
	return $(element).css('background-color');
},

isSameColor: function(el1, el2) {
	return this.getColor(el1) === this.getColor(el2);
},

checkForWin(lastElementClicked){
	// BEGIN section worked on with tims
	var column = this.getColumn(lastElementClicked);
	var rightCount = 0;
	var debuggingArray = [];
	for(var potentialCol = column; potentialCol < (4 + column); potentialCol++){
		var potentialElement = this.getSlotByRowAndColumn(this.getRow(lastElementClicked), potentialCol);
		debuggingArray.push(potentialElement);
		if(this.isSameColor(lastElementClicked, potentialElement)) {
			rightCount++;
		} else {
			break;
		}
	}
	if (rightCount === 4) {
		return true;
	} else {
		console.log("rightCount:", rightCount);
		console.log('debuggingArray:', debuggingArray);
	}
	// END section worked on with Tims
},

// whoWon: function(row, column, slots){
// movements = [
//       { x: 0, y: 1  }, // vertical
//       { x: 1, y: 0  }, // horizontal
//       { x: 1, y: 1  }, // diagRight
//       { x: 1, y: -1 }  // diaglLeft
//     ];
// let x = movements.x;
// let y = movements.y;

//     if(connectFour.movesMadeByRed[i] === movements[0] * 3 || 
//     connectFour.movesMadeByRed[i] === movements[1] * 3 || 
//     connectFour.movesMadeByRed[i] === movements[2] * 3 ||
//     connectFour.movesMadeByRed[i] === movements[3] * 3){
//     	console.log("Red Has Won!")

//      } else {

//     	if(connectFour.movesMadeByBlack[i] = movements[0] * 3 || 
//     connectFour.movesMadeByBlack[i] = movements[1] * 3 || 
//     connectFour.movesMadeByBlack[i] = movements[2] * 3 ||
//     connectFour.movesMadeByBlack[i] = movements[3] * 3);
// 			console.log("black Has Won");

//     }
// },

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
// 		$(event.target).css('background-color','black');
// 	})
	
// },
 

}

connectFourForTesting = connectFour;

connectFour.makeBoard();
connectFour.makeSlots();
connectFour.getSlotByRowAndColumn(3,3);
console.log('getRow test:', connectFour.getRow(connectFour.getSlotByRowAndColumn(3, 4)));
console.log(connectFour.getColumn(connectFour.getSlotByRowAndColumn(3, 4)));
}); //JQUERY ENDS!











