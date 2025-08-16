function addBook() {
	// Get input values on button click
	const titleData = document.getElementById("title").value.trim();
	const authorData = document.getElementById("author").value.trim();
	const isbnData = document.getElementById("isbn").value.trim();

	// Validation
	if (!titleData || !authorData || !isbnData) {
		alert("Please fill in all fields.");
		return;
	}

	// Create a new row
	const row = document.createElement("tr");
	row.innerHTML = `
		<td>${titleData}</td>
		<td>${authorData}</td>
		<td>${isbnData}</td>
		<td><button class="delete">x</button></td>
	`;

	// Append the row to the table body
	document.getElementById("book-list").appendChild(row);

	// Clear inputs
	document.getElementById("title").value = '';
	document.getElementById("author").value = '';
	document.getElementById("isbn").value = '';
}

// Handle delete clicks with event delegation
document.getElementById("book-list").addEventListener("click", function(event) {
	if (event.target.classList.contains("delete")) {
		const row = event.target.closest("tr");
		if (row) row.remove();
	}
});
