function addNavListener(id) {
	document.getElementById(id).addEventListener("mouseover", function(){
		document.getElementById(id).style.backgroundColor = "black";
		document.getElementById(id).getElementsByTagName("p")[0].style.color = "white";
	});
	document.getElementById(id).addEventListener("mouseout", function(){
		document.getElementById(id).style.backgroundColor = document.body.style.backgroundColor;
		if(id == "activePage")
		{
			document.getElementById(id).getElementsByTagName("p")[0].style.color = "black";
		}
	});
	document.getElementById(id).addEventListener("click", function(){
		window.location = document.getElementById(id).getElementsByTagName("a")[0].href;
	});
}