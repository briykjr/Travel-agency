//show nav using jQuery
// $( function() {
//     $('.open').on('click', function() {
//         $('.nav-list').addClass('active');
//     });
//     $('.close').on('click', function() {
//         $('.nav-list').removeClass('active');
//     });
// })

// Show nav using Vanilla js
const selectOpen = document.querySelector('.open');
const selectClose = document.querySelector('.close');
const nav = document.querySelector('.nav-list');
selectOpen.addEventListener('click', function(e) {
    nav.classList.add('active');
    e.preventDefault();
});
selectClose.addEventListener('click',  (e) => {
    nav.classList.remove('active');
    e.preventDefault();
});