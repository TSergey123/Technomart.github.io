var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
	modal.style.display = "block";
};

span.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};


function minRangeOut(val) {
    document.getElementById("min_price_input").value = val;
}

function maxRangeOut(val) {
    document.getElementById("max_price_input").value = val;
}   
