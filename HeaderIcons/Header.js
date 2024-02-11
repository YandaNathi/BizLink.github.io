// Get references to the icons
const notificationsIcon = document.getElementById('notifications');
const uploadIcon = document.getElementById('upload');
const businessCenterIcon = document.getElementById('business-center');
const networksIcon = document.getElementById('networks');
const searchIcon = document.getElementById('search');
const avatarIcon = document.getElementById('avatar');

// Add event listeners to the icons
notificationsIcon.addEventListener('click', function(event) {
    event.preventDefault();
    // Add functionality for notifications icon
    console.log('Notifications icon clicked');
    // Example: Open notifications panel
});

uploadIcon.addEventListener('click', function(event) {
    event.preventDefault();
    // Add functionality for upload icon
    console.log('Upload icon clicked');
    // Example: Open file upload dialog
});

businessCenterIcon.addEventListener('click', function(event) {
    event.preventDefault();
    // Add functionality for business center icon
    console.log('Business Center icon clicked');
    // Example: Navigate to business center page
});

networksIcon.addEventListener('click', function(event) {
    event.preventDefault();
    // Add functionality for networks icon
    console.log('Networks icon clicked');
    // Example: Open networks list
});

searchIcon.addEventListener('click', function(event) {
    event.preventDefault();
    // Add functionality for search icon
    console.log('Search icon clicked');
    // Example: Open search bar
});

avatarIcon.addEventListener('click', function(event) {
    event.preventDefault();
    // Add functionality for avatar icon
    console.log('Avatar icon clicked');
    // Example: Open user profile
});
