console.log("JavaScript is working!");

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let country = document.getElementById("country").value;

        if (name === "" || email === "" || phone === "" || country === "Select Preferred Country") {
            alert("All fields are required!");
            event.preventDefault();
        }
    });
});
