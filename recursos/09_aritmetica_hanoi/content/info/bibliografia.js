var BIBLIO = [];
var BIBLIO_OBJ = [
	 {
	 	autor	: 'Wikipedia, la enciclopedia libre',
	 	year	: '2015',
	 	title	: 'Torres de Hanói',
	 	url		: 'https://es.wikipedia.org/wiki/Torres_de_Han%C3%B3i',
	 },
	 {
	 	autor	: 'Wikipedia, la enciclopedia libre',
	 	year	: '2015',
	 	title	: 'Tower of Hanoi',
	 	url		: 'https://en.wikipedia.org/wiki/Tower_of_Hanoi',
	 },
	 {
	 	autor	: 'Wikipedia, la enciclopedia libre',
	 	year	: '2015',
	 	title	: 'Édouard Lucas',
	 	url		: 'https://en.wikipedia.org/wiki/%C3%89douard_Lucas',
	 },
	  {
	 	autor	: 'El Blog de Godie',
	 	year	: '2015',
	 	title	: 'Pseudocodigo de las torres de Hanoi',
	 	url		: 'http://godieboy.com/2009/09/pseudocodigo-de-las-torres-de-hanoi.html',
	 },
	{
	 	autor	: 'Wikipedia, la enciclopedia libre',
	 	year	: '2015',
	 	title	: 'Matemática recreativa',
	 	url		: 'https://es.wikipedia.org/wiki/Matem%C3%A1tica_recreativa',
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