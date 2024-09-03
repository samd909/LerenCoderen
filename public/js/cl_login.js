const baseUrl = "http://127.0.0.1:5000";
const advancedUrl = baseUrl + "/login/";
const user = JSON.parse(localStorage.getItem("user"));

document.addEventListener("DOMContentLoaded", function () {
  console.log("login loaded");
  console.log(advancedUrl);
});

function handleSubmit(self) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var re_password = document.getElementById("re-password").value;

  if (username.length <= 0 || password.length <= 0) {
    alert("please fill in all fields!");
    return;
  }

  if (self.innerHTML === "LOGIN NOW") {
    makeServerRequest("fetch", "POST", "users", {
      email: username,
      secret_password: password,
    }).then((data) => {
      console.log(data);
      if (data && data.type !== "ERROR") {
        data.forEach((item, index) => {
          if (item.secret_password) {
            localStorage.setItem("user", JSON.stringify(item));
            // window.location.href = advancedUrl + "dashboard";
          } else {
            alert("incorrect password!");
          }
        });
      } else {
        alert("user not found!");
      }
    });
  } else if (self.innerHTML === "REGISTER NOW") {
    if (re_password.length <= 0) {
      console.log("please fill in all fields!");
      return;
    }

    if (password !== re_password) {
      console.log("please fill in all fields!");
      return;
    }
  }
}

function makeServerRequest(server, method, table, data, change) {
  return fetch(advancedUrl + server, {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      table: table,
      data: data,
      change: change,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.error(`Error during ${server} operation:`, error);
      throw error;
    });
}
