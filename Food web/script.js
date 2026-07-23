/* ===== Base =====
   scroll-behavior lives on html so the "Return to Top" link scrolls
   smoothly. The prefers-reduced-motion query further down turns
   this back off for visitors who asked for less motion. */
html {
    scroll-behavior: smooth;
    height: 100%;
}

/* ===== Sticky footer =====
   body is a column flex container that's always at least the full
   viewport height; main grows to fill any leftover space, which
   pins the footer to the bottom of the browser window even on
   short pages, regardless of window height (not just content length). */
body {
    font-family: 'Trebuchet MS', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fdf6ec;
    color: #3a2b21;
    line-height: 1.6;
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1 0 auto;
}

h1, h2, h3 {
    font-family: Georgia, 'Times New Roman', serif;
    color: #7a2e1d;
}

main {
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 20px 60px;
}


/* ===== Skip to Main Content link =====
   Positioned off-screen by default. The focus pseudo-class
   brings it into view only when a keyboard user tabs to it. */
.skip-link {
    position: absolute;
    top: -60px;
    left: 10px;
    background-color: #7a2e1d;
    color: #ffffff;
    padding: 10px 18px;
    border-radius: 0 0 6px 6px;
    z-index: 200;
    transition: top 0.3s ease;
}

.skip-link:focus {
    top: 0;
}


/* ===== Navigation =====
   display: flex used here per assignment suggestion, plus
   background, padding, and box-shadow for an attractive look. */
header {
    background-color: #7a2e1d;
    padding: 10px 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

nav {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px;
}

nav .brand {
    color: #ffffff;
    font-family: Georgia, serif;
    font-size: 1.4em;
    font-weight: bold;
    margin: 8px 0;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 24px;
    margin: 8px 0;
    padding: 0;
}

nav a {
    color: #fdf6ec;
    text-decoration: none;
    font-size: 1.05em;
    padding-bottom: 3px;
    border-bottom: 2px solid transparent;
    transition: border-color 0.25s ease, color 0.25s ease;
}

nav a:hover,
nav a.active {
    color: #ffd7a8;
    border-bottom: 2px solid #ffd7a8;
}


/* ===== Buttons / links ===== */
.btn {
    display: inline-block;
    background-color: #7a2e1d;
    color: #ffffff;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 6px;
    margin-top: 10px;
    transition: background-color 0.25s ease, transform 0.25s ease;
}

.btn:hover {
    background-color: #a63f28;
    transform: translateY(-2px);
}


/* ===== Hero (home page) =====
   display: flex used to lay the hero image and text side by side. */
.hero {
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-bottom: 40px;
}

.hero-img {
    width: 100%;
    max-width: 420px;
    height: 280px;
    object-fit: cover;
    border: 4px solid #ffffff;
    border-radius: 12px;
    padding: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.hero-text {
    flex: 1;
    min-width: 260px;
}


/* ===== Images, box model =====
   All images get a consistent border / padding / radius treatment. */
img {
    border: 4px solid #ffffff;
    padding: 3px;
    border-radius: 10px;
    box-sizing: border-box;
}


/* ===== Image preview box (recipes page, JS-driven) =====
   Text is centered over whatever background-image the script sets. */
#image {
    width: 100%;
    height: 260px;
    margin: 20px 0 10px;
    background-color: #3a2b21;
    background-size: cover;
    background-position: center;
    border: 3px solid #7a2e1d;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    font-size: 1.3em;
    font-weight: bold;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
    padding: 20px;
    box-sizing: border-box;
}

.recipe-card img {
    cursor: pointer;
}


/* ===== Recipe grid (recipes page) =====
   Mobile-first: single column grid with a 10px gap. Wider layouts
   are handled entirely in the tablet / large-screen media queries
   below, so nothing here is repeated unnecessarily. */
.recipe-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 30px;
}

.recipe-card {
    background-color: #ffffff;
    border: 1px solid #e6d8c3;
    padding: 16px;
    margin: 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

.recipe-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.recipe-card figcaption h3 {
    margin: 12px 0 4px;
}

/* Hover pseudo-class with a transition */
.recipe-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.18);
}

/* nth-child selector: every other card gets a soft tinted background
   for visual rhythm */
.recipe-card:nth-child(even) {
    background-color: #fff3e2;
}

/* ===== Return to Top button =====
   Scrolling on click is driven by the html { scroll-behavior: smooth }
   rule above, not JS, so the reduced-motion query can turn it off. */
.back-to-top {
    display: block;
    width: fit-content;
    margin: 40px auto 0;
    background-color: #7a2e1d;
    color: #ffffff;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 6px;
    transition: background-color 0.25s ease;
}

.back-to-top:hover {
    background-color: #a63f28;
}


/* ===== About page ===== */
.about-flex {
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    margin: 25px 0 40px;
}

.about-flex img {
    width: 100%;
    max-width: 300px;
    height: 220px;
    object-fit: cover;
}

.about-text {
    flex: 1;
    min-width: 260px;
}

