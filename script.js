let $modalContainer = document.getElementById("modal-container");
let $showModalBtn = document.getElementById("showModalBtn");
let $closeBtn = document.querySelector(".close-btn");

// show modal
function showModal() {
  $modalContainer.style.display = "block";
}

$showModalBtn.addEventListener("click", showModal);

// hide modal
function hideModal() {
  $modalContainer.style.display = "none";
}

$closeBtn.addEventListener("click", hideModal);

// close when click outside modal
function closeOutsideModal(e) {
  if (e.target == $modalContainer) {
    $modalContainer.style.display = "none";
    // alert("Are You Sure You Want To Close ?");
  }
}
window.addEventListener("click", closeOutsideModal);

// show modal when pressing enter
window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    showModal();
  }
});

// close modal when pressing escape
window.addEventListener("keyup", (e) => {
  if (e.keyCode === 27) {
    hideModal();
  }
});
