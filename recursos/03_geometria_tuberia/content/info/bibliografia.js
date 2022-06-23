var BIBLIO = [];
var BIBLIO_OBJ = [
	 {
	 	autor	: 'Wikipedia, la enciclopedia libre',
	 	year	: '2015',
	 	title	: 'Segmento circular',
	 	url		: 'https://es.wikipedia.org/wiki/Segmento_circular',
	 },
	 {
	 	autor	: 'Wikipedia, la enciclopedia libre',
	 	year	: '2015',
	 	title	: 'Sector circular',
	 	url		: 'https://es.wikipedia.org/wiki/Sector_circular',
	 },
	 {
	 	autor	: 'Wikipedia, la enciclopedia libre',
	 	year	: '2015',
	 	title	: 'Función trigonométrica',
	 	url		: 'https://es.wikipedia.org/wiki/Funci%C3%B3n_trigonom%C3%A9trica',
	 },
	  {
	 	autor	: 'Wikipedia, la enciclopedia libre',
	 	year	: '2015',
	 	title	: 'Sextante',
	 	url		: 'https://es.wikipedia.org/wiki/Sextante',
	 },
];




 for(var i = 0 ; i< BIBLIO_OBJ.length;i++){
 	var obj = BIBLIO_OBJ[i];

 	var str = 
 		obj.autor+' ('+obj.year+'). '	+
 		'<em>'+obj.title+'</em>. '	+
 		' <br>Recuperado de <a href="'+obj.url+'" target="_blank">'+obj.url+'</a>'
 	BIBLIO.push(str)	
 }