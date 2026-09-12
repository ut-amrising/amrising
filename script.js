/* =====================================
   MOBILE MENU
===================================== */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});


/* =====================================
   CLOSE MOBILE MENU
===================================== */

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("show");

    });

});


/* =====================================
   GALLERY SLIDER
===================================== */

const galleryTrack =
    document.getElementById("galleryTrack");

const prevButton =
    document.getElementById("prevButton");

const nextButton =
    document.getElementById("nextButton");

const galleryCards =
    document.querySelectorAll(".gallery-card");

const galleryDots =
    document.getElementById("galleryDots");


let currentSlide = 0;


/* Tentukan jumlah slide */

function getSlidesPerView() {

    if (window.innerWidth <= 600) {

        return 1;

    }

    if (window.innerWidth <= 900) {

        return 2;

    }

    return 3;

}


/* Jumlah halaman */

function getTotalSlides() {

    const slidesPerView =
        getSlidesPerView();

    return Math.max(
        1,
        galleryCards.length - slidesPerView + 1
    );

}


/* Buat titik indikator */

function createDots() {

    galleryDots.innerHTML = "";

    const total =
        getTotalSlides();

    for (let i = 0; i < total; i++) {

        const dot =
            document.createElement("span");

        dot.classList.add("gallery-dot");

        if (i === currentSlide) {

            dot.classList.add("active");

        }

        dot.addEventListener("click", function() {

            currentSlide = i;

            updateGallery();

        });

        galleryDots.appendChild(dot);

    }

}


/* Update gallery */

function updateGallery() {

    const slidesPerView =
        getSlidesPerView();

    const total =
        getTotalSlides();


    if (currentSlide >= total) {

        currentSlide = total - 1;

    }

    if (currentSlide < 0) {

        currentSlide = 0;

    }


    const percentage =
        currentSlide * (100 / slidesPerView);


    galleryTrack.style.transform =
        `translateX(-${percentage}%)`;


    const dots =
        document.querySelectorAll(".gallery-dot");


    dots.forEach(function(dot, index) {

        dot.classList.toggle(
            "active",
            index === currentSlide
        );

    });

}


/* Tombol sebelumnya */

prevButton.addEventListener("click", function() {

    currentSlide--;

    updateGallery();

});


/* Tombol berikutnya */

nextButton.addEventListener("click", function() {

    currentSlide++;

    updateGallery();

});


/* Saat ukuran layar berubah */

window.addEventListener("resize", function() {

    createDots();

    updateGallery();

});


/* Jalankan pertama kali */

createDots();

updateGallery();


/* =====================================
   ACTIVE NAVIGATION
===================================== */

window.addEventListener("scroll", function() {

    const sections =
        document.querySelectorAll("section");

    const links =
        document.querySelectorAll("#navMenu a");


    let current = "";


    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 150;


        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    links.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});