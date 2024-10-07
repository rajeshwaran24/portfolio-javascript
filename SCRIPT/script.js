
// navbar toggle 
let menu = document.getElementById('menu');
let navlist = document.getElementById('navlist');
let navLinks = navlist.querySelectorAll('a');

menu.addEventListener('click', () => {
    navlist.classList.toggle('showmenu');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 640) { // Only close menu on small screens
            navlist.classList.remove('showmenu');
        }
    });
});

function sendMail() {
    // Get the values from the input fields
    let param = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Check if any field is empty
    if (!param.name || !param.email || !param.subject || !param.message) {
        alert('Please fill in all fields.');
        return;
    }
    // Validate email format using a regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(param.email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Send the email
    emailjs.send('service_oh21o8d', 'template_cok2wd6', param)
        .then(() => {
            alert('Email Sent!!');
            //to clear input fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        });
}
