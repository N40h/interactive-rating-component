/***********************
/*         Variables
/**********************/
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
		ratingChoice.textContent = button.textContent;

		if (button.classList.contains('active')) {
			button.classList.remove('active');
		} else {
			button.classList.add('active');
		}

		if (clickedButton !== null && clickedButton !== button) {
			clickedButton.classList.remove('active');
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
