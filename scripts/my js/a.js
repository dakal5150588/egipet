(window.onload=function(){
	var paragraphs=document.getElementsByTagName("p");
	

	console.log(paragraphs);
	

	for (var i=1; i<paragraphs.length;i++){
		paragraphs[i].style.color="red";

	}setTimeout(func,9500);
})();


window.onload=function(){
	var div1=document.getElementsById("div1");
	var p1=document.createElement ("p");
	p1.inerHTML="paragraph";
	div1.appendChild(p1);
    div1.removeChild(div1.childNodes [0]);
    var div2=document.getElementsById("div2");
    var p2=document.createElement("p");
    p2.innerHTML="Paragraph 2 insertBefore";
    document.body.insertBefore(p2,div2);
}
function removeP(){
	var div1=document.getElementsById("div1");
	div1.removeChild(div1.childNodes [0]);
}


// appendChild ----добавить дочерний элемент
//  insertBefore   -добавить элеент перед указанным
//  removeChild    -удаление элемента
//  replaceChild  -замена одного элемента на другой