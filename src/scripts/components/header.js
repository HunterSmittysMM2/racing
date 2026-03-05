const navLinks = [
	{ href: 'index.html', text: 'Home' },
	{ href: 'events.html', text: 'Events' },
	{ href: 'about.html', text: 'About Us' },
	{ href: 'https://runsignup.com/Race/Register/?raceId=190975', text: 'Sign Up', isExternal: true },
	{
		href: 'https://runsignup.com/Race/Volunteer/ID/Rexburg/RexysChristmasBash',
		text: 'Volunteer',
		isExternal: true,
	},
	{
		// Might not need
		href: 'https://runsignup.com/Race/Donate/ID/Rexburg/RexysChristmasBash',
		text: 'Donate',
		isExternal: true,
	},
];

/** Constructs an `a` nav element piece by piece */
function navLink({ href, text, isExternal }) {
	let link = `<a href="${href}"`;
	if (isExternal) link += ' target="_blank"';
	link += `>${text}`;
	if (isExternal) link += '  <i class="fa-solid fa-up-right-from-square fa-xs"></i>';
	link += '</a>';
	return link;
}

function header() {
	return `
    <img src="images/logo.png" alt="Great Western Racing Logo"/>
    <nav id="nav">
      ${navLinks.map((link) => navLink(link)).join('')}
    </nav>
	<div>
		<i id="hamburger" class="hamburger fa-solid fa-bars"></i>
	</div>
  `;
}

function toggleMenu() {
	const hamburger = document.getElementById('hamburger');
	const nav = document.getElementById('nav');
	hamburger.addEventListener('click', function () {
		nav.classList.toggle('show');

		// update accessibility state
		const isOpen = !nav.classList.contains('show');
		hamburger.setAttribute('aria-expanded', isOpen);
	});
}

export function insertHeader() {
	const headerElement = header();
	document.querySelector('header').insertAdjacentHTML('beforeend', headerElement);

	toggleMenu();
}
