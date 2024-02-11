document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform validation (e.g., check if username and password meet requirements)
    // For simplicity, this example assumes the validation is successful
    // In a real application, you would perform more comprehensive validation

    // Display success message
    document.getElementById("success-message").innerText = "Registration successful!";

    // You can redirect to a login page or perform other actions after successful registration
});
