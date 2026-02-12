import { questionCard } from './templates.js';
import { isDevelopment, readJson } from '../../utils/index.js';
import { initFaqSelfClose } from './faqControls.js';

const FAQ_PATH = `${isDevelopment() ? '/src' : '/racing'}/scripts/pages/faq/questions.json`;

(async function loadFaqPage() {
	// Load Questions
	const /** @type {typeof import('./questions.json')} */ questions = await readJson(FAQ_PATH);

	const faqContent = questions.map((qa) => questionCard(qa)).join('');
	document.querySelector('.faq-questions').insertAdjacentHTML('beforeend', faqContent);

	// Init Listeners
	initFaqSelfClose();
})();
