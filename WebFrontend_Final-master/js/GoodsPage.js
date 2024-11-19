AOS.init({
    duration: 1200,
    once: false,
    easing: 'ease-in-out',
});

function scrollDown(){
    var elem = document.getElementById('elements');
    elem.scrollIntoView({behavior: 'smooth'});
}