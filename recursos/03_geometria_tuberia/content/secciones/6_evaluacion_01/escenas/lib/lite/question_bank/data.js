/* 
**********************************************************
	Namespaces, no editar esta sección
**********************************************************
*/
var lite = lite || {};lite.questionario = lite.questionario || {};var preguntas = [];lite.questionario.preguntas = preguntas;




/* 
**********************************************************
	Agregamos una Pregunta ESCALERA
**********************************************************
*/
preguntas.push({
	id: 'escalera',
	getVariables : function(){
		var values = {};
		return values;
	},
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:' \
		<table ><tr>							 										\
			<td> 																		\
				A un herrero le piden hacer una escalera que comunique dos azoteas de	\
				una casa. Los techos están a distintas alturas y están separados por	\
				un pasillo como se ilustra en la imagen.<br>						\
				El herrero necesita calcular la longitud de la escalera	(\\(R\\)) \
				y el ángulo (\\( \\theta \\)) que ésta forma con el suelo, 			\
				para poder alinear los escalones de modo que queden paralelos			\
				al suelo.														\
				<br><br>																\
				<b>¿Cuál de los siguientes pares de fórmulas le sirven al herrero para	\
					calcular \\( \\theta \\) y \\( R\\)?								\
				</b>																 	\
				<br><br>																\
			</td>																		\
			<td>																		\
				<img src="images/preguntas/escalera.png">								\
			<td>																		\
		</tr></table>																	\
		',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: '\
					$$																	\
						\\theta = \\text{arctan} \\left( {b-a \\over{c}} \\right), \\ 	\
						R = {c \\over {\\text{cos} \\theta }}        					\
					 $$																	\
				',
				retro 	: 
					"Con estas fórmulas el herrero puede determinar la inclinación de \
					los escalones y la longitud de la escalera.", 
			},
			{
				text 	: '\
					$$																		\
						\\theta = \\text{arctan} \\left( {a - b \\over{c}} \\right),	\\ 	\
						R = {\\text{cos} \\theta \\over {b - a}}							\
					$$																		\
				',
				retro 	: 
					"Esto nos da un ángulo negativo y parece que también 		\
					seleccionaste la razón trigonométrica de otro triángulo.", 
			},
			{
				text 	: '\
					$$																		\
						\\theta = \\text{arctan} \\left( {c \\over{b-a}} \\right), \\ 		\
						R = {\\text{sen} \\theta \\over {b-a}}								\
					$$																		\
				',
				retro 	: 
					"Parece que seleccionaste la razón trigonométrica correspondiente a otro   \
					ángulo de otro triángulo.", 
			},
			{
				text 	: '\
					$$																		\
						\\theta = \\text{arctan} \\left( {b-a \\over{c}} \\right), \\ 		\
						R = {\\text{sen} \\theta \\over {c}}								\
					$$																		\
				',
				retro 	:
					"Parece que seleccionaste la razón trigonométrica con base  en otro ángulo \
					de otro triángulo.",  
			},
		],
	}
});// Fin Pregunta 03



