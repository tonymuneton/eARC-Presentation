function addRow(tableId) {
    const table = document.getElementById(tableId);
    const newRow = table.rows[table.rows.length - 1].cloneNode(true);
    Array.from(newRow.getElementsByTagName('input')).forEach(input => input.value = '');
    table.appendChild(newRow);
}

// Event listener for the DOM content being loaded
document.addEventListener('DOMContentLoaded', function () {
    // Attach the addRow function to all buttons with the 'add-row-button' class
    document.querySelectorAll('.add-row-button').forEach(button => {
        button.addEventListener('click', function () {
            // 'this' refers to the button that was clicked
            const tableId = this.getAttribute('data-table');
            addRow(tableId);
        });
    });
});
