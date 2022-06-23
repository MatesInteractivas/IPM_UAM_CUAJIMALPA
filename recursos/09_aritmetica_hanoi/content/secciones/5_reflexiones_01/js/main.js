$(function(){

	var $indCasoB_Pane	= $('#induccion-base');

	var $indBaseCont	= $('#induccion-act1');
	var $spinners		= $('input',$indBaseCont);
	var $spanNum 		= $('.num',$indBaseCont);
	var $expresion		= $('.indiccion-expresion',$indCasoB_Pane);


	
	var $btnVerif	= $('button.verificar',$indBaseCont);
	var $btnReinit	= $('button.reInit',$indBaseCont);
	var $btnReinitAct = $('button#btnReinit');



	var esperaBase	= $('#espera-base');
	var txtBase		= $('#induccion-base');
	var solBase 	= $('.solucion-base',txtBase); 
	var esperaHipo	= $('#espera-hipotesis');
	var txtHipo		= $('#induccion-hipotesis');

	var esperaPaso = $('#espera-paso-inductivo');
	var txtPaso = $('#induccion-paso-inductivo');









	function initActivity(callBack){
		$btnReinit.prop('disabled',false);
		$btnVerif.prop('disabled',false);
		$spinners.prop('disabled',false);

		esperaBase.show('slow');
		esperaHipo.show('slow');
		esperaPaso.show('slow');
		

		txtPaso.hide('slow');
		txtHipo.hide('slow');
		txtBase.hide('slow',callBack);
		solBase.hide();
		correctas=0;

	}

	function setStep01Activity(){
		var selectBox = $expresion.data("selectBox-selectBoxIt");

		selectBox.selectOption('-1');

		$btnReinit.prop('disabled', true);
		$btnVerif.prop('disabled', true);
		$spinners.prop('disabled', true);

		solBase.hide();
		esperaBase.hide('slow');
		txtPaso.hide('slow');
		txtHipo.hide('slow');
		

		esperaHipo.show('slow');
		esperaPaso.show('slow');
		txtBase.show('slow',function(){
			$(".course_content").mCustomScrollbar(
				"scrollTo",
				esperaBase.parent(),
				{scrollEasing:"easeOut"}
			);
		});
	}


	function setStep02Activity(){
		esperaBase.hide('slow');
		esperaHipo.hide('slow');
		esperaPaso.hide('slow');
		
		solBase.show('slow');
		txtHipo.show('slow');
		txtBase.show('slow');
		txtPaso.show('slow',function(){
			$(".course_content").mCustomScrollbar(
				"scrollTo",
				solBase,
				{
					scrollEasing:"easeOut"
			});
		});
	}



	var $spinnerK = $($spinners[0]);
	var $spinnerM = $($spinners[1]);
	$spinners.spinner({
		min:0,
		max:1000,
	}); 
	$expresion.selectBoxIt();





	/*
	***************************************************************
	*******            Iniciar actividad               ***************
	***************************************************************
	*/
	$btnReinitAct.on('click',function(){
		

		var paneAct =  $('#induccion-act1');
		var scrollTo = function(){
			console.log("Vamos hacer scroll a ", paneAct);
			$(".course_content").mCustomScrollbar(
				"scrollTo",
				paneAct,
				{scrollEasing:"easeOut"}
			);
		};

		$btnReinit.click();
		initActivity(scrollTo);
	})

	/*
	***************************************************************
	*******            Actividad UNO               ***************
	***************************************************************
	*/

	var cantidad = 0;
	var intentos = 0;
	var correctas = 0;
	var regExpCurr = /(\d+)(?=(\d{3})+)/g;
	var regExpCurrRepl = "$1,";

	var cantidadStr = '';
	$btnReinit.on('click',function(){
		cantidad = Math.random()*600 + 4;
		cantidad = Math.floor(cantidad);

		$spinners.val('');

		cantidadStr = ''+(cantidad*100);
		cantidadStr = cantidadStr.replace(regExpCurr, regExpCurrRepl);
		$spanNum.text(cantidadStr);

	});



	$btnVerif.on('click',function(){
		var valK = $spinnerK.val();
		var valM = $spinnerM.val();
			



		console.log("Valores : ",valK,valM,cantidad,valK*2+valM*5);
		var numResult = (valK*2) + (valM*5);
		if(isNaN(numResult)){
			showModalMessage(
				'Error de formato',
				'Alguno de los valores que introdujiste no es un número.',
				'error',
				null);
			return;
		}


		valK = valK.replace(/\s/g,'');
		valM = valM.replace(/\s/g,'');

		valM = (valM == '' )?0:valM;
		valK = (valK == '' )?0:valK;


		correcto = numResult == cantidad
		var msg = {};

		var numResultStr = ''+(numResult*100);
		numResultStr = numResultStr.replace(regExpCurr, regExpCurrRepl)
		
		if(correcto){
			correctas++;
			msg.title = 'Correcto';
			msg.htmlMessage = 
				'<p>La suma de '+valK+' billetes de $200 y '
				+valM+' de $500, nos da $'+cantidadStr +'.</p>';
			msg.type = 'success';
			msg.closeCallBack = function(){$btnReinit.click()};
			msg.width =  450;
			msg.height =  250;


			if(correctas > 4){
				msg.closeCallBack = setStep01Activity;
				msg.htmlMessage += '<p style="text-align:center"><b>Ahora continúa con la demostración.</b></p>';
			}

		} else {
			msg.title = 'Revisa tu respuesta';
			msg.htmlMessage = 
				'<p>\
				Los valores que pusiste en los pulsadores \
				no corresponden al valor que se te pide.</p>'+
				'<p style="text-align: center"><span class="formula">'
					+valK+'&times; 200 + '+valM+'&times; 500 = '+ numResultStr+
				'</span> </p>';
			msg.type = 'error';
			msg.closeCallBack = null;
			msg.width =  450;
			msg.height =  250;
		}

		showModalMessage(msg.title,msg.htmlMessage,msg.type,msg.closeCallBack,msg.height,msg.width);
	});




	/*
	***************************************************************
	*******            Actividad DOS               ***************
	***************************************************************
	*/


	$expresion.on('change',function(){
		var msg = {};
		var expVal = $expresion.val();
			
		if(expVal == -1)
			return;

		if(expVal == 0){
			msg.title = 'Correcto';
			msg.htmlMessage = 
				'<p> \
					Esta es la manera en que podemos expresar la \
					cantidad de dinero que se pide al cajero en suma \
					de billetes de $200 y $500.\
				</p>';
			msg.type = 'success';
			msg.closeCallBack = setStep02Activity;
			msg.width =  450;
			msg.height =  250;


		} else {
			msg.title = 'Error';
			msg.htmlMessage = 
				'<p> \
					Verifica tu respuesta, recuerda qué se hizo en la parte superior.\
				</p>';
			msg.type = 'error';
			msg.closeCallBack = null;
			msg.width =  450;
			msg.height =  250;
		}


		showModalMessage(msg.title,msg.htmlMessage,msg.type,msg.closeCallBack,msg.height,msg.width);
	});





	/*
	***************************************************************
	*******           Iniciamos UNO               ***************
	***************************************************************
	*/
	
	$btnReinit.click();
	initActivity();


});