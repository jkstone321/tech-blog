const loginFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector(".username-input-login");
  const password = document.querySelector(".password-input-login");

  const response = await fetch("/api/user/login", {
    // Create the functionality to help create the buttons for your website.
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to login");
  }
};

document.querySelector("#login-form");
document.addEventListener("submit", loginFormHandler);
