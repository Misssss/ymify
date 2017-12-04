(function() {
	var a,b,c;
	a = $(window).height();	
	$(window).scroll(function(){		
		var b = $(this).scrollTop();
		$(".wrapper>div").each(function(){
			c = $(this).offset().top;						
			if(a+b>(c+500)){
				$(this).addClass("ani");
			}
			else{
				$(this).removeClass("ani");
			}
		});	
	});
	$('.news-per-con').each(function(){
	    var demoHtml = $(this).text().slice(0,60)+'...';
	    $(this).text(demoHtml);
	});
})();