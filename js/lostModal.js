let lostModal = document.getElementById("get_lost_modal");

let lostBtn = document.getElementById("get_lost_btn");

let close = document.getElementsByClassName("closeModal")[0];

lostBtn.onclick = function () {
	lostModal.style.display = "block";
};

close.onclick = function () {
	lostModal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == lostModal) {
		lostModal.style.display = "none";
	}
};

let submit = document.getElementById("lost_submit");
let showModal = document.getElementById("show_modal");
let field = document.querySelectorAll(".field");

submit.onclick = function () {
		showModal.classList.add("wibro");
};