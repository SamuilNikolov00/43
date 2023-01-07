import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(changeTitle,3000);
});

function changeTitle(){
  document.title = "One new message";
}
