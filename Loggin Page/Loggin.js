document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform validation (e.g., check if username and password are correct)
    if (username === "example" && password === "password") {
        // Redirect to the home page or perform other actions
        window.location.href = "home.html";
    } else {
        // Display error message
        document.getElementById("error-message").innerText = "Invalid username or password. Please try again.";
    }
});
