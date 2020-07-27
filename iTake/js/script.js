$(document).ready(function () {
	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	};

	testWebP(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		}
		else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	// languages
	const languages = document.querySelector(".languages");
	languages.addEventListener('click', (e) => {
		languages.classList.toggle('open');
	})

	window.addEventListener('click', function (e) {
		for (const select of document.querySelectorAll('.languages')) {
			if (!select.contains(e.target)) {
				select.classList.remove('open');
			}
		}
	});

	// burger
	$('.menu__burger').click(function (e) {
		$('.menu__burger, .menu__body').toggleClass('active');
	});
});
