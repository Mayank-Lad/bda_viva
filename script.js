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
    // script.js

document.addEventListener('DOMContentLoaded', () => {
    const videoOverlay = document.getElementById('video-overlay');
    const mainVideo = document.getElementById('main-video');
    const videoModal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeModal = document.querySelector('#video-modal .close-modal');

    // Play button click opens the modal and plays the video
    videoOverlay.addEventListener('click', () => {
        modalVideo.src = mainVideo.querySelector('source').src; // Set video source in modal
        videoModal.classList.remove('hidden');
        modalVideo.play();
    });

    // Close modal button event
    closeModal.addEventListener('click', () => {
        videoModal.classList.add('hidden');
        modalVideo.pause();
        modalVideo.src = ""; // Reset video source
    });

    // Close the modal when clicking outside the video
    videoModal.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            videoModal.classList.add('hidden');
            modalVideo.pause();
            modalVideo.src = ""; // Reset video source
        }
    });

});
