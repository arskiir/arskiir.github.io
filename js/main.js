function addEmailToButton() {
    const email = document.getElementById("email-text").innerText;
    document.getElementById("email-me-btn").href = "mailto:" + email;
    console.log("added email");
}

const addContent = () => {
    const content = fetchContent("../content/content.json");
    console.log(content);
    // add avatar
    document.querySelector(".avatar").src = content.avatar;
    // add name
    document.querySelector("#first-name").innerText = content.name.first;
    document.querySelector("#last-name").innerText = content.name.last;
    // add job
    document.querySelector(".job").innerText = content.job;
    // add about
    document.querySelector(".about").innerText = content.about;
    // add email
    document.querySelector("#email-text").innerText = content.email;
    addEmailToButton();
    // add facebook info
    document.querySelector("#facebook").innerText = content.facebook.name;
    document.querySelector("#facebook").href = content.facebook.link;
    // add location info
    document.querySelector("#location").innerText = content.location.name;
    document.querySelector("#location").href = content.location.link;
};

const fetchContent = async (url) => {
    // fetch json
    const response = await fetch(url);
    console.log(response);
    return response;
};

document.addEventListener("DOMContentLoaded", () => {
    addContent();
});
