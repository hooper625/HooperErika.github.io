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

document.addEventListener("DOMContentLoaded", () => {
    // Get all the RouterLink elements
    const links = document.querySelectorAll('.RouterLink');

    // Loop through each link and add an event listener
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const page = this.getAttribute('href'); // Get the href attribute
            loadPage(page); // Call function to load page content
        });
    });

    // Function to fetch and load page content
    function loadPage(page) {
        fetch(page)
        .then(response => response.text())
        .then(html => {
            document.querySelector('.rightView').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the page:', error);
            document.querySelector('.rightView').innerHTML = '<p>Error loading the content.</p>';
        });
    }
});

