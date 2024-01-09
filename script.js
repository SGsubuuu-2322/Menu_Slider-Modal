const toggle = document.getElementById("toggle");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modalContainer = document.getElementById("modal");

toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

openBtn.addEventListener("click", () =>
  modalContainer.classList.add("show-modal")
);
closeBtn.addEventListener("click", () =>
  modalContainer.classList.remove("show-modal")
);