/* 
**********************************************************
	Agregamos una Pregunta AREAS01
**********************************************************
*/
preguntas.push({
	id: 'areas01',
	getVariables : function(){
		var values = {};
		return values;
	},
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:' \
				Se requiere calcular el área de la siguiente figura. Sabemos que la 				\
				figura es un rectángulo con un corte en forma de segmento circular.					\
				Las medidas que conocemos son : 													\
				<div class="info">																	\
				<table border="1"><tr>																			\
					<tr>																			\
						<td>\\( a\\ y \\ b \\)</td>													\
						<td> La longitud de los lados del rectángulo</td>							\
					</tr>																			\
					<tr>																			\
						<td>\\( r \\)</td>															\
						<td> El radio del círculo</td>												\
					</tr>																			\
					<tr>																			\
						<td>\\( c \\)</td>															\
						<td>La distancia de la cuerda a la circunferencia</td>						\
					</tr>																			\
					<tr>																			\
						<td>\\( d \\)</td>															\
						<td> La longitud de la cuerda</td>											\
					</tr>																			\
					<tr>																			\
						<td>\\( e \\)</td> 															\
						<td> La longitud del arco</td>												\
					</tr>																			\
				</table>																			\
				<img src="images/preguntas/figura1.png"></div>										\
				<b>¿Cuál de los siguientes párrafos es una forma 									\
					de encontrar el área?</b>										 				\
		',
	options : {
		layout	:  'list', //grid or list  
		list	: [
			{
				text 	: '\
					Determinamos el ángulo \\( \\theta \\) a partir de la fórmula de la longitud del arco			 	\
					\\(L = {\\pi \\times r  \\over {\\theta  }}\\). Después calculamos el área del		\
					segmento circular y restamos este valor del área del rectángulo.						\
				',
				retro 	: 
					"Esta es la forma correcta de calcular el área de la figura y funciona para \
					cualquier valor de <span class='formula'>a, b, c, d, e y r </span>.", 
			},
			{
				text 	: '\
					Calculamos el ángulo \\( \\theta \\) a partir de la longitud de la cuerda con la fórmula 	\
					\\( d = 2 \\  r \\ \\text{cos}\\theta \\). A continuación calculamos el área del segmento 		\
					circular y se resta del área del rectángulo de lados de longitud \\( a,b \\).						\
				',
				retro 	: "Parece que te confundiste en la fórmula para calcular la longitud de la cuerda.", 
			},
			{
				text 	: '\
					Calculamos la mitad del área del círculo con la fórmula \\( \\pi \\times c^2 \\over {2}\\)	\
					y la restamos del área del rectángulo con lados con longitud \\( a,b \\).					\
				',
				retro 	: 
					"Esta forma sólo funciona cuando tenemos un semicírculo, \
					pero esto no es el caso aquí. Se tiene un semicírculo cuando \\( r\\) y \\(c\\) son iguales.", 
			},
		],
	}
});// Fin Pregunta 03

/* 
**********************************************************
	Agregamos una Pregunta VIDRIO
**********************************************************
*/
preguntas.push({
	id: 'escalera',
	getVariables : function(){
		var values = {};
		return values;
	},
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:' \
		<table ><tr>							 														\
			<td> 																						\
				La región naranja en la imagen es un ejemplo de una región circular o trapecio circular. En este caso, 		\
				tenemos dos circunferencias concéntricas con radios  <span class="formula">R</span> 	\
				y <span class="formula">r</span>, donde \\( R > r\\). Recuerda la fórmula para 			\
				calcular el área de un sector circular: 													\
				$$ A_{sector} = {\\theta \\times R^2 \\over{2}} $$	\
				<br>																					\
				<b>¿Cuál de las siguientes opciones es la fórmula para calcular 						\
				el área de una región circular?</b> 												 	\
				<br><br>																				\
			</td>																						\
			<td>																						\
				<img src="images/preguntas/trapecio.png">											\
			<td>																						\
		</tr></table>																					\
		',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: '\
					$$  {\\theta  (R^2 - r^2) \\over {2}} $$ \
				',
				retro 	: "Has deducido la fórmula para calcular el área de una región circular correctamente.", 
			},
			{
				text 	: '\
					$$	 {\\theta  (R^2 + r^2) \\over {2}} $$	\
				',
				retro 	: "Observa que de esta manera estás sumando un área dos veces.", 
			},
			{
				text 	: '\
					$$	{\\theta  (R - r)^2 \\over {2}}$$	\
				',
				retro 	: "Parece que factorizaste mal alguno de los factores.", 
			},
			{
				text 	: '\
					$$ {(R^2 - r^2)  \\over {2\\theta}} $$ \
				',
				retro 	: "Parece que factorizaste mal alguno de los factores.", 
			},
		],
	}
});// Fin Pregunta 

