
/*!
    Pinboard Template
    Created on date: 11/10/2023
    Built on date: 11/16/2023
*/


// ## LOADER
window.addEventListener('load', () => {
    setTimeout( () => {
        document.querySelector(".loader-warpper").classList.toggle("loader-warpper-hide");
    }, 2500);
});


// ## NAVBAR MOBILE
// DROPDOWN AVATAR USER
function dropdownAvatarUser() {
    document.getElementById("dropdownAvatarUser").classList.toggle("dropdownAvatarUserToggle")
}
// SEARCH MOBILE
function searchMobile() {
    document.getElementById("searchMobile").classList.toggle("searchMobileToggle")
}