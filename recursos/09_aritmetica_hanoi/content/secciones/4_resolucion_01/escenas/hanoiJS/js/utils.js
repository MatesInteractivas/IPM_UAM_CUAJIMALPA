/**
	@title 
	@htmlMessage,
	@type  "error", "message", "warning". Defult ("message") 
	*/
function showModalMessage(title,htmlMessage,type,closeCallBack,height,width){
	var msgHtml = $('<div>').html(
			"<h3>"+title+"</h3>"+
			"<div class='content'>"+
				htmlMessage+
			"<div>"
		);


	height = (height!=undefined)?height:150;
	width = (width!=undefined)?width:350;
	var parent = $('body');
	msgHtml.modal({
		appendTo : parent.selector,
		autoPosition : false,
		containerCss : {position:'absolute'},

		minWidth: width,
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