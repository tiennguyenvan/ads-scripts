var sneeit_leads_blogspot = setInterval(function(){	if (typeof($) == 'undefined') {	return;	}
clearInterval(sneeit_leads_blogspot);
$(document).ready(function(){
	// move breadcrumb to top
	$('#post-breadcrumb').prependTo($('.post .item'));
	$('<span> / </span>').insertAfter($('#post-breadcrumb a'));

	// move feature image top top of site
	$('#post-body-inner img[width="0"]').removeAttr('width');
	$('#post-body-inner img[height="0"]').removeAttr('height');
	$('.feature').each(function(){
		$('.post-media').prependTo($(this));
	});
	$('#post-taxonomy-links').each(function(){
		$(this).insertAfter($('.post-ads-bot'));		
	});

	// hidding aff links
//	$('a[href]').attr('target', '_blank');	
//	setTimeout(function(){
//		$('a[href]').each(function(){
//			var href = $(this).attr('href');
//
//			$(this).mouseenter()(function(){
//				$(this).attr('href', 'javascript: void()');
//			});
//			$(this).mousedown(function(){
//				$(this).attr('href', href);
//			});
//		});
//	}, 2000);
});



	
	
	


}, 50);

