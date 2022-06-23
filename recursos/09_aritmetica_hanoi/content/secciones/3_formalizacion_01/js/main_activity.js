$(function(){

	var table	= $('#activity-1').css('display','inline-table');
	var inputs	= $('#activity-1 input').attr('placeholder','?');
	var btnVer	= $('#activity-1-verificar');	
	var btnInit	= $('#activity-1-reinit');
	var expCont = $('#activity-1-expresion-cont');
	var expInput = $('input',expCont);
	var activityStep = 0;
	var intentos = 0;


	/**
	*/
	var verifTabla = function() {
		var msg = '' ;
		var correcto = true; 
		inputs.each(function(idx, element){
			var $input	= $(element);
			var n		= $input.attr('data');
			
			var val		= parseInt($input.val());
			var corrVal = Math.pow(2,n)-1;
			var corrAct =  (val == corrVal);
			
			console.log("Tenemos ",$input.attr('id'),n,val,corrVal,correcto);
			$input.addClass(corrAct?'right':'wrong');

			if(corrAct){
				$input.prop( "disabled", true );
 			}
 			correcto = corrAct  && correcto;
		});

		if(correcto){
			message(
				'Correcto',
				'<b>Has llenado la tabla con los valores adecuados.</b> \
				<div>Ahora intenta deducir una fórmula para calcularlo de manera general.</div>',
				'success',
				function() {
					expCont.show('slow');
					activityStep = 1;
					intentos = 0;		
				},250
			);
			
		} else {
			message('Incorrecto','<b>Hay valores incorrectos en la tabla.</b>','error');
			intentos++;
		}
	}

	/**
	*/
	var verificaExpresion = function(){
		var strExp = expInput.val();
		var strExpC = strExp.replace(/\s/g,'');
		var invalidos = /[^n\-\^\+\/\*\(\)0-9]+/g;

		if(invalidos.test(strExpC)){
			var msg = 'Utilizaste operadores o letras inválidos.';
			message('Incorrecto',msg,'error',null,250);
			expInput.val(strExpC);
			return;
		}
	


		strExpC = strExp.replace(invalidos,'');
		expInput.val(strExpC);
		var correcto = (strExpC.length > 0) && (strExpC == '2^n-1');
		
		console.log("Checando expresion : {"+strExp+'}{'+strExpC+'}',correcto);
		
		

		if(correcto){
			message(
				'Correcto',
				'<b>La expresión que escribiste es la correcta</b> \
				<div>Ahora intenta deducir una fórmula para calcularlo de manera general</div>',
				'success',
				function(){
					expInput.prop('disabled',true);
					btnVer.prop('disabled',true);
					$(".course_content").mCustomScrollbar(
						"scrollTo",
						'bottom',
						{
    						scrollEasing:"easeOut"
						});
				},
				200,400
			);
			

		
		} else {
			intentos++;
			var msg = '<b>La expresión que escribiste no es correcta.</b>';
			var w = 350;
			if(intentos > 3){
				
				w = 400;
				msg += 
					"<div> ¿Has pensado en el hecho de que<br> \
						<span class='formula'>2² = 4</span> , \
						<span class='formula'>2³ = 8</span> y\
						<span class='formula'>2⁴ = 16 </span>?\
					</div>"
					if(intentos > 5){
						expInput.val('');
						expInput.attr('placeholder','Intenta 2^n-1');

					} 
						
			} 
			message('Incorrecto',msg,'error',null,200,w);
		}

	}





	inputs.keyup(function () { 
    	this.value = this.value.replace(/[^0-9\.]/g,'');
    	$(this).removeClass('right wrong');
	});

	btnVer.on('click',function(){
		if(activityStep == 0)
			verifTabla();
		else
			verificaExpresion();
	});




	btnInit.on('click',function(){
		inputs.prop(	"disabled", false );
		expInput.prop(	"disabled", false );
		btnVer.prop(	'disabled', false );


		inputs.val("");
		expInput.val('');
		expInput.removeClass('right wrong');
		inputs.removeClass('right wrong');
		expCont.hide();
		table.hide();
		table.show('slow');
		activityStep = 0;
		intentos=0;
	});

	btnInit.trigger('click');

});

/**
	@title 
	@htmlMessage,
	@type  'success',"error", "message", "warning". Defult ("message") 
	*/
function message (title,htmlMessage,type,closeCallBack,height){
	type = type || 'message'
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

		minWidth: 350,
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

	simplemodal.hide();
	simplemodal.addClass(type);
	simplemodal.show();
}