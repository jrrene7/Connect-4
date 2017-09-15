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
	        												 var  number = parseInt(event.target.id.length);
	        												console.log(connectFour.movesMadeByRed);
	        												 console.log(number);

	        											} else {
        													$(event.target).css('background-color','blue');
	        												connectFour.whosTurnIsIt = true;
	        												connectFour.movesMadeByBlue.push(event.target.id)
	        												var number = parseInt(event.target.id.length);
	        												console.log(connectFour.movesMadeByBlue);
	        											  console.log(number);

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

isRedWin: function(){


	return true;
},
isBlueWin: function(){

	return true;
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
//     connectFour.movesMadeByRed[i] === movements[3] * 3);
//     	console.log("Red Has Won!");

//      else {

//     	if(connectFour.movesMadeByBlue[i] = movements[0] * 3 || 
//     connectFour.movesMadeByBlue[i] = movements[1] * 3 || 
//     connectFour.movesMadeByBlue[i] = movements[2] * 3 ||
//     connectFour.movesMadeByBlue[i] = movements[3] * 3);
// 			console.log("blue Has Won");

//     }


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
	// if(connectFour.movesMadeByBlue &&
	// 	 connectFour.movesMadeByRed === connectFour.slots.length){
 //        setTimeout(function(){
 //          alert('No one won! its a tie!');
 //          connectFour.makeBoard();
 //        }, 100)
 //      }
 //    },
 

}

connectFour.makeBoard();
connectFour.makeSlots();
// connectFour.playerTurn();
}); //JQUERY ENDS!











