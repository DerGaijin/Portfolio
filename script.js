// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  AttachHeaderContent();
};

function AttachHeaderContent() {
  var HeaderContent = document.getElementById("HeaderContent");

  if (window.scrollY >= 300) {
    HeaderContent.classList.add("HeaderContentFixed");
  } else {
    HeaderContent.classList.remove("HeaderContentFixed");
  }
}