/* 
**********************************************************
	Agregamos una Pregunta PENTAGONO
**********************************************************
*/
preguntas.push({
	id : 'pentagono',
	getVariables : function(){

		// Funciones que debe devolver una hash, las llaves son 

		var L 			=  Math.round(20*Math.random()+3);
		var perimetro	= 5*L;
		var ang 		= (2*Math.PI/5)/2

		var val0		= perimetro     * (L/2)/Math.tan(ang  ) / 2;
		var val1		= (perimetro/2) * (L/2)/Math.tan(ang  ) / 2;
		var val2		= perimetro     * (L/2)/Math.tan(ang*2) / 2;
		var val3		= perimetro     * (L/2)/Math.tan(ang  ) / 1;
		

		var values = {
			'L' 	: L,
			'val0'	: val0.toFixed(2),
			'val1'	: val1.toFixed(2),
			'val2'	: val2.toFixed(2),
			'val3'	: val3.toFixed(2),
			'ang'	: (ang*2).toFixed(5),
		};
		return values;
	},

	
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:
		'Se requiere calcular el área de un pentágono, pero sólo se conoce la longitud	\
		de sus lados, que es igual a [L]m.	<br><br>									\
			<table align="center" width="90%"><tr> 										\
				<td>																	\
					<img src="images/preguntas/pentagono.png" 							\
							style="border-radius:6px;">									\
				<td>																	\
				<td> 																	\
					\\(L = [L]m \\) <br>												\
					\\(α = {2*\\pi \\over{5}} = [ang] rad \\)<br>						\
					\\(a = \\text{apotema} \\)<br> 										\
				</td>																	\
				<td style="padding-left:10px;text-align:center;">						\
					Área de un polígono regular: <br><br>								\
					$$ 																	\
						{\\text{Perímetro} \\times \\text{apotema}						\
					 \\over{2}} 														\
					 $$																	\
				</td>																	\
			</tr></table>																\
		<br><br><b>¿Cuál es el área del pentágono?</b>',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: '[val0]m<sup>2</sup>' ,
				retro 	: "Has calculado bien el área del pentágono.", 
			},
			{
				text 	: '[val1]m<sup>2</sup>'  ,
				retro 	: "Parece que utilizaste sólo la mitad de la longitud para calcular el perímetro.", 
			},
			{
				text 	: '[val2]m<sup>2</sup>' ,
				retro 	: "Parece que no dividiste el ángulo entre dos.", 
			},
			{
				text 	: '[val3]m<sup>2</sup>' ,
				retro 	: "Parece que se te olvidó dividir entre dos como dice la fórmula del área de un polígono regular.", 
			},
		],
	}
});// Fin Pregunta 01

