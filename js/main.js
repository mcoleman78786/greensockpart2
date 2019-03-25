(() => {

	let badge = document.querySelector('img');

	function animImage() {
		TweenMax.to(badge, 0.7, {scakeX: 1.025, scaleY: 1.025, rotation: 50, ease:Elastic.easeInOut});
	}

	function animFooterText() {
		TweenMax.to('h3', 0.7, {scaleX: 2, scaleY: 2, ease:Elastic.easeOut});
	}

	// animImage();

	badge.addEventListener('mouseover', animImage);

})();