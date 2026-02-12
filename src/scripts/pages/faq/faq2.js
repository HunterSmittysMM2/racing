// 2nd FAQ page? Lets combine the best of both approaches to create an FAQ

async function generateFaq() {
	try {
		const response = await fetch('questions.json');

		// Check if the request was actually successful (e.g., status 200)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Convert the data back into JSON
		const data = await response.json();

		// Define the FAQ area, and then map each question/answer pair. Index isused to create a unique pairing. (i.e. Question 1 is paired with Answer 1) This will scale with the questions.
		const faqArea = document.querySelector('#faq-questions');
		faqArea.innerHTML = data
			.map((item, index) => {
				const count = index + 1;
				return `
			<div class="border-b border-gray-200">
				<input type="checkbox" id="faq${count}" name="question" class="peer hidden"/>
				<label for="faq${count}" class="flex justify-between p-4 cursor-pointer font-medium hover:bg-gray-50">${item.q} <span class="transition-transform duration-300 peer-checked:rotate-45">+</span></label>

			<!--Answer -->
			<div id="answer-${count}" class="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out peer-checked:max-h-full ml-5">
				<div class="m-5">
					${item.a}
				</div>
			</div>
		</div >`;
			})
			.join('');
	} catch (error) {
		console.log('There was an error:', error);
	}
}

(async function () {
	await generateFaq();
})();

async function getJson(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error('Fetch failed');

		// Data is stored here locally
		const data = await response.json();

		// Pass the stored data to other functions in the space below

		// Pass the stored data to other functions in the space above
	} catch (error) {
		console.error('Error:', error);
	}
}

// getJson(url)
