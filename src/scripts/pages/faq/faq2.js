async function generateFaq() {
	try {
		const response = await fetch('./scripts/pages/faq/questions.json');

		// Check if the request was actually successful (e.g., status 200)
		if (!response.ok) {
			new Error(`HTTP error! status: ${response.status}`);
		}

		// Convert the data back into JSON
		const data = await response.json();

		// Define the FAQ area, and then map each question/answer pair. Index is used to create a unique pairing. (i.e. Question 1 is paired with Answer 1) This will scale with the questions.
		const faqArea = document.querySelector('#faq-questions');
		faqArea.innerHTML = data
			.map((item, index) => {
				const count = index + 1;
				return `
					<details class="faq-detail">
						<summary>
							<span>${item.q}</span>
							<span>+</span>
						</summary>
						<div>
							<p>${item.a}</p>
						</div>
    				</details>`;
			})
			.join('');

		const collapseQuestions = document.querySelector('#collapse-questions');
		collapseQuestions.addEventListener('click', () => {
			console.log('run')
			document.querySelectorAll('.faq-detail').forEach((detail) => {
				console.log('run')
				if (detail.open) {
					detail.open = false
				} else {
					detail.open = true
				}
			});
		});
	} catch (error) {
		console.log('There was an error:', error);
	}
}

const questionsContainer = document.querySelector('#faq-questions');
questionsContainer.addEventListener('click', (event) => {
	document
		.querySelectorAll('.faq-questions details')
		.forEach((/** @type {HTMLDetailsElement} */ detail) => {
			if (detail.children[0].innerText !== event.target.innerText) {
				detail.open = false;
			}
		});
});


(async function () {
	await generateFaq();
})();

async function getJson(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) new Error('Fetch failed');

		// Data is stored here locally
		const data = await response.json();

		// Pass the stored data to other functions in the space below

		// Pass the stored data to other functions in the space above
	} catch (error) {
		console.error('Error:', error);
	}
}

// getJson(url)
