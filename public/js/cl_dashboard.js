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

function handleNav(target) {
  if (target === "logout") {
    if (confirm("Want to leave this page?")) {
      localStorage.removeItem("user");
      window.location.href = baseUrl;
    }
  }
}
