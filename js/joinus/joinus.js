(function() {
	$('.nav.tabnav li').on('click',function(){
		var index = $(this).index();
		$('.nav.tabnav li.dian').css({
			"top": 31+(36*(index-1))+'px'
		});
	});
})();
