//create todo item
function newElement(){
    var li =document.createElement("li");

}




//create close button

var myNodeList = document.getElementsByClassName()
var i;
for( i=0; i < myNodeList.length; i++){
    var span = document.createElement("spain");
    var txt = document.createElement("\u000D7");
    span.classname ="close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
//click close button
var close = document.getElementsByClassName("close");
var i;
for(i=0; i< close.length; i++){
    close[i] .onClick = function () {
        var div = this.parentElement;
        div.style.display ="none";
    };
}

//check to do as complete
var list=document.querySelector("ul");
list.addEventListener(
    "click",
    function (e){
    if(e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
    }
},
false
);