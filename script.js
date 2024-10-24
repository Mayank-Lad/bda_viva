// Ensure DOM is loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Toggle extra information visibility
    document.querySelectorAll('.more-info-btn').forEach(button => {
        button.addEventListener('click', () => {
            const infoId = button.getAttribute('data-info');
            const extraInfo = document.getElementById(infoId);
            
            if (extraInfo && extraInfo.classList.contains('hidden')) {
                extraInfo.classList.remove('hidden');
                button.textContent = 'Show Less Info';
            } else if (extraInfo) {
                extraInfo.classList.add('hidden');
                button.textContent = 'Show More Info';
            }
        });
    });

    // Image click event to open modal
    document.querySelectorAll('.display-image').forEach(image => {
        image.addEventListener('click', () => {
            const modal = document.getElementById('image-modal');
            const modalImage = document.getElementById('modal-image');
            modalImage.src = image.src;
            modal.classList.remove('hidden');
            modal.style.display = "flex";
        });
    });

    // Close modal on clicking the close button
    document.querySelector('.close-modal').addEventListener('click', () => {
        const modal = document.getElementById('image-modal');
        modal.classList.add('hidden');
        modal.style.display = "none";
    });

    // Close modal on clicking outside the image
    document.getElementById('image-modal').addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
            const modal = document.getElementById('image-modal');
            modal.classList.add('hidden');
            modal.style.display = "none";
        }
    });
});
