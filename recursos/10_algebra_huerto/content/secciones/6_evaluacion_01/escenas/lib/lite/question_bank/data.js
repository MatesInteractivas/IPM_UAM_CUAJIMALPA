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
	id: 'Lego',
	getVariables : function(){

		var caso=Math.floor((Math.random())*2);
		console.log(caso);
		if (caso==1) {
			var pregunta="¿cuántas piezas de color negro hay dentro de la caja?"
			var opcion1=30;
			var	retro1='Eso es, hay 30 piezas negras. Tres veces más que las de color blanco.';
			var opcion2=6;
			var	retro2='6 piezas son muy pocas. Según el enunciado, la suma de las piezas de color blanco, negro y azul es 200.';
			var opcion3=12;
			var	retro3='12 no es la respuesta correcta.';
			var opcion4=45;
			var	retro4='45 no es la respuesta correcta.';
			
		}
		else{
			var pregunta="¿cuántas piezas de color blanco hay dentro de la caja?"
			var opcion1=10;
			var	retro1='Muy bien, en la caja sólo hay 10 piezas de color blanco.';
			var opcion2=5;
			var	retro2='5 son muy pocas piezas, revisa tus cálculos.';
			var opcion3=15;
			var	retro3='15 no es la respuesta correcta';
			var opcion4=4;
			var	retro4='Si fueran 4 piezas blancas entonces, habría 12 piezas negras y 64 azules. Si lo sumas te da 80 y deberían ser 200.';
		}


		var values = {
			'caso': caso,
			'pregunta':pregunta,
			'opcion1':opcion1,
			'retro1':retro1,
			'opcion2':opcion2,
			'retro2':retro2,
			'opcion3':opcion3,
			'retro3':retro3,
			'opcion4':opcion4,
			'retro4':retro4
		};
		return values;
	},
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:' \
		<table ><tr>							 										\
			<td> 	 																	\
				<br>															 		\
				Una caja de un juguete para armar contiene 230 piezas. La mayoría de    \
				las piezas son de color negro, blanco y azul; juntas suman 200.         \
				Si sabemos que las piezas negras son el triple del número de piezas     \
				blancas y el número de piezas azules es cuatro veces la suma de las     \
				otras dos, entonces           			                                        \
				<br><br>																\
				<b>[pregunta]                 	  										\
				</b>																 	\
				<br><br>																\
			</td>																		\
			         																	\
		</tr></table>																	\
		',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: '																\
						[opcion1]														\
				',
				retro 	: 
					"[retro1]", 
			},
			{
				text 	: '																\
						[opcion2]														\
				',
				retro 	: 
					"[retro2]", 
			},
			{
				text 	: '																\
						[opcion3]														\
				',
				retro 	: 
					"[retro3].", 
			},
			{
				text 	: '																\
						[opcion4] 														\
						 ',
				retro 	:
					"[retro4]",  
			},
		],
	}
});// Fin Pregunta 03



/* 
**********************************************************
	Agregamos una Pregunta Auditorio
**********************************************************
*/
preguntas.push({
	id: 'auditotio',
	getVariables : function(){
		var values = {};
		return values;
	},
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:' \
				<br>																				\
				El auditorio de una universidad se encuentra en remodelación debido a que su 		\
				matrícula se incrementó el semestre pasado. Sabemos que el número de butacas	 	\
				en cada fila es 3 más el doble del número de filas existentes en todo el            \
				auditorio. Si se agregan 10 filas y se quitan 2 butacas en cada fila entonces       \
				el total de butacas en todo el auditorio se incrementa en 190.						\
																									\
				<br><br>																			\
				<b>¿Cuál de las siguientes ecuaciones te ayuda a encontrar el número de filas	    \
					y butacas que existían antes de la remodelación? Utiliza \\( x \\) como el número		\
					de filas originales.</b>										 				\
		',
	options : {
		layout	:  'list', //grid or list  
		list	: [
			{
				text 	: '\
					\\(2x^2+3x+190 = 2x^2+21x+10 \\)												\
				',
				retro 	: 
					"Esta es la ecuación correcta para calcular el número de filas que había antes \
					de la remodelación del auditorio. ", 
			},
			{
				text 	: '\
					\\(2x^2+3x-190 = 2x^2+21x+10 \\)												\
				',
				retro 	: "Esta no es la ecuación correcta para calcular el número de filas que había antes \
					de la remodelación del auditorio.", 
			},
			{
				text 	: '\
					\\(2x^2+23x+190 = 2x^2+x-30 \\)												\
				',
				retro 	: 
					"Esta no es la ecuación correcta para calcular el número de filas que había antes \
					de la remodelación del auditorio.", 
			},
			{
				text 	: '\
					\\(2x^2+23x-190 = 2x^2-19x-10 \\)												\
				',
				retro 	: 
					"Esta no es la ecuación correcta para calcular el número de filas que había antes \
					de la remodelación del auditorio.", 
			}
		],
	}
});// Fin Pregunta 03

