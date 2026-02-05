const navLinks = [
	{ href: 'index.html', text: 'Home' },
	{ href: 'events.html', text: 'Events' },
	{ href: 'info.html', text: 'About Us' },
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
	if (isExternal) link += ' <i class="fa-solid fa-up-right-from-square"></i>';
	link += '</a>';
	return link;
}

function header() {
	return `
    <img src="images/logo.png" alt="Great Western Racing Logo" width=100px />
    <nav>
      ${navLinks.map((link) => navLink(link)).join('')}
    </nav>
  `;
}

export function insertHeader() {
	const headerElement = header();
	document.querySelector('header').insertAdjacentHTML('beforeend', headerElement);
}
