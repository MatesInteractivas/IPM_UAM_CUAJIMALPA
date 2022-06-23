$(function() {
	
	

	
	var startBtn = $("#startOver");
	var resolverBtn = $("button#resolver");
	var spinner = $('#nDisk');


	var nDisk = spinner.val();
	var hanoiG = new Game('game',nDisk);
	


	
	spinner.spinner({
		min : 3,
		max : 7,
	});

	spinner.on('spinstop',function( event, ui ) {
		console.log("Cambio el spinner");
		nDisk = spinner.val();
		startBtn.click();

	});

	/**
	*/
	resolverBtn.on('click',function(){
		startBtn.click();

		var moves = [];
		var time = 500;

		var t0 = hanoiG.towers[0];
		var t1 = hanoiG.towers[1];
		var t2 = hanoiG.towers[2];

		hanoiG._doHanoi(
			1,
			t0,
			t2,
			t1,
			moves,
			time
		);


		hanoiG.animateSolution(
			hanoiG.numDisks-1,
			t1,
			t2,
			t0,
			moves,
			time
		);

	});

	/**
	*/
	startBtn.click(function() {

		var handleDrop = $.proxy(hanoiG.handleDrop,hanoiG);
		
		

		hanoiG.setNumDisk(nDisk);
		hanoiG.init();
		

		var t0 = hanoiG.towers[0];
		var t1 = hanoiG.towers[1];
		var tmpDisks = t0.disks.slice(1); //Todos menos el mas grande
		

		for (var i = 0 ; i < tmpDisks.length;  i++) {
			var disk = tmpDisks[i];
			t1.moveDisk(disk);
			disk.position();
		/*
			handleDrop(
				{target		: t1.getElement()},
				{draggable	: disk.getElement()}
			);

		*/
		};
		
		
		var n =  Math.pow(2,nDisk-1)-1;
		hanoiG.moves = n;
		hanoiG.movesHtml.text(n);
		hanoiG.updateDraggableDisks();
	});



	/**
	*/	
	hanoiG.element.on('hanoigame.started',function(event){

	});

	/**
	*/
	hanoiG.element.on('hanoigame.diskMoved',function(event,disk, tower){
		var minMoves = Math.pow(2,nDisk) -1;
		if(hanoiG.moves > minMoves*1.5){
			$("#solution").show();
		} else {
			$("#solution").hide();
		}
	});

	/**
	*/
	hanoiG.element.on('hanoigame.gameover',function(event,moves){
		var minMoves = Math.pow(2,nDisk) -1;
		
		var nextInt = function(){ //Acabamos, hay que pasar al siguiente
			nDisk = parseInt(nDisk);
			spinner.spinner('value', nDisk+1);
			spinner.trigger('spinstop');
		};

		if(minMoves < moves){
			showModalMessage(
				'Muchos movimientos',
				"Ocupaste "+moves+"<br>Puedes hacerlo en menos movimientos.",
				'error',
				nextInt
				);	
		} else {
			var tmpM = Math.pow(2,nDisk-1)-1 +1 ;
			showModalMessage(
				'Buen trabajo',
				"Bien hecho, lo hiciste en "+tmpM+" pasos",'',nextInt);
		}		
	});

	/**
	*/
	hanoiG.element.on('hanoigame.moveNotAllow',function(event,moves){
		showModalMessage(
			'Movimiento no permitido',
			"Recuerda que no puedes colocar un disco sobre otro de diámetro menor",
			'error');	
	});
	
	startBtn.click();	
});



/**
Agregamos la funcion para resolver el juego  
*/
Game.prototype._doHanoi = function(n, tOrig,tDest,tAux,tmpArray,timeAnim){
	console.log("haciendo Hanoi : ",n);
	if(n < 1){
		console.log("Error ????",n,tmpArray)
		return;
	}

	if(n <= 1){
		var handleDrop = $.proxy(this.handleDrop,this);
				
		var tOrigElement = tOrig.getElement();
		var tDestElement = tDest.getElement();


		var move = function(nextF){
			var disks = tOrig.disks;
			var disk = disks[disks.length - 1];
			var diskEle = disk.getElement();

			var y = tDest.calcDiskTop(disk.num)-diskEle.height();
			var x = tDest.calcDiskLeft(diskEle.width());

			diskEle.animate(
				{top:y,left:x},
				timeAnim,
				function(){
					handleDrop(
						{target		: tDestElement	},
						{draggable	: diskEle}
					);
				});			
		};

		//move = {from: tOrig, to: tDestElement};
		tmpArray.push(move);	
		return;
	}

	
	this._doHanoi(n-1,tOrig,tAux,tDest ,tmpArray ,timeAnim);
	this._doHanoi(  1,tOrig,tDest,tAux ,tmpArray ,timeAnim);
	this._doHanoi(n-1,tAux,tDest,tOrig ,tmpArray ,timeAnim);		
}



/**
	*/
	Game.prototype.animateSolution = function(n, tOrig,tDest,tAux,movesArray,time) {
	
	var mask = $('<div class="mask">').appendTo(this.element);

	mask.css('position' ,'absolute');
	mask.css('top' ,0);
	mask.css('left' ,0);

	mask.css('bottom' ,0);
	mask.css('right' ,0);

	console.log("Solucionando");

	var menuBar = $('.buttons-bar');
	var tmpArray = movesArray;
	
	this._doHanoi(
		n, 
		tOrig,
		tDest,
		tAux,	
		tmpArray,
		time);

	var iF = 0; 
	var maxIf = tmpArray.length-1;

	var anim = function(){
		var fc = tmpArray[iF];
		fc();
		iF++;
		if(iF <= maxIf){
			setTimeout(anim,time*1.5);
		} else {
			mask.remove();
			menuBar.show();
	
		}
		 
	}
	menuBar.hide();
	anim();
}