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
})



//var challenge_points = 2;

//function score_2() {
//var parseInt()
//var new_total = c_score + challenge_points;
//localStorage.setItem("current_score", new_total);}






















