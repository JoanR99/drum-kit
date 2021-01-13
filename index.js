function playSound(key) {
	switch (key) {
		case 'w':
			var audio = createAudio('crash');
			audio.play();
			break;

		case 'a':
			var audio = createAudio('kick-bass');
			audio.play();
			break;

		case 's':
			var audio = createAudio('snare');
			audio.play();
			break;

		case 'd':
			var audio = createAudio('tom-1');
			audio.play();
			break;

		case 'j':
			var audio = createAudio('tom-2');
			audio.play();
			break;

		case 'k':
			var audio = createAudio('tom-3');
			audio.play();
			break;

		case 'l':
			var audio = createAudio('tom-4');
			audio.play();
			break;
	}
}

function createAudio(name) {
	return new Audio(`sounds/${name}.mp3`);
}

function animateKey(key) {
	let animate = document.querySelector(`.${key}`);
	animate.classList.add('pressed');

	setTimeout(() => {
		animate.classList.remove('pressed');
	}, 100);
}

const keys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

document.addEventListener('keypress', (e) => {
	if (!keys.includes(e.key)) return;
	playSound(e.key);
	animateKey(e.key);
});
