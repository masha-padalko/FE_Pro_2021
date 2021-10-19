let shape = document.querySelector("#shape");
let colorPicker = document.querySelector("#colorPicker");
let selectShape = document.querySelector("#selectShape");

shape.style.background = colorPicker.value;

selectShape.addEventListener("change", function(){
	shape.className = '';
	shape.classList.add(this.value);
});

colorPicker.addEventListener("change", function(){
	shape.style.background = colorPicker.value;
});
