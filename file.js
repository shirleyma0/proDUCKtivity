function pageDivider () {
    document.getElementById("warning").innerHTML ="";
    document.getElementById("results").innerHTML = "";
    var page = document.getElementById("bookpage").value;
    var day = document.getElementById("days").value;
    var ab= Number(page)
    var bc=Number(day)
    if(day== null|| day==""||page== null|| page==""){
	document.getElementById("warning").innerHTML ="*** Please input something! ***";
        return false;
    }
    else if (day== 0){
	    document.getElementById("warning").innerHTML ="*** No zeros! ***";
	return false;


    }
	else if ((isNaN(page))||(isNaN(day))){
		document.getElementById("warning").innerHTML ="*** Must input numbers! ***";
		return false;
	}
    else if (((page|| day)<= 0)){
        document.getElementById("warning").innerHTML ="*** Must input numbers greater than 0! ***";
        return false;
    }
    // else if((page === NaN)||(day === NaN){
    //     document.getElementById("warning").innerHTML ="*** Must have an input! ***";
    //     return false;
    // }
    else{


    document.getElementById("results").innerHTML = "You need to read about " + ((page/day)).toFixed(1)+" page(s) per day!";
}
}
