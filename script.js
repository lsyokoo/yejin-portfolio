const showResumeBtn = document.getElementById("showResumeBtn");
const resumeModal = document.getElementById("resumeModal");
const closeBtn = document.querySelector(".modal .close");

showResumeBtn.onclick = function () {
  resumeModal.style.display = "flex";
}

closeBtn.onclick = function () {
  resumeModal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === resumeModal) {
    resumeModal.style.display = "none";
  }
}
