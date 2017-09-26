
/**
 * Change video source with buttons
 * @type {Element}
 */
var englishTrailer = document.getElementById("source_video");
document.getElementById("english").className += "video_change_hover";
document.getElementById("english").addEventListener('click', function () {
    englishTrailer.src = 'NieR Automata Cinematic Trailer.mp4';
    englishTrailer.play();
});

document.getElementById("japan").addEventListener('click', function () {
    englishTrailer.src = 'NieR_Automata_ニーア オートマタ_ MOVIE 119450310.mp4';
    englishTrailer.play();
});

window.addEventListener("scroll",scrollDown);

function scrollDown() {
    var offset;
    if (screen.width <= 768){
        offset = 350;
    }
    else{
        offset = 280;
    }
    var home = document.getElementById("home");
    var video = document.getElementById("trailer");
    var about = document.getElementById("about")
    var contact = document.getElementById("contact");
    if ((document.body.scrollTop >= 0 && document.body.scrollTop < document.getElementById('source_video').offsetTop - offset)) {
        home.classList.add("active");
        video.classList.remove("active");
        about.classList.remove("active");
        contact.classList.remove("active");

    }

    else if ((window.innerHeight + document.body.scrollTop) >= document.body.offsetHeight) {
        home.classList.remove("active");
        video.classList.remove("active");
        about.classList.add("active");
        contact.classList.remove("active");
    }

    else if (document.body.scrollTop >= document.getElementById('source_video').offsetTop - offset && document.body.scrollTop < document.getElementById("information").offsetTop - offset) {
        home.classList.remove("active");
        video.classList.add("active");
        about.classList.remove("active");
        contact.classList.remove("active");
        englishTrailer.play();
    }
    else {
        home.classList.remove("active");
        video.classList.remove("active");
        about.classList.add("active");
        contact.classList.remove("active");
    }
}
function navbarResize() {


    window.addEventListener("scroll", function () {
        var navbar = document.getElementById("supernav");
        var offset;
        if (screen.width <= 768) {
            offset = 285;
        }
        else {
            offset = 10;
        }
        if (document.body.scrollTop >= 10 && offset == 10) {
            navbar.style.height = "59px";

        }
        else if (document.body.scrollTop >= 10 && offset == 285) {
            navbar.style.height = "285px";

        }
        else if (offset == 10) {
            navbar.style.height = "100px";
        }
        else {
            navbar.style.height = "343px";
        }
    });
}

window.onload = navbarResize();

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 2;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        scrollTo(element, to, duration - 2);
    }, 10);
}

document.getElementById('home').addEventListener( 'click',function () {
    var myDiv = document.getElementById("slide_container");
    var navbar = document.getElementById("supernav");
    var offset;
    if (screen.width <= 768){
        offset = 350;
        navbar.style.height = "343px";
    }
    else{
        offset = 80;
        navbar.style.height = "100px";
    scrollTo(document.body, myDiv.offsetTop - offset, 100);
}});

document.getElementById('trailer').addEventListener( 'click',function () {
    var myDiv = document.getElementById('source_video');
    var offset;
    if (screen.width <= 768){
        offset = 350;
    }
    else{
        offset = 80;
    }
    scrollTo(document.body, myDiv.offsetTop - offset, 100);
    englishTrailer.play();
});

document.getElementById('about').addEventListener('click',function () {
    var myDiv = document.getElementById("information");
    var offset;
    if (screen.width <= 768){
        offset = 350;
    }
    else{
        offset = 80;
    }
    scrollTo(document.body, myDiv.offsetTop - offset, 100);
});

document.getElementById('contact').addEventListener( 'click',function () {
    var myDiv = document.getElementById("foot");
    var offset;
    if (screen.width <= 768){
        offset = 350;
    }
    else{
        offset = 80;
    }

    scrollTo(document.body, myDiv.offsetTop - offset, 100);
});


/**
 * Slide show ====================================================================
 * @type {number}
 */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

document.getElementById("prev_arrow").addEventListener('click', function () {
    plusSlides(-1);
});
document.getElementById("next_arrow").addEventListener('click', function () {
    plusSlides(1);
});

document.getElementById("currentSlide1").addEventListener('click', function () {
    currentSlide(1);
});
document.getElementById("currentSlide2").addEventListener('click', function () {
    currentSlide(2);
});
document.getElementById("currentSlide3").addEventListener('click', function () {
    currentSlide(3);
});


// Get the modal
var story = document.getElementById('story');


// When the user clicks the button, open the modal
document.getElementById("story_btn").addEventListener('click', function () {
    story.style.display = "block";
});


// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].addEventListener('click', function () {
    story.style.display = "none";
});


// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function () {
    if (event.target == story) {
        story.style.display = "none";
    }
});

var character = document.getElementById('character');


// When the user clicks the button, open the modal
document.getElementById("character_btn").addEventListener('click', function () {
    character.style.display = "block";
});


// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[1].addEventListener('click', function () {
    character.style.display = "none";
});


// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function () {
    if (event.target == character) {
        character.style.display = "none";
    }
});

var trophy = document.getElementById('trophy');


// When the user clicks the button, open the modal
document.getElementById("trophy_btn").addEventListener('click', function () {
    trophy.style.display = "block";
    var dlc = document.getElementById("dlc");
    dlc.play();
    englishTrailer.pause();
});


// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[2].addEventListener('click', function () {
    trophy.style.display = "none";
    var dlc = document.getElementById("dlc");
    dlc.pause();
});


// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function () {
    if (event.target == trophy) {
        trophy.style.display = "none";
        var dlc = document.getElementById("dlc");
        dlc.pause();
    }
});

var boss = document.getElementById('boss');


// When the user clicks the button, open the modal
document.getElementById("boss_btn").addEventListener('click', function () {
    boss.style.display = "block";
});


// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[3].addEventListener('click', function () {
    boss.style.display = "none";
});


// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function () {
    if (event.target == boss) {
        boss.style.display = "none";
    }
});


