let user_record = 0;
let comp_record = 0;
let tie_record = 0;

$('.userSelect').on('click', (e) => {
	let id = e.target.id || e.target.parentElement.id;
	userChoice(id);
})

$('#reset').on('click', (e) => {
	gameReset();
})

$('#recReset').on('click', (e) => {
	recReset();
})

const userChoice = (el) => { 
	computerChoice(el);
}

const computerChoice = (user) => {
	let choices = ['rock', 'paper', 'scissors'];
	let computer;
	let index = Math.floor(Math.random() * 3);
	if (index === 0) {
		computer = choices[0]
	}	else if (index === 1) {
		computer = choices[1]
	} else if (index === 2) {
		computer = choices[2]
	}
	show(user, computer);
}
const user_output = () => {
	return document.getElementById('user_output');
}
const comp_output = () => {
	return document.getElementById('comp_output');
}

const show = (user,computer) => {
	comp_output().innerHTML = (computer);
	user_output().innerHTML = (user);
	game(user, computer)
}

const winner_output = () => {
	return document.getElementById('winner_output');
}

const game = (user, computer) => {
	if (user === computer) {
		winner_output().innerHTML = "It's a Tie!"
	} else if (user === 'rock') {
			if (computer === 'paper') {
			winner_output().innerHTML = "You Lost!"
			} else {
				winner_output().innerHTML = "You Won!"
			}
	} else if (user === 'paper') {
			if (computer === 'scissors') {
				winner_output().innerHTML = "You Lost!"
			} else {
				winner_output().innerHTML = "You Won!"
			}
	} else if (user === 'scissors') {
			if (computer === 'rock') {
				winner_output().innerHTML = "You Lost!"
			} else {
				winner_output().innerHTML = "You Won!"
			}
	}
	records(winner_output().innerHTML)
}

const tie_stat = () => {
	return document.getElementById('tie_stat');
}

const comp_stat = () => {
	return document.getElementById('comp_stat');
}

const user_stat = () => {
	return document.getElementById('user_stat');
}

const records = (outcome) => {
	if (outcome === "You Lost!") {
		comp_stat().innerHTML = (comp_record += 1);
	} else if (outcome === "You Won!") {
		user_stat().innerHTML = (user_record += 1);
	} else if (outcome === "It's a Tie!") {
		tie_stat().innerHTML = (tie_record += 1);
	}
}

const recReset = () => {
	user_stat().innerHTML = 0;
	comp_stat().innerHTML = 0;
	tie_stat().innerHTML = 0;
}

const gameReset = () => {
	user_output().innerHTML = '';
	comp_output().innerHTML = '';
	winner_output().innerHTML = '';
}

