const youtubeCode = `<div class="video-container"><iframe id="youtube-video" src="https://www.youtube.com/embed/yzEIiaqVOOI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><a href="https://youtu.be/b_xoEakVeh0" target="_blank" class="btn btn-outline-primary btn-sm my-2">Video auf Youtube ansehen</a>`;

const googleMapsCode = `<a href="https://goo.gl/maps/Z1t3bdQncd1HciNBA" target="_blank" class="btn btn-outline-primary btn-sm m-1">Karte auf Google Maps ansehen</a><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10634.13040816924!2d16.3563511!3d48.2156181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62ff9e1f2e37ff30!2sProfireiniger%20Estera%20GmbH!5e0!3m2!1sde!2sat!4v1663682118345!5m2!1sde!2sat" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" id="google-maps" class="border-top border-bottom border-secondary"></iframe>`;

window.onload = function WindowLoad(event) {
  checkCookie();
};

const videoArea = document.querySelector("#videoReplacement");
const mapArea = document.querySelector("#mapsReplacement");
const cookieArea = document.querySelector("#cookieArea");

videoAccept.addEventListener("click", acceptCookieNotice);
mapAccept.addEventListener("click", acceptCookieNotice);

function setCookie(cookieName, cookieValue, exiryDays) {
  const currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + exiryDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + currentDate.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieList = decodedCookie.split(";");
  for (let eachCookie = 0; eachCookie < cookieList.length; eachCookie++) {
    let cookieItem = cookieList[eachCookie];
    while (cookieItem.charAt(0) == " ") {
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
    cookieArea.innerHTML = "";
    gaArea.innerHTML = gaCode;
  }
}

function showMapAndVideo() {
  mapArea.innerHTML = googleMapsCode;
  videoArea.innerHTML = youtubeCode;
}

function acceptCookieNotice() {
  setCookie(
    "profireinigerConfirmation",
    "userAcceptedProfireinigerCookies",
    30
  );
  showMapAndVideo();
  cookieArea.innerHTML = "";
}

function rejectCookieNotice() {
  console.log("Cookies rejected");
  setCookie("profireinigerConfirmation", "userRejectProfireinigerCookies", 30);
}
