export function initFaqSelfClose() {
	const questionsContainer = document.querySelector('.faq-questions');
	questionsContainer.addEventListener('click', (event) => {
		document
			.querySelectorAll('.faq-questions details')
			.forEach((/** @type {HTMLDetailsElement} */ detail) => {
				if (detail.children[0].innerText !== event.target.innerText) {
					detail.open = false;
				}
			});
	});
}
