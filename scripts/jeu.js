document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById('startGame');
    let animationFrameId;
    let circleX = canvas.width / 2;
    let circleY = canvas.height / 2;
    let speedX = 2;
    let speedY = 2;
    const img = new Image();
    img.src = '../images/transformation_basket.png'; // Assurez-vous que le chemin de l'image est correct

    function drawImage() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Save the current context state
        ctx.save();
        
        // Draw a circle and clip to it
        ctx.beginPath();
        ctx.arc(circleX, circleY, 20, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        // Draw the image
        ctx.drawImage(img, circleX - 20, circleY - 20, 40, 40);

        // Restore the context to its original state
        ctx.restore();
        
        circleX += speedX;
        circleY += speedY;

        if (circleX + 20 > canvas.width || circleX - 20 < 0) {
            speedX = -speedX;
        }

        if (circleY + 20 > canvas.height || circleY - 20 < 0) {
            speedY = -speedY;
        }

        animationFrameId = requestAnimationFrame(drawImage);
    }

    startButton.addEventListener('click', () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        circleX = canvas.width / 2;
        circleY = canvas.height / 2;
        speedX = 2;
        speedY = 2;
        drawImage();
    });

    img.onload = () => {
        // Image loaded, but do not start the animation until button is clicked
    };
});
