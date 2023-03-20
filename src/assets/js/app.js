// variables / targets
let count = 0;
const value = document.querySelector('.counter');
const decreaseBtn = document.querySelector('.btn-decrease');
const resetBtn = document.querySelector('.btn-reset');
const increaseBtn = document.querySelector('.btn-increase');

// EVENTS:

// decrease button is clicked
decreaseBtn.addEventListener('click', function() {

	decreaseCount();
});

// reset button is clicked
resetBtn.addEventListener('click', function() {

	resetCount();
});

// increase button is clicked
increaseBtn.addEventListener('click', function() {

	increaseCount();
});

// FUNCTIONS

// decrease count
function decreaseCount() {
	
	count--;
	value.textContent = count;
}

// reset count
function resetCount() {

	count = 0;
	value.textContent = count;
}

// increase count
function increaseCount() {
	
	count++;
	value.textContent = count;
}

