let purchaseModal = document.getElementById("my_purchase_modal");

let purchaseBtns = document.querySelectorAll(".basket_add");

let purchaseClose = document.getElementsByClassName("purchase-close")[0];

let purchasebtnCloses = document.querySelectorAll(".purchase-btn");

for (let purchaseBtn of purchaseBtns){
	purchaseBtn.onclick = function () {
	purchaseModal.style.display = "block";

};
}

purchaseClose.onclick = function () {
	purchaseModal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == purchaseModal) {
		purchaseModal.style.display = "none";
	}
};

for (let purchasebtnClose of purchasebtnCloses){
purchasebtnClose.onclick = function () {
	purchaseModal.style.display = "none";
};
}

