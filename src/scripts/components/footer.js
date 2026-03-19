const today = new Date();
const year = today.getFullYear();

function footer() {
	return `
      <div class="social">
        <a target="_blank" href="https://www.instagram.com/greatwesternracing/#"><img src="./images/instagram-icon.svg" alt="Instagram icon"/></a>
      	<a target="_blank" href="https://www.linkedin.com/company/great-western-racing/"><img src="./images/linkedin-161-svgrepo-com.svg" alt="LinkedIn icon"/></a>
      </div>
      <p class="copyright">© ${year} Great Western Racing</p>
  `;
}

export function insertFooter() {
	const footerElement = footer();
	document.querySelector('footer').insertAdjacentHTML('beforeend', footerElement);
}