$(function() {
	Game.prototype.animateSolution = function() {
	
	
	this.init();
	var mask = $('<div class="mask">').appendTo(this.element);

	mask.css('position' ,'absolute');
	mask.css('top' ,0);
	mask.css('left' ,0);

	mask.css('bottom' ,0);
	mask.css('right' ,0);

	console.log("Solucionando");

	var menuBar = $('.buttons-bar');
	var tmpArray = [];
	var time = 300;
	this._doHanoi(this.numDisks,
		this.towers[0],
		this.towers[1],
		this.towers[2],
		tmpArray,time);

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
Game.prototype._doHanoi = function(n, tOrig,tDest,tAux,tmpArray,timeAnim){
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



	var nDisk = 1;
	var hanoiG = new Game('game',nDisk);

	$("#startOver").click(function() {
		hanoiG.setNumDisk(nDisk);

		hanoiG.init();
	});

	$("#startOver1").click(function() {
		nDisk = 1;
		$("#startOver").click();
	});

	$("#solution").click(function() {
		hanoiG.animateSolution();
	});

	


	hanoiG.element.on('hanoigame.started',function(event){
		$("#solution").hide();
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
			
			nDisk = Math.min(nDisk+1,7);
			hanoiG.setNumDisk(nDisk);
		}

		
	});



	hanoiG.element.on('hanoigame.moveNotAllow',function(event,moves){
		showModalMessage(
			'Movimiento no permitido',
			"Recuerda que no puedes colocar un disco sobre otro de diámetro menor",
			'error');	
	});
	
	
$("#startOver").click();


	/**
	@title 
	@htmlMessage,
	@type  "error", "message", "warning". Defult ("message") 
	*/
showModalMessage= function(title,htmlMessage,type,closeCallBack,height){
	var msgHtml = $('<div>').html(
			"<h3>"+title+"</h3>"+
			"<div class='content'>"+
				htmlMessage+
			"<div>"
		);


	height = (height!=undefined)?height:150;
	var parent = $('body');
	msgHtml.modal({
		appendTo : parent.selector,
		autoPosition : false,
		containerCss : {position:'absolute'},

		minWidth: 250,
		maxWidth: parent.width()-40,

		minHeight: height,
		maxHeight: parent.height()-40,

		onClose : function(){
			$.modal.close();
			var t=(closeCallBack)?closeCallBack():0;
		},
	});


	var simplemodal = $('#simplemodal-container',this.element);
	var simpleModalOverlay = $('#simplemodal-overlay',this.element);

	simpleModalOverlay.css({
		position:'absolute',
		width:'100%',
		height:'100%'
	});

	/* No tenemos los efectos de JQUERY UI
	var effect = 'drop';
	var effect_config = {direction:'down'};
	var effect_time = 400;

	if(type == 'error'){
		effect = 'shake';
		effect_config = {}; 
	} else if (type == 'warning'){
		effect = 'puff';
		effect_config = {}; 
	} else if (type == 'success'){
		effect = 'fade';
		effect_config = {times:3}; 
		effect_time = 'slow';
	}
	simplemodal.hide();
	simplemodal.addClass(type+" otros");
	simplemodal.show(effect,effect_config,effect_time);
	*/
	simplemodal.hide();
	simplemodal.addClass(type+" otros");
	simplemodal.show();
}

	
});