.fun-facts {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 40px;
}

.fact-card {
    flex: 1;
    min-width: 180px;
    background-color: #ffffff;
    border: 1px solid #e6d8c3;
    border-radius: 10px;
    padding: 16px;
    text-align: center;
}

.contact-list {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.contact-list a {
    display: inline-block;
    color: #7a2e1d;
    text-decoration: none;
    border: 2px solid #7a2e1d;
    padding: 8px 16px;
    border-radius: 20px;
    transition: background-color 0.25s ease, color 0.25s ease;
}

.contact-list a:hover {
    background-color: #7a2e1d;
    color: #ffffff;
}


/* ===== Video sections (home + recipes pages) =====
   The wrapper keeps a 16:9 ratio at any screen width so the embedded
   video never gets distorted or overflows on mobile. */
.video-section {
    margin: 40px 0;
}

.video-wrapper {
    position: relative;
    width: 100%;
    max-width: 700px;
    padding-bottom: 39.375%; /* 700 * 9/16, capped so it never exceeds max-width height */
    aspect-ratio: 16 / 9;
    height: 0;
    margin: 15px 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}


/* ===== Featured Dishes carousel (home page) =====
   Manual navigation only. .carousel-track holds all slides in a row;
   JS shifts it with a transform, so it's a pure CSS transition, no
   animation library involved. */
.carousel-section {
    margin: 40px 0;
}

.carousel {
    display: flex;
    align-items: center;
    gap: 12px;
}

.carousel-track-wrapper {
    flex: 1;
    overflow: hidden;
    width: 100%;
    max-width: 640px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.carousel-track {
    display: flex;
    transition: transform 0.4s ease;
}

.carousel-track img {
    width: 100%;
    flex: 0 0 100%;
    height: 280px;
    object-fit: cover;
    border: none;
    padding: 0;
    border-radius: 0;
}

.carousel-btn {
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #7a2e1d;
    background-color: #ffffff;
    color: #7a2e1d;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.25s ease, color 0.25s ease;
}

.carousel-btn:hover,
.carousel-btn:focus {
    background-color: #7a2e1d;
    color: #ffffff;
}

.carousel-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 14px;
}

.carousel-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #7a2e1d;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
}

.carousel-dot.active {
    background-color: #7a2e1d;
}


/* ===== Recipe search bar (recipes page) ===== */
.search-bar {
    margin: 20px 0 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.search-bar label {
    font-weight: bold;
    color: #7a2e1d;
}

.search-bar input {
    flex: 1;
    min-width: 200px;
    max-width: 320px;
    padding: 8px 12px;
    border: 2px solid #e6d8c3;
    border-radius: 20px;
    font-size: 1em;
    font-family: inherit;
    color: #3a2b21;
}

.search-bar input:focus {
    outline: none;
    border-color: #7a2e1d;
}

.no-results {
    color: #7a2e1d;
    font-style: italic;
}


/* ===== Google Map embed (about page) =====
   Same responsive-embed pattern as .video-wrapper, different ratio. */
.map-wrapper {
    position: relative;
    width: 100%;
    max-width: 700px;
    aspect-ratio: 16 / 10;
    margin: 15px 0 40px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.map-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}


/* ===== Site notes (about page) ===== */
.site-notes {
    margin-top: 40px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #e6d8c3;
    border-radius: 10px;
}

.site-notes ul {
    padding-left: 20px;
}

.site-notes li {
    margin-bottom: 10px;
}


/* ===== Footer ===== */
footer {
    background-color: #3a2b21;
    color: #fdf6ec;
    text-align: center;
    padding: 18px;
}


/* ===== Tablet View ===== */
/* Triggers once the viewport reaches 772px wide. */
@media screen and (min-width: 772px) {
  .recipe-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Circular figures */
  .recipe-card {
    border-radius: 50%;
  }

  /* Last figure spans both columns */
  .recipe-card:last-child {
    grid-column: 1 / -1;
  }
}

/* ===== Large Screen View ===== */
/* Triggers once the viewport reaches 992px wide.
   No max-width used here, per the assignment requirement. */
@media screen and (min-width: 992px) {
  /* Every third figure spans both columns */
  .recipe-card:nth-child(3n) {
    grid-column: 1 / -1;
  }

  /* Border radius removed from all figures */
  .recipe-card {
    border-radius: 0;
  }
}

/* ===== Reduced Motion ===== */
/* Visitors who prefer less motion lose the smooth scroll animation
   triggered by the "Return to Top" link; the jump becomes instant. */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* ===== Dark Color Scheme ===== */
/* Default site theme is light. Visitors with a system-level dark
   preference get dark figures with light, high-contrast text. */
@media (prefers-color-scheme: dark) {
  .recipe-card {
    background-color: #241a12;
    color: #ffe27a;
    border: 2px solid #000000;
  }

  .recipe-card figcaption h3 {
    color: #ffe27a;
  }

  .recipe-card:nth-child(even) {
    background-color: #1a120c;
  }
}
