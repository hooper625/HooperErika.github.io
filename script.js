function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/ErikaHooperResumeODU.pdf'; 
    link.download = 'HooperErikaResume.pdf'; 
    link.click();
}

// Event listener for RouterLink clicks
document.querySelectorAll('.RouterLink').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        loadPage(href);
    });
});

function loadPage(page) {
    fetch(page)
    .then(response => response.text())
    .then(data => {
        document.querySelector('.rightView').innerHTML = data;
    });
};
document.addEventListener("DOMContentLoaded", () => {
    // Fetch the aboutMe data from JSON file
    fetch('/aboutMe.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('paragraph1').textContent = data.paragraph1;
            document.getElementById('paragraph2').textContent = data.paragraph2;
        })
        .catch(error => console.error('Error loading JSON:', error));
});
