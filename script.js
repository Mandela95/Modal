let $showModalBtns = document.querySelectorAll(".button");
let $modals = document.querySelectorAll(".modal");
let $modalContent = document.querySelector(".modal-content");
let $closeBtn = document.querySelectorAll(".close-btn");
let $nestedModal = document.querySelectorAll(".nested-modal");
let $yes = document.querySelector(".yes");
let $no = document.querySelector(".no");

// open modal when button clicked
$showModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = document.querySelector(btn.dataset.modal);
    modal.style.display = "block";
  });
});

// close any modal when click X
$closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.style.display = "none";
  });
});

// close any modal when click outside modal content
$modals.forEach((modal) => {
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});

// show modal inside modal
// didn't work ?????
$closeBtn.onclick = function () {
  $nestedModal.style.display = "block";
};

$yes.onclick = function () {
  $nestedModal.style.display = "none";
  document.querySelector(".modal").style.display = "none";
};

$no.onclick = function () {
  $nestedModal.style.display = "none";
};

// show modal when pressing enter
window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    document.querySelector(".modal").style.display = "block";
  }
});

// close any modal when pressing escape
$modals.forEach((modal) => {
  window.addEventListener("keyup", (e) => {
    if (e.keyCode === 27) {
      modal.style.display = "none";
    }
  });
});
