/*----- app's state (variables) -----*/
let game

/*----- cached element references -----*/
const boardEl = document.getElementById('board')
const msgEl = document.getElementById('message')
const button = document.querySelector('button')

/*----- classes -----*/

class Square {
	constructor(domElement) {
		this.domElement = domElement
		this.value = null
	}

	static renderLookup = {
		1: 'purple',
		'-1': 'orange',
		null: 'pink',
	}

    render() {
        this.domElement.style.backgroundColor = Square.renderLookup[this.value]
    }
}

class TicTacToeGame {
	// all the methods and properties will live happily here
	constructor(boardElement, messageElement) {
		// this adds the boardElement property to each instance of the objects we are creating
		this.boardElement = boardElement
		this.messageElement = messageElement
		// you don't need to pass in all of the properties we can just assign some
		this.squareEls = [...boardElement.querySelectorAll('div')]
	}

	play() {
		//init the game state
		this.turn = 1
		this.winner = null
        // .map - return me a new array the same length as the one it's called on
        // this.squareEls - array of divs which is the game board
        // cb function - making a new object that hold the div element
        // this.squares - saving those new Square instances 
		this.squares = this.squareEls.map((el) => new Square(el))
		// set our game state we render
		this.render()
	}

	render() {
		console.log('Rendering game...')
	}

	toString() {
		return `Tic-Tac-Toe Game / winner -> ${this.winner}`
	}

	static about() {
		console.log("I'm a TTTGame class!")
	}

    // because winning combos will not change we can have this as a static property
	static winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]
}

/*----- functions -----*/
initialize()

function initialize() {
    // make sure to invoke your class
    // `game` is an instance of th TTTGame class
    game = new TicTacToeGame(boardEl, msgEl)
    game.play()
}

button.addEventListener('click', initialize)
