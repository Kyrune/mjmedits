// * Scroll to top functionality
topAnchor = document.getElementById('top-anchor');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topAnchor.style.display = 'block';
    } else {
        topAnchor.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// * Adds delay to blue-elements' visibility to remove a visual glitch.
try {
    function opacityTimer() {
        setTimeout(() => {
            document.querySelector(".subsection__blue-elements--top").classList.remove("fade-in");
            document.querySelector(".subsection__blue-elements--bottom").classList.remove("fade-in");
        }, 600);
    }
    opacityTimer();
} catch (e) {
    console.log(e);
}
