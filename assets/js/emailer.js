function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var subject = "Message from " + name;
    var body = "Email: " + email + "\nMessage: " + message;

    window.location.href = "mailto:felicia.schenkelberg.th@dartmouth.edu?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}