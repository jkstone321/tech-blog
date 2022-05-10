const commentFormHandler = async function (event) {
  event.preventDefault();

  const commentBodyEl = document.querySelector('input[name="comment-body"]');
  const postId = document.getElementsByTagName("h2")[0].id;

  const commentBody = commentBodyEl.value;

  await fetch("../api/comment/", {
    method: "POST",
    body: JSON.stringify({ postId, commentBody }),
    headers: { "Content-Type": "application/json" },
  });
};

document.querySelector("#new-comment-form");
document.addEventListener("submit", commentFormHandler);
