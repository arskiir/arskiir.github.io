const fetchContent = async (url) => {
    // fetch json
    const response = await fetch(url);
    console.log(response);
    return response;
};
const CONTENT = fetchContent("../content/content.json");

function addEmailToButton(email) {
    // add email to the CONTACT ME button.href
    document.getElementById("email-me-btn").href = "mailto:" + email;
    console.log("added email");
}

const addContent = () => {
    console.log(CONTENT);
    // add avatar
    document.querySelector(".avatar").src = CONTENT.avatar;
    // add name
    document.querySelector("#first-name").innerText = CONTENT.name.first;
    document.querySelector("#last-name").innerText = CONTENT.name.last;
    // add job
    document.querySelector(".job").innerText = CONTENT.job;
    // add about
    document.querySelector(".about").innerText = CONTENT.about;
    // add email
    document.querySelector("#email-text").innerText = CONTENT.email;
    addEmailToButton(CONTENT.email);
    // add facebook info
    document.querySelector("#facebook").innerText = CONTENT.facebook.name;
    document.querySelector("#facebook").href = CONTENT.facebook.link;
    // add location info
    document.querySelector("#location").innerText = CONTENT.location.name;
    document.querySelector("#location").href = CONTENT.location.link;
};

document.addEventListener("DOMContentLoaded", () => {
    addContent();
});
