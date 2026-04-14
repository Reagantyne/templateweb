const track = document.getElementById("senarai-gambar");

window.onmousedown = e => {
	track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
	track.dataset.mouseDownAt = "0";
	track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
	if(track.dataset.mouseDownAt === "0") return;
	
	const dMouse = parseFloat(track.dataset.mouseDownAt) - e.clientX, 
		dvhMax = window.innerWidth / 2;
		  
	const percentage = (dMouse / dvhMax) * -100;
		nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
		
	track.dataset.percentage = nextPercentage;
	track.animate({
		transform: `translate(${nextPercentage}%, -50%)`
		}, {
				duration: 1200, fill: "forwards"
			});
	
	for(const img of track.getElementsByClassName("gambarnya")) {
		img.animate({
			objectPosition: `${nextPercentage + 100}% -50%`
		}, {
			duration: 1200, fill: "forwards"
		});
	}
}