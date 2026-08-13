const works = [

    {
        title: "Lusts of the Beasts",
        year: 2022,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/Lust.jpg",
        description: "A work depicting the complicated forms and expressions of human sexuality from a queer perspective."
    },

    {
        title: "Phylo",
        year: 2026,
        category: "Digital Art",
        medium: "Photoshop",
        type: "image",
        image: "images/Phylo.jpg",
        description: " A collage made in Photoshop depicting the Aeternic Lord of Physics and Divine Mathematics, Phylo. They are often depicted as an abstraction in the form of scientific and mathematical principles."
    },

    {
        title: "Violet Trauma",
        year: 2022,
        category: "Digital Art",
        medium: "Photoshop",
        type: "image",
        image: "images/Trauma.jpg",
        description: "Playing around."
    },

    {
        title: "DNA(Abstraction)",
        year: 2023,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/DNA.jpg",
        description: "Abstract piece made with makeup, watercolor, and acrylics. Take from it what you will."
    },

    {
        title: "Roses Bleed",
        year: 2022,
        category: "Digital Art",
        medium: "Photoshop",
        type: "image",
        image: "images/Roses.jpg",
        description: "Looked Cool"
    },

    {
        title: "Galaxy Heart",
        year: 2022,
        category: "Digital Art",
        medium: "Photoshop",
        type: "image",
        image: "images/Galaxy.jpg",
        description: "Universal Shine"
    },

    {
        title: "Cosmic Integration",
        year: 2024,
        category: "Traditional Art",
        medium: "Inkpen",
        type: "image",
        image: "images/Cosmic.jpg",
        description: ""
    },

    {
        title: "Midknight(Ghost) Forest",
        year: 2023,
        category: "Digital Art",
        medium: "Canva",
        type: "image",
        image: "images/Midknight.jpg",
        description: "The ghost forest rises at the peak of night, bleach white trees rising from the ground like spirits. As the sun arises they vanish like their namesake"
    },

    {
        title: "Synergy",
        year: 2023,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/Synergy.jpg",
        description: "Creative and Destructive energies align and compete, Abynnian trying to swallow and reform Aeternum."
    },

    {
        title: "Antares or Faust",
        year: 2024,
        category: "Traditional Art",
        medium: "Inkpen",
        type: "image",
        image: "images/Antares.jpg",
        description: "An OC of mine from a series I have planned call Grimoire."
    },

    {
        title: "Black & Red",
        year: 2023,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/Butterfly.jpg",
        description: "Abstract rendition of butterfly wings."
    },

    {
        title: "Party on Phantomz Ave",
        year: 2023,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/Phantomz.jpg",
        description: "Once a year on Phantomz Ave flesh and spirit become one."
    },

    {
        title: "No Sin",
        year: 2023,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/Sin.jpg",
        description: "If we are gods then there is no sin, we must simply answer for our actions"
    },

    {
        title: "Destroyer's Path",
        year: 2024,
        category: "Traditional Art",
        medium: "Inkpen",
        type: "image",
        image: "images/Destroyer.jpg",
        description: "Abynnian charges like a raging rhino, destruction never ceases."
    },

    {
        title: "Divine Math, Occult Sciences",
        year: 2024,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/Math.jpg",
        description: "Maths that come from gods, sciences that come from spirits. "
    },

    {
        title: "Esoterica",
        year: 2023,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/Esoteric.jpg",
        description: "A work displaying symbols of all three Aeternic forces: Aeternum, Abynnian, and Azmieri. A personal favorite."
    },

    {
        title: "Illucifer",
        year: 2026,
        category: "Digital Art",
        medium: "Photoshop",
        type: "image",
        image: "images/Illucifer.jpg",
        description: "Saint Lucien's fangs!"
    },

    {
        title: "Cunnilingus",
        year: 2023,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/Vagina.jpg",
        description: " A surreal depiction of an Azmieric being(Horror) stimulating a star like vagina."
    },

    {
        title: "Death of Eden, Birth of Gnosis",
        year: 2024,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/Skeleton.jpg",
        description: "When static Eden dies, fluid gnosis is born from its withered flowers."
    },

    {
        title: "The Neverending Battle",
        year: 2023,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/Battle.jpg",
        description: "The eternal battle between the old forces(Abrahamic Religions, archaic ways of thinking, religious dogma) vs The Beast of Aeternum(New Paradigms, Occult Forces, Aeternic Philosophy) These two forces battle within me, giving and losing ground, changing forms, but neither side ever completely dies. "
    },

    {
        title: "Horrorship",
        year: 2023,
        category: "Traditional Art",
        medium: " Mixed Media",
        type: "image",
        image: "images/Horror.jpg",
        description: "A Horror Mothership, for the rare occasion the Horrors want to travel in style. "
    },

    {
        title: "My Angels",
        year: 2024,
        category: "Traditional Art",
        medium: "Mixed Media",
        type: "image",
        image: "images/Angels.jpg",
        description: "Two Aeternic Angels, no names for now,  along with some sacred numbers and Aeternic symbols."
    },

     {
        title: "Angelic Ascent",
        year: 2026,
        category: "Digital Art",
        medium: "Adobe Illustrator",
        type: "image",
        image: "images/RedAngel.jpg",
        description: "Angels go up."
    }


];

