const form = document.getElementById('forumForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const formData = new FormData(form);
    const jsonData = {};

    // Convert FormData to JSON
    formData.forEach((value, key) => {
    jsonData[key] = value;
    });

    // Stringify and store in Local Storage
    localStorage.setItem('formData', JSON.stringify(jsonData));

    // Redirect to another page
    globalThis.location.href = '/thank-you.html'; // Change to your desired page
});