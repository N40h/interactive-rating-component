/***********************
/*         Variables
/**********************/
let selectedRating;
let clickedButton = null;

/***********************
/*         DOM
/**********************/
const ratingState = document.querySelector('.top-container');
const thankYouState = document.querySelector('.bottom-container');
thankYouState.style.display = 'none';
const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.querySelector('#submit-btn');
const ratingChoice = document.querySelector('#rating-choice');

/***********************
/*         Events
/**********************/
ratingButtons.forEach((button) =>
	button.addEventListener('click', (e) => {
		selectedRating = button.textContent;
		ratingChoice.textContent = selectedRating;

		e.target.style.background = 'hsl(217, 12%, 63%)';
		e.target.style.color = 'hsl(0, 0%, 100%)';

		if (clickedButton !== null) {
			clickedButton.style.background = 'hsl(213, 19%, 18%)';
		}

		clickedButton = e.target;
	})
);

submitButton.addEventListener('click', showThankYouState);

/***********************
/*         Functions
/**********************/
function showThankYouState() {
	ratingState.style.display = 'none';
	thankYouState.style.display = 'flex';
}
