export async function get() {
	const response = await fetch("http://localhost:3000/data/drops.json");
	const drops = await response.json();

	return {
		status: 200,
		body: { drops }
	};
}
