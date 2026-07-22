// Runs when the visitor hovers over one of the recipe thumbnail images
function upDate(event) {
    // Step 3.1: confirm the event is firing
    console.log("upDate triggered");

    // The image that triggered the event
    let previewPic = event.target;

    // Step 3.2: log info about the hovered image
    console.log(previewPic.alt);
    console.log(previewPic.src);

    // Step 3.3: change the text of the element with id="image"
    let imageBox = document.getElementById("image");
    imageBox.textContent = previewPic.alt;

    // Step 3.5: change the background image of the element with id="image"
    imageBox.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Runs when the visitor's mouse leaves the thumbnail image
function undo() {
    let imageBox = document.getElementById("image");

    // Step 4.1: reset the background image back to none
    imageBox.style.backgroundImage = "url('')";

    // Step 4.2: reset the text back to the original message
    imageBox.textContent = "Hover over an image below to display here.";
}

// Runs when the page finishes loading (see onload on <body>)
function addTabIndex() {
    // Step 9.1: confirm the event is firing
    console.log("addTabIndex triggered");

    // Grab every thumbnail image in the recipe grid
    let thumbnails = document.querySelectorAll(".recipe-card img");

    // Step 9.2: loop through each image
    for (let i = 0; i < thumbnails.length; i++) {
        // Step 9.3: add the tabindex attribute so each image can
        // receive keyboard focus (0 keeps it in natural tab order)
        thumbnails[i].setAttribute("tabindex", "0");
    }
}
