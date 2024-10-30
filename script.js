function setGreeting() {
    const hours = new Date().getHours();
    const greeting = document.createElement("p");
    if (hours < 12) {
        greeting.textContent = "Good morning! Ready to learn?";
    } else if (hours < 18) {
        greeting.textContent = "Good afternoon! Let's keep learning!";
    } else {
        greeting.textContent = "Good evening! Unleash your knowledge!";
    }
    document.querySelector("main section").prepend(greeting);
}
setGreeting();


document.querySelectorAll('.course-card button').forEach(button => {
    button.addEventListener('click', () => {
        const confirmation = confirm("Are you sure you want to enroll in this course?");
        if (confirmation) {
            alert("You are now enrolled!");
        } else {
            alert("Enrollment canceled.");
        }
    });
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.querySelector("input[placeholder='Your Name']").value;
    const email = document.querySelector("input[placeholder='Your Email']").value;
    const message = document.querySelector("textarea[placeholder='Your Message']").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received. We will get back to you soon.`);
        this.reset();
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
