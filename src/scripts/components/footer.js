function footer() {
	return `
      <div class="social">
        <a target="_blank" href="https://www.instagram.com/greatwesternracing/#"><img src="" alt="Instagram"/></a>
      	<a target="_blank" href="https://www.linkedin.com/company/great-western-racing/"><img src="" alt="LinkedIn"/></a>
      </div>
  `;
}

export function insertFooter() {
	const footerElement = footer();
	document.querySelector('footer').insertAdjacentHTML('beforeend', footerElement);
}
