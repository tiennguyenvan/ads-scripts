var sneeit_leads_blogspot = setInterval(function(){	if (typeof($) == 'undefined') {	return;	}
clearInterval(sneeit_leads_blogspot);
$(document).ready(function(){
	// MODIFY HTML 	
	// toplinks: <!-- WpGetTopLink1 -->
	$('<ins class="adsbygoogle"'+
		'style="display:inline-block;width:468px;height:15px"' +
		'data-ad-client="ca-pub-5209796814200646"'+
		'data-ad-slot="5857758816"></ins>'+
		'<script>'+
			'(adsbygoogle = window.adsbygoogle || []).push({});'+
		'<\/script>'
	).appendTo($('#post-tags'));

	$(
	'<div class="top-links">' + 
		'<a href="https://sneeit.com/category/wordpress/themes/">WP THEMES</a>'+
		'<a href="https://sneeit.com/category/blogger/templates">BLOGGER TEMPLATES</a>'+
		'<a href="https://sneeit.com/category/webmaster">WEBMASTER TIPS</a>'+
	'</div>').prependTo($('.top .w'));
	
	// top social icons
	$('<a href="https://www.facebook.com/sneeitdotcom/" target="_blank">FACE</a>'+
		'<a href="https://twitter.com/tiennguyentweet" target="_blank">TWITTER</a>'+
		'<a href="https://plus.google.com/b/102946791258279958344/" target="_blank">G+</a>'+
		'<a href="https://www.youtube.com/channel/UCg-yHM0fuL1nwEdIIolD6sg" target="_blank">YOUTUBE</a>'+
		'<div class="clear"></div>'
	).appendTo($('.top .w'));			
	

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
		'</div><div class="clear"></div>'
	).appendTo($('.brand'));
	
	// main menu
	$('.main > .menu').html(
		'<span><a href="/">Home</a></span>'+
		'<span class="sneeit-lead"><a href="[href]">[name]</a></span>'+
		'<span class="sneeit-lead"><a href="[href]">[name]</a></span>'+
		'<span class="sneeit-lead"><a href="[href]">[name]</a></span>'
	);
	
	// submneu <!-- WpGetMainTrans2 --> <!-- WpGetTrans3 -->
	$('<ins class="adsbygoogle"' + 
		'style="display:inline-block;width:468px;height:15px"' + 
		'data-ad-client="ca-pub-5209796814200646"' + 
		'data-ad-slot="7640602017"></ins>' + 
		'<script>' + 
		'(adsbygoogle = window.adsbygoogle || []).push({});' + 
		'<\/script>' + 

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
		'<\/script>'
	).prependTo($('.index-lead'));	
	
	// top post <!-- WpGetTopPost2 -->		
	$('<ins class="adsbygoogle"' + 
		'style="display:block"' + 
		'data-ad-client="ca-pub-5209796814200646"' + 
		'data-ad-slot="3439187458"' + 
		'data-ad-format="auto"></ins>' + 
		'<script>' + 
		'(adsbygoogle = window.adsbygoogle || []).push({});' + 
		'<\/script>'
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
		'<\/script>'
	).prependTo($('.post-lead-bot'));
	
	
	
	// facebook iframe
	$('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsneeitdotcom%2F&amp;tabs&amp;width=200&amp;height=230&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=403849583055028" width="200" height="230" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>'
	).insertBefore($('#PopularPosts1'));
		
	// sidebar ads <!-- WpGet-Sidebar2 -->
	$('<ins class="adsbygoogle"' + 
		'style="display:inline-block;width:200px;height:200px"' + 
		'data-ad-client="ca-pub-5209796814200646"' + 
		'data-ad-slot="5826711489"></ins>' + 
		'<script>' + 
		'(adsbygoogle = window.adsbygoogle || []).push({});' + 
		'<\/script>'
	).insertAfter($('#PopularPosts1'));
	
	// jump top
	$('<a class="scroll-up shad" href="#">TOP</a>').appendTo($('body'));
	$('.scroll-up').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});

	// footer ads <!-- WpGetFooter2 -->
	$('<ins class="adsbygoogle"' + 
		'style="display:block"' + 
		'data-ad-client="ca-pub-5209796814200646"' + 
		'data-ad-slot="9842434968"' + 
		'data-ad-format="auto"></ins>' + 
		'<script>' + 
		'(adsbygoogle = window.adsbygoogle || []).push({});' + 
		'<\/script>'
	).appendTo($('#footer .f1'));
	
	// footer copyright
	var dt = new Date();
	$('<span>Copyright 2013-'+dt.getYear()+' '+ $('.brand > a > b').text()+' - All Rights Reserved.</span>').prependTo($('#footer .f3 .f3-inner'));
	
	$('.f3 a').each(function(){
		if ($(this).text().toLowerCase() == 'Home') {
			$(this).remove();
		}
	});
	
	// move breadcrumb to top
	$('#post-breadcrumb').prependTo($('.post .item'));
	$('<span> / </span>').insertAfter($('#post-breadcrumb a'));

	// move feature image top top of site
	$('#post-body-inner img[width="0"]').removeAttr('width');
	$('#post-body-inner img[height="0"]').removeAttr('height');
	$('.feature').each(function(){
		if ($('.post-media').length) {
			$('.post-media').prependTo($(this));
		} else {
			var tag_1st = $('#post-body-inner > *').first();
			var tag_1st_1st = $(tag_1st).find('*').first();
			var img_tag = false;
			if ($(tag_1st).is('img')) {
				img_tag = tag_1st;
			} else if ($(tag_1st_1st).is('img')) {
				img_tag = tag_1st_1st;
			}
			
			if (img_tag) {
				$(img_tag).prependTo($(this));
			}
			
		}		
	});
	$('#post-taxonomy-links').each(function(){
		$(this).insertAfter($('.post-lead-bot'));		
	});
	
	// call ads manager
	var main_lead = document.createElement('script');
	main_lead.async = true;
	main_lead.src = 'https://tiennguyenvan.github.io/ads-scripts/sneeit-leads.min.js';
	(document.getElementsByTagName('head')[0] || document.body).appendChild(main_lead);

	
	
});}, 50);
