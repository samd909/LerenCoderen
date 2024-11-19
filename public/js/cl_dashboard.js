const baseUrl = window.location.href.split("/").slice(0, 3).join("/");
const advancedUrl = baseUrl + "/dashboard";

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("user")) {
    window.location.href = baseUrl;
  } else {
    document.getElementById("title").innerHTML = `Welcome to the Dashboard : ${
      JSON.parse(localStorage.getItem("user")).label
    }`;
  }
});

handleNav("home");
function handleNav(target) {
  if (target === "logout") {
    if (confirm("Want to leave this page?")) {
      localStorage.removeItem("user");
      window.location.href = baseUrl;
    }
  } else {
    const sections = document.querySelectorAll(".main-content > section");
    sections.forEach((section) => {
      section.classList.remove("active");
      section.style.display = "none";
    });

    const activeSection = document.getElementById(target);
    if (activeSection) {
      activeSection.style.display = "block";
      activeSection.classList.add("active");
      activeSection.style.display = "flex";
    } else {
      console.error(`Section with id "${target}" does not exist.`);
    }
  }
}
