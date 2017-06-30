$( document ).ready(function() {

	makeBSS('.bss-slides');

    $('.bomb').on('click', function() {
    	$(".birthday").css("display", "block");
    	$(".love").css("display", "block");
    	var entireDiv = $('.sliding-panel');
    	//cvar photo = document.getElementById("photo"); //or use jQuery's $("#photo")
		TweenLite.to(entireDiv, 1.5, {height:0});
		TweenLite.to($(".bomb"), 1.5, {opacity:0});
		TweenLite.to($(".sliding-panel p"), 1.5, {opacity:0});

		TweenLite.to($(".happy"), 1.5, {delay: 1.5, left:500});
		TweenLite.to($(".birthday"), 1.5, {delay: 1.5, right:478});

		$(".bss-slides").css("display", "block");
    })
});