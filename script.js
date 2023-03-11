let $modalContainer = document.getElementById("modal-container");
let $modalContent = document.querySelector(".modal-content");
let $showModalBtn = document.getElementById("showModalBtn");
let $closeBtn = document.querySelector(".close-btn");
let $closeModalBtn = document.querySelector(".close-modal-btn");
let $yes = document.querySelector(".yes");
let $no = document.querySelector(".no");

// show modal
function showModal() {
  $modalContainer.style.display = "block";
  $modalContent.style.opacity = "1";
}

$showModalBtn.addEventListener("click", showModal);

// hide modal
function hideModal() {
  $modalContainer.style.display = "none";
}

// close when click outside modal
function closeOutsideModal(e) {
  if (e.target == $modalContainer) {
    $modalContainer.style.display = "none";
    $closeModalBtn.style.display = "none";
  }
}

window.addEventListener("click", closeOutsideModal);

// show modal inside modal
$closeBtn.addEventListener("click", function () {
  $closeModalBtn.style.display = "block";
  $modalContent.style.opacity = ".5";
});

$yes.onclick = function () {
  $modalContainer.style.display = "none";
  $closeModalBtn.style.display = "none";
};

$no.onclick = function () {
  $closeModalBtn.style.display = "none";
  $modalContent.style.opacity = "1";
};

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
