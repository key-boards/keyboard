var vibe = document.getElementById('vibe')

function playOrPause() {
	if(!vibe.paused && !vibe.ended) {
		vibe.pause();

	}
	else {
		vibe.play();
	}
}