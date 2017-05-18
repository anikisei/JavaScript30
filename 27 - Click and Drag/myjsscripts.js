const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

function handleMousedown(e) {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;  
};

function unClicked() {
    isDown = false;
    slider.classList.remove('active');
};

function mouseScroll(e){
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x- startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
};

slider.addEventListener('mousedown', handleMousedown);

slider.addEventListener('mouseleave', unClicked);

slider.addEventListener('mouseup', unClicked);

slider.addEventListener('mousemove', mouseScroll);

