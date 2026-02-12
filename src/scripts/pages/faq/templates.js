export const questionCard = ({ q, a }) => {
	return `
    <details>
      <summary>
        ${q}
      </summary>
      <p>${a}</p>
    </details>
  `;
};
