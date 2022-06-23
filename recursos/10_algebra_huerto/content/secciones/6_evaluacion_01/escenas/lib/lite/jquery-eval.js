if(!RegExp.escape){
	RegExp.escape = function(s) {
	    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	};

	RegExp.escapeForReplacement = function(s) {
	    return s.replace(/[\$]/g, '\$\$\$');
	};
}
$(function(){

/**
CONSTRUCTOR 
*/
function LiteUamCuestionario(preguntas){
	this.retros={
		'no-selected' : {
			title	: 'Sin selección',
			text	: '<p align="center">Debes seleccionar una opción.</p>'
		},
		title : { 
			right : 'Correcto', 
			wrong : 'Incorrecto'
		}
	}

	this.retros.result_brief ={
		text : "Has respondido todas las preguntas. A continuación, observa tus resultados.",
		list : [
			'<h3>No has acertado ninguna pregunta.</h3><p>Conviene que repases todos los aspectos del tema. <br> Vuelve atrás y revisa todas las preguntas. Fíjate bien en su solución.</p>',
			"<h3>Has cometido demasiados errores.</h3><p>Conviene que repases todos los aspectos del tema.<br>Vuelve atrás y fíjate en la solución de las preguntas que no has acertado.</p>",
			'<h3>Has cometido muchos errores.</h3><p>Es recomendable que repases todos los aspectos del tema.<br> Vuelve atrás y revisa las preguntas que no has acertado.<p>',
			'<h3>Aceptable.</h3><p>Has contestado correctamente tres de cinco preguntas.<br>Vuelve atrás, revisa las que no has acertado y fíjate en su solución.</p>',
			'<h3>¡Bien!</h3> <p>Entendiste bien la mayoría de aspectos del tema.<br>Puedes volver atrás para revisar la pregunta que no has acertado.</p>',
			'<h3>¡Felicidades!</h3> <p>Entendiste todos los aspectos del tema,<br>aunque realizaste más de un intento en alguna(s) pregunta(s).</p>',
			'<h3>¡Enhorabuena!</h3> <p>Has respondido correctamente a todas las preguntas. <br> Entendiste muy bien todos los aspectos del tema.</p>',
		]
	};


	this.preguntas 		= Object.create(preguntas); //Clonando preguntas
	this.maxIntentos	= 2;
	this.questionID 	= 0;

	
	this.withMathJax = (
		MathJax && 
		MathJax.Hub && 
		MathJax.Hub.Typeset);

	this.init();
}


var protoQuest = LiteUamCuestionario.prototype

/**
	Inicializamos 
*/
protoQuest.init = function(){
	this.element = $('#test_container');

	this.btnPrev = $('.navigation .prev',this.element);
	this.btnNext = $('.navigation .next',this.element);
	this.btnVerif = $('.verificar',this.element);

	this.btnNext.on('click'		, $.proxy(this.nextQuestion,this));
	this.btnPrev.on('click'		, $.proxy(this.prevQuestion,this));
	this.btnVerif.on('click'	, $.proxy(this.checkAnswer,this));



	this.questionsCont = $('.questions_container',this.element);
	


	this.currentHtml = $('<div class="question-container"><div class="loading"></div></div>');
	
	this.questionsCont.append(this.currentHtml);

	this.setQuestion(0);
}


/**
*/
protoQuest.setQuestion = function(idx){
	var yaRes;
	var htmlNavL;
	var nextScreen;
	
	var pregInfoL  = $('#test_container > h1:nth-child(1)'); 
	
	if(idx < this.preguntas.length) { // PREGUNTA NORMAL
		this.questionID = idx;
		$('#idxPregunta',this.element).html(this.questionID+1);
		
		var preg = this.preguntas[this.questionID];
		if(!preg.element){
			preg.element = this.createQuestionHTML(preg,this.questionID); 
		}
		
		nextScreen	= preg.element;
		yaRes 		= (preg.answered)?preg.answered:false;
		htmlNavL 	= (1+this.questionID)+' / '+this.preguntas.length ; 

		this.btnNext.show();
		pregInfoL.show();
		
		if(yaRes)
			this.btnVerif.hide()
		else
			this.btnVerif.show();

	} else if(idx == this.preguntas.length){ // PAGINA DE RESULTADOS
		nextScreen 	= this.getResultsHTML();	
		yaRes		= true;
		htmlNavL	= "Resultados";

		this.btnNext.hide();
		pregInfoL.hide();
		this.btnVerif.hide();

	} else {
		alert("Hubo un error en el programa, se pidió la pregunta "+idx);
		return;
	}

	this.currentHtml.hide('fade',400,
		$.proxy(function(){
			this.currentHtml.detach();
			this.currentHtml = nextScreen;
			
			this.questionsCont.append(this.currentHtml);

			this.currentHtml.hide();
			this.currentHtml.show('fade', 400,
				$.proxy(protoQuest.updateVisualPlugins,this)
			);
		},this)
	); 

	var disabledNext = (!yaRes) || (this.questionID >= this.preguntas.length);
	var disabledPrev = (this.questionID < 1) && (idx != this.preguntas.length);
	var navLabel = $('.navigation .contador',this.element);
	navLabel.html(htmlNavL);
	this.btnNext.prop('disabled', disabledNext);
	this.btnPrev.prop('disabled', disabledPrev);
}

/**
*/
protoQuest.nextQuestion = function(){
	var nextId = Math.min(
			this.questionID+1,
			this.preguntas.length); 
	this.setQuestion(nextId);
}

/**
*/
protoQuest.prevQuestion = function(){
	this.setQuestion(Math.max(this.questionID-1,0));
}
	
/**
*/
protoQuest.setSelectedOption = function(questIdx,optIdx,pregCfg){
	
	var selector = '.question-container .options > div';
	var selector2 = selector+".opt"+optIdx;


	var todas = $(selector);
	var selected = $(selector2);


//	console.log("Se selecciono : "+questIdx+","+optIdx+"\n",pregCfg,"\n",selected);
	todas.removeClass('selected');
	selected.addClass('selected');
}



/**
*/
protoQuest.checkAnswer = function(){
	var questCont = this.questionsCont;

	var preg = this.preguntas[this.questionID];
	var inputName = 'quest'+this.questionID;
	var selector = "input:radio[name ='"+inputName+"']";
	var checked = $(selector+":checked",questCont);
    var radiosVal = checked.val();

    if(checked.length  <= 0 || radiosVal < 0){
    	var txtTmp = this.retros['no-selected'];
    	this.showModalMessage(
    		txtTmp.title,
    		txtTmp.text, 
    		"error"
    	);
    	return;
    }

	var radiosValO = checked.get(0).originalIndex

	
    
    var selOption = parseInt(radiosValO);
	selOption = preg.options.list[selOption];
	

	if(!preg.hasOwnProperty('intentos')){
		preg.intentos = 0;
	}

	preg.intentos++; 
	var correcto = (radiosValO == 0);
	

	var txtTmp = "right"
	if(!correcto)
		txtTmp = 'wrong';
	
	var retro = {
		klass : 'answered_'+txtTmp,
		title : this.retros.title[txtTmp]
	};
	
	var maxInt = preg.intentos >= this.maxIntentos;
	var toNext =  (maxInt) || (correcto);
	
	var fNext = function () {};
	var extra = '';
	if(toNext){
		this.currentHtml.addClass(retro.klass+' answered');
		preg.answered = true;
		preg.answered_right = correcto;		
		$(selector,questCont).prop('disabled',true);
		
		fNext = $.proxy(this.nextQuestion,this);
		
		if(maxInt && !correcto){
			extra = 
				'<p><b>'+
					'Has realizado el número máximo de intentos por pregunta.'+
					' Continúa con la siguiente pregunta. '+
				'</b></p>';
		}
			
	}


	// Mandamos resultados al LMS
	this.sendToLMS();	


	//Mandamos mensaje de retroalimantación
	var title	= retro.title;
	var text	= extra+selOption.retroHTML;
	
	this.showModalMessage(
		title,
		text,
		(correcto)?'success':'error',
		fNext,
		300);

}


protoQuest.sendToLMS = function(){
	var myParent = window.parent;
	var cont = 0 ;
	while (myParent != undefined && (!myParent.hasOwnProperty('setLMSScore'))){
		myParent = myParent.parent;

		cont ++;
		if(cont > 12){
			myParent = false;
			break;
		}
	}

	if(!myParent){
		console.log("No se pudo comunicar con el script para el LMS ", window);
		return;
	}

	var preg = this.preguntas[this.questionID];
	/* 
		idxPregunara, 
		MaxNPreguntas, 
		actCorrecta ? , 
		intentos en la actual
	*/
	myParent.setLMSScore(
		this.questionID,
		this.preguntas.length,
		(preg.answered_right)?1:0,
		preg.intentos
	);
}

/**
*/
protoQuest.createQuestionHTML = function(pregCfg, questionIdx){
	var inputName = 'quest'+questionIdx;

	var pregID = (pregCfg.id && (pregCfg.id+'').length > 0)?pregCfg.id:("Question"+questionIdx); 
	var divCont = $('<div>',{'class':'question-container '+inputName,id:pregCfg.id});
	var divTxt = $('<div>',{'class':'text'});
	var divOptions = $('<div>',{'class':'options'});
	
	var isList = (pregCfg.options.layout && pregCfg.options.layout == 'list');
	divOptions.addClass(((isList)?'list':'grid')+'-align');

	var varList = pregCfg.getVariables();
	var pregText = this.replaceVariables(pregCfg.text,varList);

	divTxt.html(pregText);

	var options = pregCfg.options.list;
	var suffleIdx = [];
	for (var i = options.length - 1; i >= 0; i--) {
		options[i].idx=i;
		suffleIdx[i] = options[i]; 
	}
		
	options = this.shuffle(suffleIdx);

	
	for (var i = options.length - 1; i >= 0; i--) {
		var option 		= options[i];
		var optClass 	= 'opt'+option.idx
		var optId 		= inputName+'-opt'+i; 
		var optIdCtr 	= optId+'-ctr';

		var optContainer = $('<div>',{'class': optClass});
		
		var optInCfg = {type:'radio',name:inputName,id:optIdCtr,value:i};
		var optInput = $('<input>',optInCfg);
		var optLabel = $('<label>',{'for': optIdCtr});

		optInput.get(0).originalIndex = option.idx;

		var optHTML			= this.replaceVariables(option.text,varList);
		option.retroHTML	= this.replaceVariables(option.retro,varList);


		optLabel.html(optHTML);
		var eData = {
			quest 	: questionIdx, 
			opt 	: option.idx, 
			pregCfg	: pregCfg
		};

		optInput.on('change',eData,$.proxy(
			function(event){
				var data = event.data;
				this.setSelectedOption(
					data.quest,
					data.opt,
					data.pregCfg
				);
			},this));

		optContainer.append(optInput);
		optContainer.append(optLabel);
		divOptions.prepend(optContainer);
	};

	divCont.append(divTxt);
	divCont.append(divOptions);
	return divCont;
}

/**
*/
protoQuest.getResultsHTML = function() {


	var resT = $('<table>');
	var headerRow = $('<tr>').appendTo(resT);
	
	$("<th>").html('Pregunta').appendTo(headerRow);
	$("<th>").html('Correcta').appendTo(headerRow);
	$("<th>").html('Intentos').appendTo(headerRow);

	var cont = this.preguntas.length;
	var nBien = 0;
	for(var i = 0;i < cont;i++){
		var preg = this.preguntas[i];
		var row = $('<tr>').appendTo(resT);
		
		var esCorrecta = (preg.answered_right)?'Sí':'No';
		
		var klass = (preg.answered_right)?'right':'wrong';
		esCorrecta = "<span class='"+klass+"'>"+esCorrecta+"</span>";
		var nInt = (preg.intentos)?preg.intentos:'Ninguno';
		$("<td>").html(i).appendTo(row);
		$("<td>").html(esCorrecta).appendTo(row);
		$("<td>").html(nInt).appendTo(row);

		if(preg.answered_right)
			nBien ++;
	}
	
	var strBrief = 
	"<h2>Resultados</h2> "+
	"<p>"+
		this.retros.result_brief.text+
	"</p>"+
	"<div class='result-brief'></div>"+
	"<div class='result-retro-text'></div>";


	var retros = this.retros.result_brief.list;
	nBien = Math.min(nBien,retros.length-1);
	
	var resHTML = $('<div>', {'class':'question-container result-brief'}).html(strBrief);
	$('.result-brief'		, resHTML).append(resT);
	var retroTxt = $('.result-retro-text'	, resHTML)

	retroTxt.html(retros[nBien]);
	retroTxt.addClass('bien-'+nBien);

	return resHTML;
}

/**
*/
protoQuest.updateVisualPlugins = function(){
	var questCont = this.questionsCont;
	var quest = $('.question_container',questCont);

	var doMathJax = !quest.hasClass('MJ-done');
	if(doMathJax && this.withMathJax){
		var mathElement = questCont.get(0);
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,mathElement]);
		quest.addClass('MJ-done');
	}
	
}
/**
*/
protoQuest.replaceVariables = function(htmlString,varList){

	for(var name in varList){
		var escaped = RegExp.escape(name);
		escaped = '\\[\\s*'+escaped+'\\s*\\]';
		var patt = new RegExp(escaped,"gm");
		var escValue = RegExp.escapeForReplacement(''+varList[name]);
		//escValue = varList[name];
		htmlString = htmlString.replace(patt,escValue);
	}

	return htmlString;
}




/**
	@title 
	@htmlMessage,
	@type  "error", "message", "warning". Defult ("message") 
*/
protoQuest.showModalMessage= function(title,htmlMessage,type,closeCallBack,height){
	var msgHtml = $('<div>').html(
			"<h3>"+title+"</h3>"+
			"<div class='content'>"+
				htmlMessage+
			"<div>"
		);


	height = (height!=undefined)?height:150;
	msgHtml.modal({
		appendTo : this.element.selector,
		autoPosition : false,
		containerCss : {position:'absolute'},

		minWidth: 250,
		maxWidth: this.element.width()-40,

		minHeight: height,
		maxHeight: this.element.height()-40,

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
	
	if(this.withMathJax){
		var mathElement = simplemodal.get(0);
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,mathElement]);
	}

	/*
	simplemodal.position({
	  my: "center top",
	  at: "center top",
	  of: this.element
	});
*/




}

/**
*/
protoQuest.shuffle = function(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}


/*
INIT
*/
//console.log("Preguntas : ",lite);
var cuestionario = new LiteUamCuestionario(lite.questionario.preguntas);
	
});	