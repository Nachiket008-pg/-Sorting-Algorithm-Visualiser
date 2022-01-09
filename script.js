const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = 20) {
	
//for loop to generate 20 bars
for (let i = 0; i < num; i += 1) {

	// To generate random values from 1 to 100
	const value = Math.floor(Math.random() * 100) + 1;
	

	const bar = document.createElement("div");
	bar.classList.add("bar");

	bar.style.height = `${value * 3}px`;

	bar.style.transform = `translateX(${i * 30}px)`;
	
	const barLabel = document.createElement("label");

	barLabel.classList.add("bar_id");
	barLabel.innerHTML = value;

	bar.appendChild(barLabel);

	container.appendChild(bar);
}
}

async function SelectionSort(delay = 300) {
let bars = document.querySelectorAll(".bar");

var min_idx = 0;
for (var i = 0; i < bars.length; i += 1) {

	min_idx = i;

	bars[i].style.backgroundColor = "#c771a9";
	for (var j = i + 1; j < bars.length; j += 1) {

	
	bars[j].style.backgroundColor = "#b1ff6e";
		
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 300)
	);

	var val1 = parseInt(bars[j].childNodes[0].innerHTML);

	var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		

	if (val1 < val2) {
		if (min_idx !== i) {

		bars[min_idx].style.backgroundColor = " #597394";
		}
		min_idx = j;
	} else {

	
		bars[j].style.backgroundColor = " #8eff78";
	}
	}


	var temp1 = bars[min_idx].style.height;
	var temp2 = bars[min_idx].childNodes[0].innerText;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	bars[i].childNodes[0].innerText = temp2;
	
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 300)
	);

	bars[min_idx].style.backgroundColor = " #a38921";


	bars[i].style.backgroundColor = " #ffc587";
}

document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#8c8a88";


document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#a7bdc9";
}


generatebars();


function generate()
{
window.location.reload();
}


function disable()
{

document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
