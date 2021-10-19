const SHAPE = document.querySelector("#shape");
const COLOR = document.querySelector("#colorPicker");
const SELECT = document.querySelector("#selectShape");

SHAPE.style.background = COLOR.value;

SELECT.addEventListener('change', () => {
	SHAPE.className = '';
	SHAPE.classList.add(SELECT.value);
});

COLOR.addEventListener('input', () => {
	SHAPE.style.background = COLOR.value;
});
