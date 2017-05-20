window.onload = function() {
	var imagePos = 0;
	var source = document.getElementById("source");
	var sound = document.getElementById("snd");


	var container = document.querySelector('.contents');
	var instrucciones = document.querySelector('.instrucciones');
	
	var names = [ 'LosChivitosquenoQuerianAndar', 'ArbolMagico',
	  			'LaHormigaylaCigarra', 'CiempiesBailarin',
	  			'LaTortugayelMono', 'TatuysuAbrigoMagico',
	  			'GatoEnamorado', 'ElTerribleProblemadeMurcielago',
	  			'elvestidonuevodelemperador' ];

	var name = names[imagePos];

	document.body.style.backgroundImage = "url('images/" + name + ".png')";

	
	source.src = "sounds/" + name + ".mp3";
	sound.load();

	
	document.addEventListener('rotarydetent', rotaryEventHandler);
	document.addEventListener('tizenhwkey', function(e) {
		if (e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
			}
		}
	});

	function rotaryEventHandler(event) {

		var direction = event.detail.direction;

		if (direction === "CW") {
			imagePos++;
			if (imagePos >= names.length) {
				imagePos = 0;
			}

		} else if (direction === "CCW") {
			imagePos--;
			if (imagePos < 0) {
				imagePos = names.length - 1;
			}
		}

		name = names[imagePos];
		
		name = name.trim();
		
		document.body.style.backgroundImage = "url('images/" + name	+ ".png')";

		source.src = "sounds/" + name + ".mp3";
	}

};