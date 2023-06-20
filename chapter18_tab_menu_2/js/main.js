$(function () {
	var tabAnchor = $('.tabs-nav  a'),
		tabPanel = $('.tabs-panel');
		
	tabAnchor.on('click',function(e){
		e.preventDefault();
		tabAnchor.removeClass('active');
		$(this).addClass('active');
		//var NewLink = $(this).attr('href');
		
		tabPanel.hide();
		$($(this).attr('href')).show();
		
	});
	
	tabAnchor.eq(0).trigger('click');		

});

