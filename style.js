document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Collect form data
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const session = document.querySelector('input[name="session"]:checked') ? document.querySelector('input[name="session"]:checked').value : "No session selected";
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(interest => interest.value);
    const comments = document.getElementById("comments").value;

    // Display the collected data
    let output = `<h2>Registration Submitted</h2>`;
    output += `<p><strong>Full Name:</strong> ${fullName}</p>`;
    output += `<p><strong>Email:</strong> ${email}</p>`;
    output += `<p><strong>Session:</strong> ${session}</p>`;
    output += `<p><strong>Interests:</strong> ${interests.join(', ')}</p>`;
    output += `<p><strong>Comments:</strong> ${comments}</p>`;

    document.getElementById("output").innerHTML = output;
});
