function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = 'New Contact Form Message';
    const body = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    const mailtoLink = `mailto:justinedeclans@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

function subscriptionData() {
    const firstName = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('firstname', firstName);
    localStorage.setItem('email', email);
    
    window.location.href = 'subscription.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const firstName = localStorage.getItem('firstname');
    const email = localStorage.getItem('email');

    if (firstName && email) {
        document.getElementById('name').value = firstName; 
        document.getElementById('email').value = email; 
        localStorage.removeItem('firstname');
        localStorage.removeItem('email');
    }
});