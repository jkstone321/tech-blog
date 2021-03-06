const signupFormHandler = async function (event) {
  event.preventDefault();

  const username = document.getElementById("username-input-signup").value;
  const password = document.getElementById("password-input-signup").value;

  // const username = usernameEl.value;
  // const password = passwordEl.value;
  console.log(username, password);
  const response = await fetch("/api/user", {
    // Create the functionality to help create the buttons for your website.
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    console.log(username, password);
    alert("Failed to sign up");
  }
};

document.querySelector("#signup-form");
document.addEventListener("submit", signupFormHandler);
