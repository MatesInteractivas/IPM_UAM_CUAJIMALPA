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
	id: 'induccion-paso',
	getVariables : function(){
		var values = {};
		return values;
	},
	//Se puede separar en varias lineas, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:
		'Es el momento en la demostración por inducción donde se agrega un elemento más y \
		suponiendo que para un número \\( n \\) de elementos anteriores funciona, se trata de \
		crear una expresión equivalente con \\( n + 1\\) elementos. <br><br><br> \
		<p>¿A qué paso se refiere el enunciado anterior?</p>',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: 'Paso inductivo',
				retro 	: 
					"Correcto, el paso inductivo es donde pruebas con un elemento más.", 
			},
			{
				text 	: 'Caso base',
				retro 	: "Para el caso base, uno intenta encontrar un elemento en el cual la expresión o el planteamiento sea verdadero.", 
			},
			{
				text 	: 'Hipótesis de inducción',
				retro 	: "Para la hipótesis, uno supone que la condición se cumple para \\( n \\) elementos.", 
			},
			{
				text 	: 'Planteamiento de la expresión o hipótesis',
				retro 	: "Esto debe de hacerse antes de la demostración, ya que esto es precisamente lo que nos dirá que debemos demostrar.",  
			},
		],
	}
});// Fin Pregunta ***************


/* 
**********************************************************
	Agregamos una Pregunta ESCALERA
**********************************************************
*/
preguntas.push({
	id: 'induccion-base',
	getVariables : function(){
		var values = {};
		return values;
	},
	//Se puede separar en varias lineas, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:
		'Cuando decimos: "es la parte de la demostración por inducción donde buscamos algún elemento \
		para el que se cumpla la expresión o el planteamiento de la hipótesis",<br><br><br>\
		<p>¿a qué paso nos referimos?</p>',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: 'Caso base',
				retro 	: "Correcto, el caso base es donde se intenta encontrar un elemento para el cual la expresión o el planteamiento sea verdadero.", 
			},
			{
				text 	: 'Paso inductivo',
				retro 	: 
					"El paso inductivo es donde se prueba con un elemento más y se trata de llegar a una expresión que involucre al término \\( n + 1\\).", 
			},
			{
				text 	: 'Hipótesis de inducción',
				retro 	: "Para la hipótesis, uno supone que la condición se cumple para \\( n \\) elementos.", 
			},
			{
				text 	: 'Planteamiento de la expresión o hipótesis',
				retro 	: "Esto debe de hacerse antes de la demostración, ya que esto es precisamente lo que nos dirá que debemos demostrar.",  
			},
		],
	}
});// Fin Pregunta ***************




/* 
**********************************************************
	Agregamos una Pregunta ESCALERA
**********************************************************
*/
preguntas.push({
	id: 'induccion-hipotesis',
	getVariables : function(){
		var values = {};
		return values;
	},
	//Se puede separar en varias lineas, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:
		'Es el momento donde uno supone que la expresión es válida para un número \\( n \\) y es previo \
		a demostrar que funciona para \\( n + 1\\).',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: 'Hipótesis de inducción',
				retro 	: "Correcto, en la hipótesis de inducción, uno supone que la condición se cumple para \\( n \\) elementos.", 
			},
			{
				text 	: 'Caso base',
				retro 	: "El caso base es donde se intenta encontrar un elemento para el cual la expresión o el planteamiento sea verdadero.", 
			},
			{
				text 	: 'Paso inductivo',
				retro 	: "El paso inductivo es donde se prueba con un elemento más y se trata de llegar a una expresión que involucre al término \\( n + 1\\).", 
			},
			{
				text 	: 'Planteamiento de la expresión o hipótesis',
				retro 	: "Esto debe de hacerse antes de la demostración, ya que esto es precisamente lo que nos dirá que debemos demostrar.",  
			},
		],
	}
});// Fin Pregunta ***************







/* 
**********************************************************
	Agregamos una Pregunta AVIONES
**********************************************************
*/

/*
preguntas.push({
	id: 'expresion02',
	getVariables : function(){
		var values = {};
		return values;
	},

	
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:
		'Tenemos la siguiente sucesión de números: 			\
			<table>													\
				<tr><th>\\(n\\)</th>	<th>\\(a_n\\)</th></tr>		\
				<tr><td>1</td>			<td>1</td></tr>				\
				<tr><td>2</td> 			<td>3</td></tr>				\
				<tr><td>3</td>			<td>5</td></tr> 			\
				<tr><td>4</td>			<td>7</td></tr>				\
				<tr><td>...</td>		<td>...</td></tr> 			\
			</table>												\
		<b>¿Cuál es la expresión que le corresponde?</b>',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: '\\( a_n = 2n-1 \\)' ,
				retro 	: "Esta es la expresión correcta.", 
			},
			{
				text 	: '\\( a_n = 2n + 1 \\)',
				retro 	: "Si \\( n = 1\\), el resultado de esta expresión es 3 y no corresponde con la tabla.", 
			},
			{
				text 	: '\\( a_n = 3^{n-1}  \\)',
				retro 	: "Si \\( n = 3\\), el resultado de esta expresión es 9 y no corresponde con la tabla.", 
			},
			{
				text 	: '\\( a_n = 4n-1  \\)' ,
				retro 	: "Esta expresión solo corresponde a algunos números y no están en orden.", 
			},
		],
	}
});// Fin Pregunta 02
*/

