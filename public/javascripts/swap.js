$(".swap").click(function(){
    $(".swapout").hide()
    $($(this).attr('href')).fadeIn("slow")
    $('html, body').animate({scrollTop:0}, 'slow');
	//return false;

});