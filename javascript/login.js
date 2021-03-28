var santri_wali = document.getElementById("santri_wali"),
alumni = document.getElementById("alumni"),
guest = document.getElementById("guest"),
indicator1 = document.getElementById("indicator-login"),
indicator2 = document.getElementById("indicator-signup"),
signForm = document.getElementById("sign-log"),
logForm = document.getElementById("form-log"),
sign_santri = document.getElementById("sign-santri_wali"),
sign_alumni = document.getElementById("sign-alumni");

function santriWali() {
    indicator1.style.transform = "translateX(13px)";
    santri_wali.style.visibility = "visible";
    santri_wali.style.opacity = "1";
    alumni.style.visibility = "hidden";
    alumni.style.opacity = "0";
    guest.style.visibility = "hidden";
    guest.style.opacity = "0";
}

function alumniForm() {
    indicator1.style.transform = "translateX(134.5px)";
    santri_wali.style.visibility = "hidden";
    santri_wali.style.opacity = "0";
    alumni.style.visibility = "visible";
    alumni.style.opacity = "1";
    guest.style.visibility = "hidden";
    guest.style.opacity = "0";
}
function guestForm() {
    indicator1.style.transform = "translateX(255px)";
    santri_wali.style.visibility = "hidden";
    santri_wali.style.opacity = "0";
    alumni.style.visibility = "hidden";
    alumni.style.opacity = "0";
    guest.style.visibility = "visible";
    guest.style.opacity = "1";
}
function sign_FormData() {
    signForm.style.transform = "translateY(-738px)";
    logForm.style.transform = "translateX(-400px)";
}
function login_formData() {
    signForm.style.transform = "translateY(738px)";
    logForm.style.transform = "translateX(0)";
}
function signSantri() {
    indicator2.style.transform = "translateX(13px)";
    sign_santri.style.visibility = "visible";
    sign_santri.style.opacity = "1";
    sign_alumni.style.visibility = "hidden";
    sign_alumni.style.opacity = "0";
}
function signAlumni() {
    indicator2.style.transform = "translateX(173px)";
    sign_santri.style.visibility = "hidden";
    sign_santri.style.opacity = "0";
    sign_alumni.style.visibility = "visible";
    sign_alumni.style.opacity = "1";
}



//img slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("img-slide");
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