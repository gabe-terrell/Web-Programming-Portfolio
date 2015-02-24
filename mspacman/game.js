function init() {
	// Set up canvas
	var canvas = document.getElementById('game_canvas')
	var ctx = canvas.getContext('2d');

	// Set up image
	var img = new Image();
	img.src = "pacman10-hp-sprite.png";

	// Draw Image
	img.onload = function() {
		// Draw Backdrop
		ctx.drawImage(img, 319, 0, 466, 138, 400 - 233, 0, 795 - 329, 244 - 106);
		// Draw Pac-Woman
		ctx.drawImage(img, 80, 20, 15, 17, 400 - 197, 30, 15, 15)
	}
}