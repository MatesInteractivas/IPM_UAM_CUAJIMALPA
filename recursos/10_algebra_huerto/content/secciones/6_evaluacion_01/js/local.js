var ventana;
var allElems;
var padre;

function initialize(){
  checkZoomMobile();
  addLinksGlossary();
  addCustomScrollbar();
}


function checkZoomMobile(){
  if(/webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.addEventListener('touchend', function(e) {  
      if(window.parent.document.getElementById("main")!=null){
	parent.manageZoom();
      }
    },false);
  }
}

function addLinksGlossary(){
  
    allElems = getAllText(document);
  
    for(var i=0;i<GLOSARIO.definiciones.length;i++){
	
      var trm = GLOSARIO.definiciones[i].trm;
      
      for(var j=0;j<GLOSARIO.definiciones[i].strs.length;j++){
	
	var str = GLOSARIO.definiciones[i].strs[j];

	var re1 = new RegExp('([^\\wáéíóúüñ])'+str+'([^\\wáéíúóüñ])','i');
	var re2 = new RegExp('^'+str+'([^\\wáéíúóüñ])','i');
	
	for(var p=0;p<allElems.length;p++){
	  
	  if(allElems[p].className!="course_content"){
	    
	    //alert(allElems[p].tagName);
	    
	    var txt = allElems[p].innerHTML;
	    var match1 = re1.exec(txt);
	    var match2 = re2.exec(txt);
	    
	    if(match1) {
		allElems[p].innerHTML = txt.substr(0,match1.index+1) + "<a href='#' onmouseover='showDef(" + i + "," + p +  ")'  onmouseout='hideDef()'>"+ match1[0].substr(1,match1[0].length-2) + "</a>" + txt.substr(match1.index+str.length+1);
		break;
	    } else if(match2){
		allElems[p].innerHTML = "<a href='#' onmouseover='showDef(" + i + "," + p +  ")' onmouseout='hideDef()'>"+ match2[0].substr(0,match2[0].length-1) + "</a>" + txt.substr(match2.index+str.length);
		break;
	    }
	  }
	  
	}
      }
    }  
}



function getAllText(padre){
    
    var pars = $('p');
    var divs = $('div');
    var lis = $('li');

    pars = [].slice.call(pars);
    divs = [].slice.call(divs);
    lis = [].slice.call(lis);
    
    var miArr = pars.concat(divs.concat(lis));
    
    return miArr;    
}

function showDef(nDef,nElem){
  
  if(ventana==null){
    ventana = document.createElement("div");
    ventana.setAttribute("class","ventana_def");
    ventana.innerHTML= GLOSARIO.definiciones[nDef].def;
    padre = allElems[nElem].parentNode;
    padre.insertBefore(ventana,allElems[nElem].nextSibling);
  }
}

function hideDef(){
  padre.removeChild(ventana);
  ventana = null;
}


// VENTANA DE CONDICIONES DE USO
  
function showCredits(){
    var padre = window.parent;
    var mensajeTipoSet = { type: "set", name: "conditions", value: "show" };
    padre.postMessage(mensajeTipoSet, "*");
}


//SCROLLBAR

function addCustomScrollbar(){
    $(".course_content").css('height',$(window).height()-20);
    $(".course_content").mCustomScrollbar({
	    theme:"dark-2",
	    scrollbarPosition: "inside",
	    autoHideScrollbar: false,
	    scrollButtons:{
	      enable:true,
	      scrollAmount: 40
	    },
	    advanced: {
		updateOnContentResize:true
	    }
	}
    );
    $(window).resize(function() {
      //alert('resized');
      $(".course_content").css('height',$(window).height()-20);
      updateScrollbar();
    });
}

function updateScrollbar(){
    $('.course_content').mCustomScrollbar("update");
}
