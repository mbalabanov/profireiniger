const youtubeCode = `<div class="video-container"><iframe id="youtube-video" src="https://www.youtube.com/embed/b_xoEakVeh0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br/><a href="https://youtu.be/b_xoEakVeh0" target="_blank" class="btn btn-outline-primary btn-sm m-2">Video auf Youtube ansehen</a>`;
const googleMapsCode = `<a href="https://goo.gl/maps/SgLF8jXq81k6paHz9" target="_blank" class="btn btn-outline-primary btn-sm m-1">Karte auf Google Maps ansehen</a><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.2232840291651!2d16.35574097705783!3d48.215878290209524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07bf0e633187%3A0xcfe7efbb531938c8!2sFrankgasse%206%2C%201090%20Wien%2C%20%C3%96sterreich!5e0!3m2!1sde!2sbg!4v1654179609184!5m2!1sde!2sbg" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="google-maps" class="border-top border-bottom border-secondary"></iframe></div>`;

window.onload = function WindowLoad(event) {
    checkCookie();
}

const videoArea = document.querySelector("#videoReplacement");
const mapArea = document.querySelector("#mapsReplacement");
const cookieArea = document.querySelector("#cookieArea");

videoAccept.addEventListener("click", acceptCookieNotice);
mapAccept.addEventListener("click", acceptCookieNotice);

function setCookie(cookieName, cookieValue, exiryDays) {
    const currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (exiryDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + currentDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieList = decodedCookie.split(';');
    for (let eachCookie = 0; eachCookie < cookieList.length; eachCookie++) {
        let cookieItem = cookieList[eachCookie];
        while (cookieItem.charAt(0) == ' ') {
            cookieItem = cookieItem.substring(1);
        }
        if (cookieItem.indexOf(name) == 0) {
            return cookieItem.substring(name.length, cookieItem.length);
        }
    }
    return "notAccepted";
}

function checkCookie() {
    let accepted = getCookie("profireinigerConfirmation");
    if (accepted === "userAcceptedProfireinigerCookies") {
        showMapAndVideo();
        cookieArea.innerHTML = '';
        gaArea.innerHTML = gaCode;
    }
}

function showMapAndVideo() {
    mapArea.innerHTML = googleMapsCode;
    videoArea.innerHTML = youtubeCode;
}

function acceptCookieNotice() {
    setCookie("profireinigerConfirmation", "userAcceptedProfireinigerCookies", 30);
    showMapAndVideo();
    cookieArea.innerHTML = '';
}

function rejectCookieNotice() {
    console.log('Cookies rejected');
    setCookie("profireinigerConfirmation", "userRejectProfireinigerCookies", 30);
}