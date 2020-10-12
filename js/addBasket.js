// // let addBasket = document.getElementById("basket_add");
// let addBasket = document.getElementsByClassName("basket_add");

// let valueBasket = document.getElementById("basket_value");
// let i = 11;

// addBasket.onclick = function () {
// 	valueBasket.innerHTML = "Корзина: " + i++;
// };
let btnBasket = document.querySelectorAll(".basket_add");
let valueBasket = document.getElementById("basket_value");
let basketBlock = document.getElementById("basketBlock");

let countBasket = +/\d+/.exec(valueBasket.textContent);
for (let i = 0; i < btnBasket.length; i++) {
	btnBasket[i].addEventListener("click", function (evt) {
		console.log(evt);
		countBasket++;

		valueBasket.textContent = "Корзина: " + countBasket;
		basketBlock.style.background = "#EE3643";
	});
}
