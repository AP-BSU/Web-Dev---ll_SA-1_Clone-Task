const button = document.getElementById('Button');

// on hover
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'blue';
});

// Revert color when mouse leaves
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = 'grey';
});

// Revert color when released
button.addEventListener('mouseup', function() {
    button.style.backgroundColor = 'blue';
});
