var sneeit_leads_blogspot = setInterval(function(){	if (typeof($) == 'undefined') {	return;	}
clearInterval(sneeit_leads_blogspot);
$(document).ready(function(){
	
	// MODIFY HTML 
	// place ads into position
	// toplinks: <!-- WpGetTopLink1 -->
	$('<ins class="adsbygoogle"'+
		'style="display:inline-block;width:468px;height:15px"' +
		'data-ad-client="ca-pub-5209796814200646"'+
		'data-ad-slot="5857758816"></ins>'+
		'<script>'+
			'(adsbygoogle = window.adsbygoogle || []).push({});'+
		'<\/script>'
	).prependTo($('.top .w'));

	// brandads <!-- WpGetBrandRes1 -->
	$('<div class="brand-lead">' + 
		'<ins class="adsbygoogle"'+
		'style="display:block"'+
		'data-ad-client="ca-pub-5209796814200646"'+
		'data-ad-slot="5716375742"'+
		'data-ad-format="auto"></ins>'+
		'<script>'+
		'(adsbygoogle = window.adsbygoogle || []).push({});'+
		'<\/script>'+
		'</div>'
	).appendTo($('.brand'));
	
	// submneu <!-- WpGetMainTrans2 --> <!-- WpGetTrans3 -->
	$('<ins class="adsbygoogle"' + 
		'style="display:inline-block;width:468px;height:15px"' + 
		'data-ad-client="ca-pub-5209796814200646"' + 
		'data-ad-slot="7640602017"></ins>' + 
		'<script>' + 
		'(adsbygoogle = window.adsbygoogle || []).push({});' + 
		'</script>' + 

		'<ins class="adsbygoogle"' + 
		'style="display:inline-block;width:468px;height:15px"' + 
		'data-ad-client="ca-pub-5209796814200646"' + 
		'data-ad-slot="2136993892"></ins>' + 
		'<script>' + 
		'(adsbygoogle = window.adsbygoogle || []).push({});' + 
		'<\/script>'
	).prependTo($('.main .inner .menu'));
		
	// index blog rolls
	$('<ins class="adsbygoogle"' + 
		'style="display:block"' + 
		'data-ad-format="fluid"' + 
		'data-ad-layout-key="-fr+5f+8y-gf-2c"' + 
		'data-ad-client="ca-pub-5209796814200646"' + 
		'data-ad-slot="6632618586"></ins>' + 
		'<script>' + 
     		'(adsbygoogle = window.adsbygoogle || []).push({});' + 
		'</script>'
	).prependTo($('.index-lead'));	
	
	// top post <!-- WpGetTopPost2 -->		
	$('<ins class="adsbygoogle"' + 
		'style="display:block"' + 
		'data-ad-client="ca-pub-5209796814200646"' + 
		'data-ad-slot="3439187458"' + 
		'data-ad-format="auto"></ins>' + 
		'<script>' + 
		'(adsbygoogle = window.adsbygoogle || []).push({});' + 
		'</script>'
	).prependTo($('.post-lead-top'));
	
	
	// bot post
	$('<ins class="adsbygoogle"' + 
		'style="display:block"' + 
		'data-ad-format="fluid"' + 
		'data-ad-layout-key="-8c+1v-dd+e2+ex"' + 
		'data-ad-client="ca-pub-5209796814200646"' + 
		'data-ad-slot="1937569377"></ins>' + 
		'<script>' + 
		'(adsbygoogle = window.adsbygoogle || []).push({});' + 
		'</script>'
	).prependTo($('.post-lead-bot'));
	
	
	// facebook iframe
	$('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsneeitdotcom%2F&amp;tabs&amp;width=200&amp;height=230&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=403849583055028" width="200" height="230" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>'
	).insertBefore($('.PopularPosts1'));
	
	
	// sidebar ads <!-- WpGet-Sidebar2 -->
	$('<ins class="adsbygoogle"' + 
		'style="display:inline-block;width:200px;height:200px"' + 
		'data-ad-client="ca-pub-5209796814200646"' + 
		'data-ad-slot="5826711489"></ins>' + 
		'<script>' + 
		'(adsbygoogle = window.adsbygoogle || []).push({});' + 
		'</script>'
	).insertAfter($('.PopularPosts1'));

	
	
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
	$('a[href]').attr('target', '_blank');	
	setTimeout(function(){
		$('a[href]').each(function(){
			var href = $(this).attr('href');

			$(this).mouseenter()(function(){
				$(this).attr('href', 'javascript: void()');
			});
			$(this).mousedown(function(){
				$(this).attr('href', href);
			});
		});
	}, 2000);
	
});}, 50);

