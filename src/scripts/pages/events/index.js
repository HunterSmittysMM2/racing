function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/*——————————————————————————————————————————————————————————————————————
 | SLIDE RIGHT
 | Slides the carousel so that the right page becomes the current page, 
 | and the current page becomes the left page.
 +—————————————————————————————————————————————————————————————————————*/
async function slideRight() {
	let prevClass = 'prev-page';
	let curClass = 'current-page';
	let nextClass = 'next-page';

	let prev_page = document.getElementsByClassName(prevClass)[0];
	let cur_page = document.getElementsByClassName(curClass)[0];
	let next_page = document.getElementsByClassName(nextClass)[0];

	////MOVE ITEMS LEFT
	let slideRClass = 'event-page-sliding-r';
	// add class with sliding properties (including translateX(-100%))
	cur_page.classList.add(slideRClass);
	next_page.classList.add(slideRClass);

	await sleep(500); // same time as transition duration

	// remove class with movement properties
	next_page.classList.remove(slideRClass);
	cur_page.classList.remove(slideRClass);

	// move prev to next (change to also automatically repopulate with next page content)
	prev_page.parentNode.appendChild(prev_page);

	// adjust class markers for prev, cur, and next
	// prev to next
	prev_page.classList.remove(prevClass);
	prev_page.classList.add(nextClass);
	// cur to prev
	cur_page.classList.remove(curClass);
	cur_page.classList.add(prevClass);
	// next to cur
	next_page.classList.remove(nextClass);
	next_page.classList.add(curClass);
}
