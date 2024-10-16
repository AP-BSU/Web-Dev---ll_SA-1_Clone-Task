// Get all delete buttons and add an event listener
const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove the parent list item when delete is clicked
        this.parentElement.remove();
    });
});
