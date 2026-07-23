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


// ===== Live recipe search (recipes.html) =====
// Filters the recipe cards in real time as the visitor types, and
// shows/hides a "no results" message depending on the match count.
function filterRecipes() {
    const searchBox = document.getElementById("recipe-search");
    if (!searchBox) return; // this function only applies on recipes.html

    const query = searchBox.value.toLowerCase();
    const cards = document.querySelectorAll(".recipe-card");
    const noResults = document.getElementById("no-results");
    let matches = 0;

    cards.forEach(function (card) {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const isMatch = title.includes(query);
        card.style.display = isMatch ? "" : "none";
        if (isMatch) matches++;
    });

    noResults.hidden = matches !== 0;
}

const recipeSearchBox = document.getElementById("recipe-search");
if (recipeSearchBox) {
    recipeSearchBox.addEventListener("input", filterRecipes);
}


// ===== Featured Dishes carousel (index.html) =====
// Manual navigation only - there is no setInterval/autoplay here on
// purpose, per the assignment's note to turn autoplay off.
function initCarousel() {
    const track = document.getElementById("carousel-track");
    if (!track) return; // this function only applies on index.html

    const slides = track.children;
    const dotsContainer = document.getElementById("carousel-dots");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    let index = 0;

    // Build one dot indicator per slide
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.classList.add("carousel-dot");
        dot.setAttribute("aria-label", "Go to slide " + (i + 1));
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", function () {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }

    function updateCarousel() {
        track.style.transform = "translateX(" + (-index * 100) + "%)";
        const dots = dotsContainer.querySelectorAll(".carousel-dot");
        dots.forEach(function (dot, i) {
            dot.classList.toggle("active", i === index);
        });
    }

    function goToSlide(i) {
        index = i;
        updateCarousel();
    }

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % slides.length;
        updateCarousel();
    });
}
