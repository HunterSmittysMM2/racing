// This will send the email, alert the user, and close the popup.
function sendEmail(event) {
	event.preventDefault();
	const email = document.getElementById('forum_email').value;
	alert(`An email has been sent to ${email}.`);
	showDiscount();
}

// This opens and closes the popup.
function showDiscount() {
	const template = document.querySelector('.popup-overlay');
	const vh = window.innerHeight;
	template.style.display = 'flex';
	template.style.display = 'none';
	template.style.height = `${vh}px`;
}

export function initDiscounts() {
	showDiscount();
	document.getElementById('discount_forum').addEventListener('submit', sendEmail);
	document.getElementById('discount_button').addEventListener('click', function (event) {
		event.preventDefault();
		showDiscount();
	});
	document.querySelector('.pop-closer').addEventListener('click', function (event) {
		event.preventDefault();
		showDiscount();
	});
}