/* 
**********************************************************
	Agregamos una Pregunta huerto1
**********************************************************
*/
preguntas.push({
	id: 'huerto1',
	getVariables : function(){
		var values = {};
		return values;
	},
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:' \
		<table ><tr>							 														\
			<td> 																						\
				Rubén ha probado otra configuración para su huerto. Así tendrá más espacio entre los	\
				manzanos. Observa la siguiente imagen y elige la opción que responda a la            	\
				pregunta. 																				\
				</td>																						\
			</tr><tr><td align="center">																					\
				<br><img  src="images/preguntas/huerto1.png"><br><br>	\
																								\
			</td>																						\
			</tr><tr>																					\
			<td>																			\
				<b>¿Cuál de las siguientes opciones es la fórmula para calcular 						\
				el número de pinos en el patrón?</b> 												 	\
			<td>																						\
		</tr></table>																					\
		',
	options : {
		layout	:  'list', //grid or list  
		list	: [
			{
				text 	: '\
				    \\(4(2n-1)+4 \\)                        \
				',
				retro 	: "Has deducido la fórmula para calcular el número de pinos en el patrón.", 
			},
			{
				text 	: '\
					\\(4(2n+1)+4 \\)                        \
				',
				retro 	: "Observa que hay filas y columnas sin árboles de manzano, pero sí pinos.", 
			},
			{
				text 	: '\
					\\(4(4n-3)+4 \\)                        \
				',
				retro 	: "Seguramente te confundiste cuando buscaste las regularidades.", 
			},
			{
				text 	: '\
					\\(4(n+2)+(n-1) \\)                        \
				',
				retro 	: "Esta expresión no es la correcta.", 
			},
		],
	}
});// Fin Pregunta 


/* 
**********************************************************
	Agregamos una Pregunta huerto1
**********************************************************
*/

preguntas.push({
	id: 'huerto2',
	getVariables : function(){
		var values = {};
		return values;
	},
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:' \
		<table ><tr>							 														\
			<td> 																						\
				Según la nueva configuración de la huerta de Rubén hay una figura en la que el número   \
				de manzanos es igual al doble del número de pinos.                                  	\
				<br><br><b>¿Cuál es el número de figura \\( (n) \\) que satisface el enunciado?			\
				</td>																					\
			</tr><tr><td align="center">																\
				<br><img  src="images/preguntas/huerto1.png"><br><br>									\
																										\
			</td>																						\
			</tr></table>																				\
		',
	options : {
		layout	:  'list', //grid or list  
		list	: [
			{
				text 	: '\
				    \\( n=16 \\)                        \
				',
				retro 	: "Has encontrado la figura en donde el número de manzanos es el doble del de pinos.", 
			},
			{
				text 	: '\
					\\( n=8 \\)                        \
				',
				retro 	: "En esta figura el número de manzanos no es mayor que el número de pinos.", 
			},
			{
				text 	: '\
					\\( n=24\\)                        \
				',
				retro 	: "Revisa bien tus cálculos, esta figura no cumple con la condición del enunciado.", 
			},
			{
				text 	: '\
					\\( n=28\\)                        \
				',
				retro 	: "Esta figura no cumple con la condición del enunciado.", 
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
	id : 'huerto3',
	getVariables : function(){

		var n			=  Math.round(8*Math.random()+3);
		var totalArboles= 0;
		var totalArbolesMal1=0;
		var totalArbolesMal2=0;

		for (var i = 1; i <=n; i++) {
			totalArboles=totalArboles+(i*i)+(8*i);	
			totalArbolesMal1=totalArbolesMal1+(i*i)+(2*n);
			totalArbolesMal2=totalArbolesMal2	+(i*i)+(4*i);
		}


		var values = {
			'n' 	: n,
			'totalArboles' :totalArboles,
			'totalArbolesMal1' :totalArbolesMal1,
			'totalArbolesMal2' :totalArbolesMal2
		};
		return values;
	},

	
	text:' \
		<table ><tr>							 														\
			<td> 																						\
				Rubén cuenta con [n] terrenos con diferentes dimensiones en donde ha plantado manzanos y pinos de  \
				manera progresiva, es decir, el primer terreno cumple con la primera figura del patrón (\\(n=1\\)), el segundo       	\
				cumple con la segunda figura (\\(n=2\\)), así suscesivamente hasta que el terreno [n] cumple con la figura respectiva del patrón (\\(n=9\\)).\
				<br><b>¿Cuál es la fórmula que satisface el enunciado anterior y expresa el número total de árboles (manzanos y pinos) que Rubén plantó en todos sus terrenos?			\
				</td>																					\
			</tr><tr><td align="center">																\
				<br><img  src="images/preguntas/huerto1.png"><br>									\
																										\
			</td>																						\
			</tr></table>																				\
		',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: '\
				    \\(  \\sum_{n=1}^{[n]}n^2+8n \\) = [totalArboles] 	                       					\
				',
				retro 	: "Rubén plantó [totalArboles] árboles en total.", 
			},
			{
				text 	: '\
					\\(  \\sum_{n=1}^{[n]}n^2+2n \\)  = [totalArbolesMal1]                       \
				',
				retro 	: "Revisa el cálculo del número de pinos.", 
			},
			{
				text 	: '\
					\\(  \\sum_{n=1}^{[n]}n^2+4n \\)  = [totalArbolesMal2]                       \
				',
				retro 	: "Revisa bien tus cálculos, así no se calcula el número de pinos.", 
			},
		],
	}
});// Fin Pregunta 01