// --------------------
// GET PAGE ELEMENTS
// --------------------

const gallery =
    document.getElementById("gallery");

const filterButtons =
    document.querySelectorAll(".filter-button");

const modal =
    document.getElementById("project-modal");

const modalImage =
    document.getElementById("modal-image");

const modalVideo =
    document.getElementById("modal-video");

const modalAudio =
    document.getElementById("modal-audio");

const modalGallery =
    document.getElementById("modal-gallery");

const modalTitle =
    document.getElementById("modal-title");

const modalMeta =
    document.getElementById("modal-meta");

const modalDescription =
    document.getElementById("modal-description");

const closeModal =
    document.getElementById("close-modal");

const previousProject =
    document.getElementById("previous-project");

const nextProject =
    document.getElementById("next-project");


let currentWorkIndex = 0;


// --------------------
// DISPLAY GALLERY
// --------------------

function displayWorks(filter) {

    gallery.innerHTML = "";

    const filteredWorks =
        filter === "All"
            ? works
            : works.filter(function(work) {
                return work.category === filter;
            });


    filteredWorks.forEach(function(work) {

        const card =
            document.createElement("article");

        card.classList.add("work-card");


        card.innerHTML = `
            <img
                class="work-image"
                src="${work.image}"
                alt="${work.title}"
            >

            <h3>${work.title}</h3>

            <p>${work.category}</p>
        `;


        // Open this project when its card is clicked

        card.addEventListener("click", function() {
            openProject(work);
        });


        gallery.appendChild(card);
    });
}


// --------------------
// OPEN PROJECT
// --------------------

function openProject(work) {

    currentWorkIndex = works.indexOf(work);


    // Hide every media type first

    modalImage.style.display = "none";
    modalVideo.style.display = "none";
    modalAudio.style.display = "none";
    modalGallery.style.display = "none";


    // Stop media from previous project

    modalVideo.pause();
    modalAudio.pause();


    // SINGLE IMAGE

    if (work.type === "image") {

        modalImage.src = work.image;
        modalImage.alt = work.title;

        modalImage.style.display = "block";
    }


    // VIDEO

    if (work.type === "video") {

        modalVideo.src = work.video;

        modalVideo.style.display = "block";
    }


    // AUDIO

    if (work.type === "audio") {

        modalImage.src = work.image;
        modalImage.alt = work.title;

        modalImage.style.display = "block";

        modalAudio.src = work.audio;

        modalAudio.style.display = "block";
    }


    // MULTI-IMAGE GALLERY

    if (work.type === "gallery") {

        modalGallery.innerHTML = "";

        work.images.forEach(function(imagePath) {

            const image =
                document.createElement("img");

            image.src = imagePath;
            image.alt = work.title;

            modalGallery.appendChild(image);
        });

        modalGallery.style.display = "flex";
    }


    // PROJECT INFORMATION

    modalTitle.textContent =
        work.title;

    modalMeta.textContent =
        `${work.year} · ${work.category} · ${work.medium}`;

    modalDescription.textContent =
        work.description;


    modal.classList.add("open");
}


// --------------------
// CLOSE PROJECT
// --------------------

closeModal.addEventListener("click", function() {

    modal.classList.remove("open");

    modalVideo.pause();
    modalAudio.pause();
});


// --------------------
// PREVIOUS PROJECT
// --------------------

previousProject.addEventListener("click", function() {

    currentWorkIndex--;

    if (currentWorkIndex < 0) {
        currentWorkIndex = works.length - 1;
    }

    openProject(works[currentWorkIndex]);
});


// --------------------
// NEXT PROJECT
// --------------------

nextProject.addEventListener("click", function() {

    currentWorkIndex++;

    if (currentWorkIndex >= works.length) {
        currentWorkIndex = 0;
    }

    openProject(works[currentWorkIndex]);
});


// --------------------
// FILTER BUTTONS
// --------------------

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const filter =
            button.dataset.filter;


        filterButtons.forEach(function(otherButton) {

            otherButton.classList.remove("active");

        });


        button.classList.add("active");

        displayWorks(filter);
    });
});


// --------------------
// INITIAL PAGE LOAD
// --------------------

displayWorks("All");