const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.getElementById("username-input-login");
  const passwordEl = document.getElementById("password-input-login");

  const username = usernameEl.value;
  const password = passwordEl.value;

  const response = await fetch("/api/user/login", {
    // Create the functionality to help create the buttons for your website.
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to login");
  }
};

document.querySelector("#login-form");
document.addEventListener("submit", loginFormHandler);
