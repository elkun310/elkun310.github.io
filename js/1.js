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
 	$('.btn-comment').click(function(){
 		$('body,html').animate({scrollTop:$('.khoicomment').offset().top},500);
 		return false;
 	})
})  
 