let deliveryDisplay = document.getElementById("delivery_display");
let deliveryTerms = document.getElementById("delivery_terms");
let guaranteeDisplay = document.getElementById("guarantee_display");
let guaranteeTerms = document.getElementById("guarantee_terms");
let creditDisplay = document.getElementById("credit_display");
let creditTerms = document.getElementById("credit_terms");

deliveryDisplay.onclick = function(){
    guaranteeTerms.style.display="none";
    creditTerms.style.display="none";
    deliveryTerms.style.display="block";
}

guaranteeDisplay.onclick = function(){
    deliveryTerms.style.display="none";
    creditTerms.style.display="none";
    guaranteeTerms.style.display="block";
}

creditDisplay.onclick = function(){
    deliveryTerms.style.display="none";
    guaranteeTerms.style.display="none";
    creditTerms.style.display="block";
}
