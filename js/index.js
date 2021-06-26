let $loading = document.querySelector('.loading');
let $btnToggle = document.querySelector('.navbar-toggler');
let $navbar = document.querySelector('.navbar');
let $DropDown = document.querySelector('.Drop-Down');
let $DropDownUl = document.querySelector('.Drop-Down ul');
let $btnSlider = document.querySelectorAll('.btnSlider');
let $btnSliderDiv = document.querySelector('.child');
let $Toggle2 = document.querySelectorAll('.Toggle2');
let $btnShow = document.querySelectorAll('.btnShow');

//  loading
window.onload = function() {
    $loading.style.display = 'none';
};
// btn mune
$btnToggle.onclick = function() {
    $btnToggle.classList.toggle('active');
};

// navbar scroll
window.onscroll = function() {
    $navbar.classList.toggle('active', window.scrollY);
};
// navbar Drop Down
$DropDown.onclick = function() {
    $DropDown.classList.toggle('active');
};

//
$btnSlider.forEach((button) => {
    button.addEventListener('click', function() {
        $btnSlider.forEach((btn) => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

$btnSlider[0].onclick = function() {
    $btnSliderDiv.style.left = '0';
};
$btnSlider[1].onclick = function() {
    $btnSliderDiv.style.left = '-100%';
};
$btnSlider[2].onclick = function() {
    $btnSliderDiv.style.left = '-200%';
};

// divs show and hidden

$btnShow[0].onclick = function() {
    $Toggle2[0].classList.add('active');
    $Toggle2[1].classList.remove('active');
    $Toggle2[2].classList.remove('active');
    $Toggle2[3].classList.remove('active');
    $Toggle2[4].classList.remove('active');
    $Toggle2[5].classList.remove('active');
};
$btnShow[1].onclick = function() {
    $Toggle2[1].classList.add('active');
    $Toggle2[0].classList.remove('active');
    $Toggle2[2].classList.remove('active');
    $Toggle2[3].classList.remove('active');
    $Toggle2[4].classList.remove('active');
    $Toggle2[5].classList.remove('active');
};
$btnShow[2].onclick = function() {
    $Toggle2[2].classList.add('active');
    $Toggle2[0].classList.remove('active');
    $Toggle2[1].classList.remove('active');
    $Toggle2[3].classList.remove('active');
    $Toggle2[4].classList.remove('active');
    $Toggle2[5].classList.remove('active');
};
$btnShow[3].onclick = function() {
    $Toggle2[3].classList.add('active');
    $Toggle2[0].classList.remove('active');
    $Toggle2[1].classList.remove('active');
    $Toggle2[2].classList.remove('active');
    $Toggle2[4].classList.remove('active');
    $Toggle2[5].classList.remove('active');
};
$btnShow[4].onclick = function() {
    $Toggle2[4].classList.add('active');
    $Toggle2[0].classList.remove('active');
    $Toggle2[1].classList.remove('active');
    $Toggle2[2].classList.remove('active');
    $Toggle2[3].classList.remove('active');
    $Toggle2[5].classList.remove('active');
};
$btnShow[5].onclick = function() {
    $Toggle2[5].classList.add('active');
    $Toggle2[0].classList.remove('active');
    $Toggle2[1].classList.remove('active');
    $Toggle2[2].classList.remove('active');
    $Toggle2[3].classList.remove('active');
    $Toggle2[4].classList.remove('active');
};