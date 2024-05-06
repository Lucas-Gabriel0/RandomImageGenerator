document.addEventListener("DOMContentLoaded", function() {
    
    // Constants  for image dimensions
    const width = 400;
    const height = 300;

    // Function to update to the image
    function updateImage() {

        // Get the reference the image
        const img = document.getElementById("placeholder-image");

        
        // Create the Lorem Picsum image URL with a random parameter
        const imageUrl = `https://picsum.photos/${width}/${height}?random=${Math.random()}`;

        // Assign the image URL to the <img> tag
        img.src = imageUrl;
    }

    // Call the update function initially
    updateImage();

    // Update the image every 1000 milliseconds (1 second)
    setInterval(updateImage, 1000);
});
