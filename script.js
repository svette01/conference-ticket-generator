document.addEventListener('DOMContentLoaded', function () {
    const formContent = document.getElementById('form-content');
    const displayData = document.getElementById('display-data');
    const ticketForm = document.getElementById('ticket-form');
    const fileInput = document.getElementById('file-input');
    const uploadedImage = document.getElementById('uploaded-image');
    const removeImageBtn = document.getElementById('remove-image');
    const changeImageBtn = document.getElementById('change-image');
    const displayImage = document.getElementById('display-image');
    const displayName = document.getElementById('display-name'); // Corrected ID
    const displayGithub = document.getElementById('display-github');
    const displayEmail = document.getElementById('display-email');
    const headerName = document.getElementById('header-name');

    // Show form content
    formContent.style.display = 'block';
    displayData.style.display = 'none';

    // Handle form submission
    ticketForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const github = document.getElementById('github').value;

        if (fullName && email && github) {
            displayName.textContent = fullName;
            displayEmail.textContent = email;
            displayGithub.textContent = github;
            headerName.textContent = fullName;

            formContent.style.display = 'none';
            displayData.style.display = 'block';
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Handle image upload
    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                uploadedImage.src = e.target.result;
                displayImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle remove image
    removeImageBtn.addEventListener('click', function () {
        fileInput.value = '';
        uploadedImage.src = 'images/icon-upload.svg';
        displayImage.src = '';
    });

    // Handle change image
    changeImageBtn.addEventListener('click', function () {
        fileInput.click();
    });

    // Ensure the drop area is clickable
    const dropArea = document.getElementById('drop-area');
    dropArea.addEventListener('click', function () {
        fileInput.click();
    });
});