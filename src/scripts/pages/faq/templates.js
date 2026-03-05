export const questionCard = ({ q, a }) => {
	return `
    <details class="border-b border-gray-200 max-h-full">
    <summary class="flex justify-between p-4 cursor-pointer font-medium hover:text-gray-200">
    	<span>${q}</span>
    	<span>+</span>
    </summary>
			<div class="m-5">
				<p>${a}</p>
			</div>
    </details>
  `;
};
