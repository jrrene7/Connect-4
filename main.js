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
	        											var thereWasAWin = connectFour.checkForWinHorizontalGoingLeft(event.target) || 
	        											   								 connectFour.checkForWinHorizontalGoingRight(event.target) ||
	        												 								 connectFour.checkForWinVerticalGoingUp(event.target) ||
	        												 								 connectFour.checkForWinVerticalGoingDown(event.target);

	        											if (thereWasAWin){
	        												alert('you win!');
	        											} else {
	        												console.log('no win');
	        											}
	        											// var verticalWin = connectFour.checkForWinVertical(event.target);
	        											// if (verticalWin){
	        											// 	console.log('you win!');
	        											// } else {
	        											// 	console.log('no win');
	        											// }
														 });
	      	
	      	var slot = connectFour.makeSlots(row, column, $slot);
			    connectFour.slots.push(slot);
				}
		}

	},

makeSlots: function(row, column, value){
	//in order to create a slot, you will need to get its position and it's value,
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

getDiagonal: function(element){
	var id = element.id;
	return Number(id.charAt(0)) + Number(id.charAt(1));
},

getColor: function(element) {
	return $(element).css('background-color');
},

isSameColor: function(el1, el2) {
	return this.getColor(el1) === this.getColor(el2);
},

// checkForWinHorizontal(lastElementClicked){
// 	// BEGIN section worked on with tims
// 	var column = this.getColumn(lastElementClicked);
// 	var rightCount = 0;
// 	var debuggingArray = [];
// 	for(var potentialCol = column; potentialCol < (4 + column); potentialCol++){
// 		var potentialElement = this.getSlotByRowAndColumn(this.getRow(lastElementClicked), potentialCol);
// 		debuggingArray.push(potentialElement);
// 		if(this.isSameColor(lastElementClicked, potentialElement)) {
// 			rightCount++;
// 		} else {
// 			break;
// 		}
// 	}
// 	if (rightCount === 4) {
// 		return true;
// 	} else {
// 		console.log("rightCount:", rightCount);
// 		console.log('debuggingArray:', debuggingArray);
// 	}
// 	// END section worked on with Tims
// },

checkForWinHorizontalGoingLeft(lastElementClicked){
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
},

checkForWinHorizontalGoingRight(lastElementClicked){
	var column = this.getColumn(lastElementClicked);
	var rightCount = 0;
	var debuggingArray = [];
	for(var potentialCol = column; potentialCol < (4 + column); potentialCol--){
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
},

checkForWinVerticalGoingUp(lastElementClicked){
	var row = this.getRow(lastElementClicked);
	var rightCount = 0;
	var debuggingArray = [];
	for(var potentialRow = row; potentialRow < (4 + row); potentialRow++){
		var potentialElement = this.getSlotByRowAndColumn(potentialRow, this.getColumn(lastElementClicked));
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
},


checkForWinVerticalGoingDown(lastElementClicked){
	var row = this.getRow(lastElementClicked);
	var rightCount = 0;
	var debuggingArray = [];
	for(var potentialRow = row; potentialRow < (4 + row); potentialRow--){
		var potentialElement = this.getSlotByRowAndColumn(potentialRow, this.getColumn(lastElementClicked));
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
},


checkForWinDiagonal(lastElementClicked){
var diagonal = this.getDiagonal(lastElementClicked);
	var rightCount = 0;
	var debuggingArray = [];
	for(var potentialCol = diagonal; potentialCol < (4 + diagonal); potentialCol++){
		var potentialElement = this.getSlotByRowAndColumn(this.getDiagonal(lastElementClicked), potentialCol);
		debuggingArray.push(potentialElement);
		if(this.isSameColor(lastElementClicked, potentialElement)) {
			rightCount++;
		} else {
			break;
		}
	}
	if (rightCount === 4) {
		return true;
	} 				else {
										console.log("rightCount:", rightCount);
										console.log('debuggingArray:', debuggingArray);
						}
		},

},

connectFourForTesting = connectFour;

connectFour.makeBoard();
connectFour.makeSlots();
connectFour.getSlotByRowAndColumn(3,3);
console.log('getRow test:', connectFour.getRow(connectFour.getSlotByRowAndColumn(3, 4)));
console.log(connectFour.getColumn(connectFour.getSlotByRowAndColumn(3, 4)));
}); //JQUERY ENDS!











