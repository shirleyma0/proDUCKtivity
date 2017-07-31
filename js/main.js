$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);

	var hidden = false;

	setInterval(function(){
	    document.getElementById("image").style.visibility= hidden ? "visible" : "hidden";
	    // hidden = !hidden;
	},3000);
});
var myMood= document.getElementById("mood");
var images=[
    "img/duck.png",
    "img/duckcopy.png"
];

function change(){
    myMood.src= images.reverse()[0];
}

setInterval(change,500);
