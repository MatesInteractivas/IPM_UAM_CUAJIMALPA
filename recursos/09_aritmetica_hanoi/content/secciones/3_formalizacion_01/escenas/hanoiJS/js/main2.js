$(function() {
	
	

	
	var startBtn = $("#startOver");
	var spinner = $('#nDisk');


	var nDisk = spinner.val();
	var hanoiG = new Game('game',nDisk);
	


	spinner.spinner({
		min : 3,
		max : 7,
		stop: function( event, ui ) {
			nDisk = spinner.val();
			startBtn.click();

		}
	});


	startBtn.click(function() {
		hanoiG.setNumDisk(nDisk);
		hanoiG.init();
	});

	
	hanoiG.element.on('hanoigame.started',function(event){

	});

	hanoiG.element.on('hanoigame.diskMoved',function(event,disk, tower){
		var minMoves = Math.pow(2,nDisk) -1;
		if(hanoiG.moves > minMoves*1.5){
			$("#solution").show();
		} else {
			$("#solution").hide();
		}
	});


	hanoiG.element.on('hanoigame.gameover',function(event,moves){
		var minMoves = Math.pow(2,nDisk) -1;
		
		var nextInt = $.proxy(hanoiG.init,hanoiG);
		if(minMoves < moves){
			showModalMessage(
				'Muchos movimientos',
				"Ocupaste "+moves+"<br>Puedes hacerlo en menos movimientos.",
				'error',
				nextInt
				);	
		} else {
			showModalMessage(
				'Buen trabajo',
				"Bien hecho, lo hiciste en el mínimo número de pasos.",'',nextInt);
		}		
	});

	hanoiG.element.on('hanoigame.moveNotAllow',function(event,moves){
		showModalMessage(
			'Movimiento no permitido',
			"Recuerda que no puedes colocar un disco sobre otro de diámetro menor",
			'error');	
	});
	
	startBtn.click();	
});