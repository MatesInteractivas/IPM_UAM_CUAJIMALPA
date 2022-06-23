$(function(){
/******************************************
AUXILIARES

*************************************/


$.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };


    /**
    MAIN
    */

	 
	var pasoSumas = $('#paso_sumas');
	var $select = $("#movimientos_prev");
	var intentos = 0 ; 
	

	$('option',$select).shuffle();
 	

	var optVacia = $('<option>',{val:'-1',html:'','data-text':''});
	$select.prepend(optVacia);
	$('option',$select).each(function(idx,element){ //POnemos la clase formula
		var $ele = $(element);

		var dataText = $ele.attr('data-text');
		dataText = '<span class="formula">'+dataText+"</span>";
		$ele.attr('data-text',dataText);
	});

	$select.val('-1');

	$select.on('change',function(){

		var value = $select.val();
		var correct = (value == 6) ;
		intentos++;
		if(!correct){
			var msg = 'No seleccionaste la expresión correcta.<br>'; 

			if(intentos > 2){
				msg +=			
				'Recuerda que movimos una torre de <span class="formula">n</span> \
				disco de un poste a otro.';
			}

			showModalMessage(
				'Revisa tu respuesta',
				msg,
				'error',
				null,
				200,
				450
				);
			return;
		}

	showModalMessage(
		'Correcto',
		'La respuesta es <span class="formula">2<sup>n</sup> -1</span>, porque movimos una torre de <span class="formula">n</span> discos',
		'success',
		function(){
			pasoSumas.hide();
			pasoSumas.show('slow');
		},
		200
	);
	});


	$('option',$select).each(function(){
		$this = $(this);
		$this.prop('data-text',$this.html());
	});

	$select.selectBoxIt();
	pasoSumas.hide();

});