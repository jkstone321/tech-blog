const newFormHandler = async function (event) {
  event.preventDefault();

  const titleEl = document.querySelector('input[name="post-title"]');
  const bodyEl = document.querySelector('textarea[name="post-body"]');

  const title = titleEl.value;
  const body = bodyEl.value;

  await fetch(`/api/post`, {
    // Create the functionality to help create the buttons for your website.
    method: "POST",
    body: JSON.stringify({ title, body }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/dashboard");
};

document.querySelector("#new-post-form");
document.addEventListener("submit", newFormHandler);
