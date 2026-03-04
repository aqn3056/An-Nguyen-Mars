// adding footer
var body = document.querySelector("body");
var footer = document.createElement("footer");
body.appendChild(footer);

// get current year
var today = new Date();
var thisYear = today.getFullYear();

// select footer element
var footerElement = document.querySelector("footer");

// new paragraph element for copyright
var copyright = document.createElement("p");

// set the innerHTML with the symbol and year
copyright.textContent = "© An Nguyen " + thisYear;

// append the copyright paragraph to the footer
footerElement.appendChild(copyright);

// skills list
var skills = [
    "JavaScript", 
    "HTML", 
    "CSS", 
    "Python", 
    "C", 
    "C++", 
    "GitHub"];
// select the skills section by id
var skillsSection = document.getElementById("Skills");

// query the skillsSection to select the <ul> element
var skillsList = skillsSection.querySelector("ul");

// loop through the skills arr and create li items
for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

// ========== Message Form Handling ==========

// Select the leave_message form by name attribute
var messageForm = document.querySelector('[name="leave_message"]');

// Add event listener for the submit event
messageForm.addEventListener("submit", function(event) {
    // Prevent the default form refresh behavior
    event.preventDefault();

    // Get the form field elements
    var nameField = event.target.usersName;
    var emailField = event.target.usersEmail;
    var messageField = event.target.usersMessage;

    // Get the values from the form fields
    var usersName = nameField.value;
    var usersEmail = emailField.value;
    var usersMessage = messageField.value;

    // Clear any previous error messages and error styles
    var oldErrors = messageForm.querySelectorAll(".error-message");
    for (var i = 0; i < oldErrors.length; i++) {
        oldErrors[i].remove();
    }
    nameField.classList.remove("input-error");
    emailField.classList.remove("input-error");
    messageField.classList.remove("input-error");

    // Validate each field
    var hasError = false;

    if (usersName.trim() === "") {
        nameField.classList.add("input-error");
        var errorMsg = document.createElement("p");
        errorMsg.className = "error-message";
        errorMsg.textContent = "Name is required.";
        nameField.closest(".input-group").appendChild(errorMsg);
        hasError = true;
    }

    if (usersEmail.trim() === "") {
        emailField.classList.add("input-error");
        var errorMsg = document.createElement("p");
        errorMsg.className = "error-message";
        errorMsg.textContent = "Email is required.";
        emailField.closest(".input-group").appendChild(errorMsg);
        hasError = true;
    }

    if (usersMessage.trim() === "") {
        messageField.classList.add("input-error");
        var errorMsg = document.createElement("p");
        errorMsg.className = "error-message";
        errorMsg.textContent = "Message is required.";
        messageField.closest(".input-group").appendChild(errorMsg);
        hasError = true;
    }

    // Stop if there are validation errors
    if (hasError) {
        return;
    }

    // Log the values to the console
    console.log("Name: " + usersName);
    console.log("Email: " + usersEmail);
    console.log("Message: " + usersMessage);

    // Select the #messages section by id
    var messageSection = document.getElementById("messages");

    // Query the messageSection to find the <ul> element
    var messageList = messageSection.querySelector("ul");

    // Create a new list item element
    var newMessage = document.createElement("li");

    // Set the inner HTML with name link and message span
    newMessage.innerHTML = '<a href="mailto:' + usersEmail + '">' + usersName + '</a> ' +
        '<span>' + usersMessage + '</span>';

    // Create a remove button
    var removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    // Add click event listener to remove button
    removeButton.addEventListener("click", function() {
        var entry = removeButton.parentNode;
        entry.remove();
    });

    // Create an edit button
    var editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.type = "button";

    // Add click event listener to edit button
    editButton.addEventListener("click", function() {
        var newMessageText = prompt("Edit your message:", usersMessage);
        if (newMessageText !== null && newMessageText !== "") {
            // Update the span with the new message
            var span = newMessage.querySelector("span");
            span.textContent = newMessageText;
        }
    });

    // Append buttons to the new message list item
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);

    // Append the new message to the message list
    messageList.appendChild(newMessage);

    // Clear/reset the form
    messageForm.reset();
});
