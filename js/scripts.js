function show_content(sectionId) {
    // Hide all content sections
    let sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected content section
    let selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

function navigate_to_url(url) {
    window.open(url, '_blank');
}

function toggle_answer() {
    let answerElement = document.getElementById('answer');
    let button = document.querySelector('#joke button');
    if (answerElement.style.display === 'none') {
        answerElement.style.display = 'block';
        button.textContent = 'Hide Answer';
    } else {
        answerElement.style.display = 'none';
        button.textContent = 'Show Answer';
    }
}