/* 
**********************************************************
	Agregamos una Pregunta Expresion 01
**********************************************************
*/
preguntas.push({
	id: 'expresion01',
	getVariables : function(){
		var values = {};
		return values;
	},

	
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:
		'¿Cuál es la expresión que corresponde a la siguiente sucesión de números? \
			<table border="1">	\
				<tr> \
					<th>\\(n\\)  </th> <td>1</td> <td>2</td> <td>3</td> <td>4</td> <td>\\( \\dots \\)</td>\
				</tr>\
				<tr>\
					<th>\\(a_n\\)</th> <td>1</td> <td>3</td> <td>5</td> <td>7</td> <td>\\( \\dots \\)</td>\
				</tr>\
			</table>',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: '\\( a_n = 2n-1 \\)' ,
				retro 	: "Esta es la expresión correcta.", 
			},
			{
				text 	: '\\( a_n = 2n + 1 \\)',
				retro 	: "Si \\( n = 1\\), el resultado de esta expresión es 3 y no corresponde con la tabla.", 
			},
			{
				text 	: '\\( a_n = 3^{n-1}  \\)',
				retro 	: "Si \\( n = 3\\), el resultado de esta expresión es 9 y no corresponde con la tabla.", 
			},
			{
				text 	: '\\( a_n = 4n-1  \\)' ,
				retro 	: "Esta expresión sólo corresponde a algunos números y no están en orden.", 
			},
		],
	}
});// Fin Pregunta

/* 
**********************************************************
	Agregamos una Pregunta EXPRESION 02
**********************************************************
*/
preguntas.push({
	id: 'expresion02',
	getVariables : function(){
		var values = {};
		return values;
	},

	
	//Se puede separar en varias linar, hay que incluir \ al final de la linea o terminar la cadena y agregar +
	text:
		'La expresión para calcular la suma de los primeros \\(n \\) números\
		elevados al cuadrado es : \
				$$ {n(n+1)(2n+1) \\over{6}} $$ \
		Suponiendo que ya estamos en el paso inductivo, \
		¿cuál es el desarrollo que nos permite terminar la demostración por inducción? \
			',
	options : {
		layout	:  'grid', //grid or list  
		list	: [
			{
				text 	: 
				'\\begin{align} \
					{n(n+1)(2n+1) \\over{6}} + (n+1)^2 &= \\\\ \
					{n(n+1)(2n+1)  + 6(n+1)^2 \\over{6} } &=   \\\\ \
					(n+1){n(2n+1)  + 6(n+1) \\over{6} } &=   \\\\ \
					(n+1){2n^2+n + 6n + 6 \\over{6} } &=   \\\\ \
					(n+1){2n^2+4n + 3n + 6 \\over{6} } &=   \\\\ \
					(n+1){2n(n+2) + 3(n + 2) \\over{6} } &=   \\\\ \
					(n+1){(2n+3)(n+2)  \\over{6} } &=   \\\\ \
					(n+1){(2(n+1)+1)((n+1)+1)  \\over{6} } &=   \\\\ \
				\\end{align}' ,
				retro 	: "Este es el desarrollo correcto.", 
			},
			{
				text 	: 
				'\\begin{align} \
					{n(n+1)(2n+1) \\over{6}} + (n+1)^2 &= \\\\ \
					{n(n+1)(2n+1)  + 6(n+1)^2 \\over{6} } &=   \\\\ \
					(n+1){n(2n+1)  + 6(n+1) \\over{6} } &=   \\\\ \
					(n+1){2n^2+n + 6n + 6 \\over{6} } &=   \\\\ \
					(n+1){2n^2+4n + 3n + 6 \\over{6} } &=   \\\\ \
					(n+1){2n(n+2) + 3(n + 2) \\over{6} } &=   \\\\ \
					(n+1){(2n+3)(n+2)  \\over{6} } &=   \\\\ \
				\\end{align}' ,
				retro 	: 
					"El desarrollo es correcto, pero falta un paso para \
					qu esté expresado en términos de \\(n+1\\).", 
			},
			{
				text 	: 
				'\\begin{align} \
					{n(n+1)(2n+1) \\over{6}} + (n+1) &= \\\\ \
					{n(n+1)(2n+1)  + 6(n+1) \\over{6} } &=   \\\\ \
					(n+1){n(2n+1)  +  6 \\over{6} } &=   \\\\ \
					(n+1){2n^2 + n + 6 \\over{6} } &=   \\\\ \
					(n+1){2n^2 + 4n +3n + 6 -6n \\over{6} } &=   \\\\ \
					(n+1){2n(n+2) + 3(n + 2) -6n \\over{6} } &=   \\\\ \
					(n+1){(2n+3)(n+2) -6n\\over{6} } &=   \\\\ \
					(n+1){(2(n+1)+1)((n+1)+1 - 6n)  \\over{6} } &=   \\\\ \
				\\end{align}' ,
				retro 	: 
					"El desarrollo no es correcto ya que sumaste \\(n+1\\), \
					pero estamos sumando el cuadrado de los números. Además observa		\
					que la expresión a la que se llega no es de la misma forma que la 	\
					original con \\(n \\) remplazado por \\(n +1 \\), le sobra un 		\
					\\(-6n \\).", 
			},
		],
	}
});// Fin Pregunta 02



