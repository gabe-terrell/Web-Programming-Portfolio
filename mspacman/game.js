function init() {
	// Set up canvas
	var canvas = document.getElementById('game_canvas')
	var ctx = canvas.getContext('2d');

	// Set up image
	var img = new Image();
	img.src = "pacman10-hp-sprite.png";

	// Draw Pac-Woman
	img.onload = function() {
		ctx.drawImage(img, 319, 0, 795 - 329, 244 - 106, 0, 0, 795 - 329, 244 - 106);
	}
}