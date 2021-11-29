var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul=document.querySelector("ul");


function inputLen(){
	return input.value.length;
}

function addClick(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value="";


}


button.addEventListener("click" , function(){
	if( inputLen > 0){
		addClick();
	}
})

input.addEventListener("keypress" , function(event){
	if(inputLen>0 && event.which===13){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value="";
}

})




function moveTo(direction){
var whathappen;
switch(direction){
    case "forward":
whathappen="xyz";
break;
case "backward":
whathappen="xy";
break;
case "left":
whathappen="xy";
}
return whathappen;
}
    





