$('#myTabs').on('click', 'li:gt(1)', function(event) {
	var tabTit = $(this).children('a').text();
	$('.tab-content .tab-banner').text(tabTit);
});
$('.pers .right').each(function(){
    var demoHtml = $(this).text().slice(0,170)+'...';
    $(this).text(demoHtml);
});
