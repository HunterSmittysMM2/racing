/**
 * Reads a json file and returns the data
 * @param {string} filepath
 * @returns {Promise<Record<string,any>|Record<string,any>[]>}
 */
export async function readJson(filepath) {
	const res = await fetch(filepath);
	return await res.json();
}

/** @returns {boolean} */
export function isDevelopment() {
	return (
		window.location.href.includes('localhost') || window.location.hostname.includes('127.0.0.1')
	);
}
