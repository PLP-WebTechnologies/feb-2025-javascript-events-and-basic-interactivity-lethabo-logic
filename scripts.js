/* script.js */
document.getElementById("clickMe").addEventListener("click", function () {
  alert("Button clicked!");
});

const box = document.getElementById("hoverBox");
box.addEventListener("mouseenter", () => (box.style.backgroundColor = "lightblue"));
box.addEventListener("mouseleave", () => (box.style.backgroundColor = ""));

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("You found the secret double-click!");
});

const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {
  this.classList.toggle("hotpink");

  if (this.classList.contains("hotpink")) {
    this.textContent = "Color Changed!";
  } else {
    this.textContent = "Change My Color";
  }
});


const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach((el) => (el.style.display = "none"));
    document.getElementById(tab.dataset.target).style.display = "block";
  });
});

const images = [
  "https://via.placeholder.com/150/0000FF",
  "https://via.placeholder.com/150/FF0000",
  "https://via.placeholder.com/150/00FF00"
];
let imgIndex = 0;
document.getElementById("nextImage").addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById("galleryImage").src = images[imgIndex];
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  if (name === "") {
    feedback.textContent = "Name is required.";
    return;
  }

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
});

document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    document.querySelectorAll(".tab-content").forEach(el => el.style.display = "none");
    document.getElementById(tab.dataset.target).style.display = "block";
  });
});

