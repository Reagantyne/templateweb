const track = document.getElementById("senarai-gambar");

window.onmousemove = e => {
	if(track.dataset.mouseDownAt === "0") return;
	
	const dMouse = parseFloat(track.dataset.mouseDownAt) - e.clientX, 
		dvhMax = window.innerWidth / 2;
		  
	const percentage = (dMouse / dvhMax) * -100;
		nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
		
	track.dataset.percentage = nextPercentage;
	track.style.transform = `translate(${nextPercentage}%, -50%)`;
	
	for(const img of track.getElementsByClassName("gambarnya")) {
		img.style.objectPosition = `${nextPercentage + 100}% -50%`;
	}
}

window.onmousedown = e => {
	track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
	track.dataset.mouseDownAt = "0";
	track.dataset.prevPercentage = track.dataset.percentage;
}