/* 
**********************************************************
	Agregamos una Pregunta AVIONES
**********************************************************
*/
preguntas.push({
	id: 'aviones',
	getVariables : function(){
		function myRound(num,dec) {var dec10 = Math.pow(10,dec); return Math.round(dec10*num)/dec10; };
		function myTrunc(num,dec) {var dec10 = Math.pow(10,dec); return Math.floor(dec10*num)/dec10; };
		// Funciones que debe devolver una hash, las llaves son 
		
		var altAvion	=	(Math.random()*(12200 - 8000) + 8000); // entre : 8000-12200m
		var velAvion	=	(Math.random()*(  950 -  850) +  850); // 850 a 950 km/h = 850,000 a 950,000 m/h
		var seg			=	(Math.random()*(    4 -    2) +    2); // 2 a 4 segundos


		altAvion	= myRound(altAvion,0);
		velAvion	= myRound(velAvion,0)*1000;
		seg 		= myRound(seg,2);

		console.log("[Altura,velocidad, tiempo(s)]",altAvion,velAvion,seg);
		var enHoras		= (seg/(60*60));
		var velEnSeg	= velAvion/(60*60);
		var recorrido 	= (velAvion*enHoras);
		
		var dX0Min 		= recorrido+10;
		var dX0Max 		= 2*recorrido;

		var disX0		= Math.round(dX0Min+Math.random()*(dX0Max-dX0Min));
		var disX1		= disX0-recorrido;

		var ang1		= Math.atan(altAvion/disX0);
		var disX0_2		= Math.pow(disX0,2);
		var altAvion_2	= Math.pow(altAvion,2);
		var d1			= Math.sqrt(disX0_2+altAvion_2);
		
		console.log(" D1 = ",disX0,altAvion,disX0_2,altAvion_2,(disX0_2+altAvion_2),d1)
		

		var disX1_2		= Math.pow(disX1,2);
		var d2			= Math.sqrt(disX1_2+altAvion_2);
		var ang2		= Math.atan(altAvion/disX1);
		
		console.log(" D2 = ",disX1,altAvion,disX1_2,altAvion_2,(disX1_2+altAvion_2),d2)

		d2 = myRound(d2, 4);
		d1 = myRound(d1, 4);

		ang1 = myRound(ang1, 4);
		ang2 = myRound(ang2, 4);

		var vel0 = Math.abs(d1*Math.cos(ang1)-d2*Math.cos(ang2))/enHoras;
		var vel1 = vel0;
		var vel2 = Math.abs(d1*Math.cos(ang2)-d2*Math.cos(ang1))/enHoras;
		var vel3 = vel0;
		

		vel0 = vel0/1000 ; //Esta en m/h hay que cambiar a km/h
		vel1 = vel1/1000 - Math.floor(4+Math.random()*5); //distractor  entre -4 y -9
		vel2 = vel2/1000;
		vel3 = vel3/1000 + Math.floor(4+Math.random()*5); //distractor entre 4 y 9

		var values = {
			'seg' 	: seg,
			'ang1'	: ang1,
			'dist1'	: d1,
			'ang2'	: ang2,
			'dist2'	: d2,

			'vel0'	: myRound(vel0,0),
			'vel1'	: myRound(vel1,0),
			'vel2'	: myRound(vel2,0),
			'vel3'	: myRound(vel3,0),
		};

		
		return values;
	},

	
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:
		'Se cuenta con un dispositivo láser que mide la distancia a un objeto y el ángulo con respecto al	\
		suelo que tiene el haz de luz cuando choca contra un objeto. Se le apunta a un avión que viaja		\
		en línea recta de forma paralela al suelo. Se tomaron dos medidas con [seg] segundos de diferencia	\
		y las lecturas fueron: 																			\
		<div class="ilustrations">																			\
			<img src="images/preguntas/avion.png" >														\
			<table style="display:inline-table" border="1px">												\
				<tr> <th>Distancia (m) </th> <th>Ángulo (rad) </th> </tr> 									\
				<tr> <td>[dist1]   </td> <td>[ang1]          </td> </tr> 									\
				<tr> <td>[dist2]   </td> <td>[ang2]          </td> </tr> 									\
			</table>																						\
		</div>																								\
		<b>¿Cual es la velocidad del avión?</b>																\
		',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: '\\( [vel0] \\frac{km}{h}\\)' ,
				retro 	: "Has calculado bien la velocidad del avión.", 
			},
			{
				text 	: '\\( [vel1] \\frac{km}{h}\\)',
				retro 	: "Parece que has redondeado algo de más", 
			},
			{
				text 	: '\\( [vel2] \\frac{km}{h}\\)',
				retro 	: "Al parecer intercambiaste los ángulos en los cálculos.", 
			},
			{
				text 	: '\\( [vel3] \\frac{km}{h}\\)' ,
				retro 	: 
						"Parece que te equivocaste en alguna operación la sumar o restar", 
			},
		],
	}
});// Fin Pregunta 02









