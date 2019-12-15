 $(function(){
 	var vitriedu = $('.edu').offset().top;
 	console.log(vitriedu);
 	$('.xuong').click(function(){
 		$('body,html').animate({scrollTop:vitriedu},500);
 	})
 	$('.btn-kn').click(function(){

 		$('body,html').animate({scrollTop:vitriedu},500);
 		return false;
 	})
})  
 