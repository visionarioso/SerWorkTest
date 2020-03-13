var btn = document.getElementById("btn-submit")
var firstState = document.getElementById("primary-state")
var secondState = document.getElementById("second-state")

btn.addEventListener('click', toggleDiv)

function toggleDiv(){
	console.log('click')
	firstState.classList.add('d-none')
	secondState.classList.remove('d-none')
}