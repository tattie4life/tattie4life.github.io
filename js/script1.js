var modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function(btn){
	btn.onclick= function() {
		var modal = btn.getAttribute("data-modal");	
		document.getElementById(modal).style.display = "block";	
		
	};
});


var closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function(btn){
	btn.onclick = function(){
		var modal = (btn.closest(".modal").style.display = "none");
	}
});


var current_score = localStorage.getItem("current_score");
document.getElementById("score").innerHTML = current_score;

function quad_coin(){
	var currentVal = document.getElementById("score").innerHTML;
	var newVal = parseInt(currentVal) + 4;
	localStorage.setItem("current_score", newVal);
	document.getElementById("score").innerHTML = newVal;
}

function treble_coin(){
	var currentVal = document.getElementById("score").innerHTML;
	var newVal = parseInt(currentVal) + 3;
	localStorage.setItem("current_score", newVal);
	document.getElementById("score").innerHTML = newVal;
}

function double_coin(){
	var currentVal = document.getElementById("score").innerHTML;
	var newVal = parseInt(currentVal) + 2;
	localStorage.setItem("current_score", newVal);
	document.getElementById("score").innerHTML = newVal;
}

function one_coin(){
	var currentVal = document.getElementById("score").innerHTML;
	var newVal = parseInt(currentVal) + 1;
	localStorage.setItem("current_score", newVal);
	document.getElementById("score").innerHTML = newVal;
}



























