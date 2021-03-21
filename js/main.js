function addAge() {
  let today = new Date();
  const bd = new Date(2000, 6, 29);
  let diffInDays = Math.floor(
    (today.getTime() - bd.getTime()) / (1000 * 3600 * 24)
  );
  let years = Math.floor(diffInDays / 365);

  document.getElementById("age").innerText = years;
}

function addEmail() {
  const email = document.getElementById("email-text").innerText;
  document.getElementById("email-me-btn").href = "mailto:" + email;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  addAge();
  addEmail();
});
