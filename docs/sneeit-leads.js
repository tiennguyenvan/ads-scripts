/*

You will markup your ads like this:
<div class="sneeit-lead">
	[title][name][snippet][image.src][image.width][image.height][href]
	[title.attr] for attribute
</div>
If you use [image. we will search all leads which has image width x height 
nearly match your image size or image parent size if image size not specific

the parent must be not contain anything else of image will be count as size

if both image and parent size are missing, we pick random

after pick most nearly size images, we pick base on nearly keyword (parse from your body texts)

Keywords separate by commas
 */

var sneeit_leads = {
	/* 
	 * TEMPLATEMONSTER.COM
	 * 
	 * */
	'templatemonster' : {
		weight: 1000,
		ads: [
			{				
				name: 'Monster Templates',
				keywords: 'web, template',				
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://www.templatemonster.com/?aff=tiennguyenvan',
			}
		],
		replacer: function (href) {
			if (href.indexOf('templatemonster.com') != -1 ||
				href.indexOf('templatemonsterpreview.com') != -1
			) {
				href = sneeit_aff_query(href, 'aff', 'tiennguyenvan');
			}			
			return href;
		}
	},
	
	
	/* 
	 * AMAZON.COM 
	 * 
	 * */
/*	
	'amazon.com' : {		
		ads: [
			{				
				keywords: '',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: '',
			}
		],
		replacer: function (href) {			
			href = sneeit_aff_query(href, 'tag', 'myfavgifcar-20');
			href = sneeit_aff_query(href, 'camp', '1789');
			href = sneeit_aff_query(href, 'creative', '9325');						
			return href;
		}
	},
*/	
	
	/* 
	 * SERVERPRESS.COM 
	 * 
	 * */
	'serverpress.com' : {	
		
		ads: [
			{			
				name: 'Local Server',
				keywords: 'local, server',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://serverpress.com/ref/376/',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, '/ref/', '376');					
		}
	},
	
	
	/* 
	 * BLUEHOST.COM
	 * 
	 * */
	'bluehost.com' : {	
		weight: 1000,
		ads: [
			{				
				name: 'Blue Host',
				keywords: 'wordpress, host',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://www.bluehost.com/track/tiennguyenvan/',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, '/track/', 'tiennguyenvan');							
		},
	},
		
	
	
	/* 
	 * HAPPYTHEMES.COM
	 * 
	 * */
	'happythemes.com' : {		
		ads: [
			{				
				name: 'Happy Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://www.happythemes.com/member/aff/go/tiennguyenvan',
			}
		],
		replacer: function (href) {
			return href = sneeit_aff_query(href, '/aff/go/', 'tiennguyenvan');			
		}
	},
	
	
	/* 
	 * CODESTER.COM
	 * 
	 * */
	'codester.com' : {		
		ads: [
			{			
				name: 'Codester Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://www.codester.com/categories/33/wordpress-themes?ref=tiennguyenvan',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', 'tiennguyenvan');							
		}
	},
	
	/* 
	 * THEDESIGNSPACE.CO
	 * 
	 * */
	'thedesignspace.co' : {		
		ads: [
			{				
				name: 'Des Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://thedesignspace.co/store/?ref=86',
			}
		],
		replacer: function (href) {
			return href = sneeit_aff_query(href, 'ref', '86');			
		}
	},
	

	
	/* 
	 * WEB-DORADO.COM
	 * 
	 * */
	'web-dorado.com' : {		
		ads: [
			{			
				name: 'Dorado Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://web-dorado.com/affiliates/idevaffiliate.php?id=769&url=259',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'id', 'tiennguyenvan_7_3_19');			
		}
	},
	
		
	/* 
	 * MONTEREYPREMIER.COM
	 * 
	 * */
	'montereypremier.com' : {		
		ads: [
			{			
				name: 'Web Solutions',
				keywords: 'web, solution',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://montereypremier.com/ref/193/',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', '193');			
		}
	},
	
		
	/* 
	 * APPTHEMES.COM
	 * 
	 * */
	'appthemes.com' : {		
		ads: [
			{			
				name: 'App Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://www.appthemes.com/themes?aid=46045',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'aid', '46045');			
		}
	},
	
	/* 
	 * ELEGANTTHEMES.COM
	 * 
	 * */
	'elegantthemes.com' : {	
		weight: 1000,
		ads: [
			{			
				name: 'Premium Theme Club',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'http://www.elegantthemes.com/affiliates/idevaffiliate.php?id=44642&url=38309',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'id', '44642');			
		}
	},
	
	
	
	/* 
	 * ATHEMES.COM
	 * 
	 * */
	'athemes.com' : {	
		weight: 1000,
		ads: [
			{			
				name: 'A+ Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://athemes.com/wordpress-themes/?ref=766',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', '766');			
		}
	},
	
	
	/* 
	 * ENGINETHEMES.COM
	 * 
	 * */
	'enginethemes.com' : {		
		ads: [
			{			
				name: 'Engine Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://www.enginethemes.com/themes?ref=tiennguyenvan',
			}
		],
		replacer: function (href) {
			href = sneeit_aff_query(href, 'ref', 'tiennguyenvan');	
			return sneeit_aff_query(href, '/aff/go/', 'tiennguyenvan');				
		}
	},
	
	
	/* 
	 * NIMBUSTHEMES.COM
	 * 
	 * */
	'nimbusthemes.com' : {		
		ads: [
			{			
				name: 'Nimbus Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://www.nimbusthemes.com/https://www.nimbusthemes.com/wordpress-themes/ref/146/',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, '/ref/', '146');				
		}
	},
	
	
	
	/* 
	 * HEROTHEMES.COM
	 * 
	 * */
	'herothemes.com' : {		
		ads: [
			{			
				name: 'Hero Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://herothemes.com/?ref=101',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, '/ref/', '101');				
		}
	},
	
	
	/* 
	 * CSSIGNITER.COM
	 * 
	 * */
	'cssigniter.com' : {		
		ads: [
			{			
				name: 'Igniter Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://www.cssigniter.com/members/aff/go/tiennguyenvan?i=233',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, '/aff/go/', 'tiennguyenvan');				
		}
	},
	
	
	
	/* 
	 * THEMIFY.ME
	 * 
	 * */
	'themify.me' : {		
		ads: [
			{			
				name: 'WP Themify',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://themify.me/member/aff/go/tiennguyenvan/?cr=aHR0cHM6Ly90aGVtaWZ5Lm1lL3RoZW1lcw==',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, '/aff/go/', 'tiennguyenvan');				
		}
	},
	
	
	
	/* 
	 * MYTHEMESHOP.COM
	 * 
	 * */
	'mythemeshop.com' : {		
		ads: [
			{			
				name: 'Theme Shop',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://mythemeshop.com/themes/?ref=tien426',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', 'tien426');				
		}
	},
	
	
	
	/* 
	 * WPLOOK.COM
	 * 
	 * */
	'wplook.com' : {		
		ads: [
			{			
				name: 'WPLook Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://wplook.com/wordpress/themes/?ref=186',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', '186');				
		}
	},
	
	
	
	/* 
	 * WPZOOM.COM
	 * 
	 * */
	'wpzoom.com' : {		
		ads: [
			{			
				name: 'WPZoom Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://www.wpzoom.com/members/go.php?r=20561&i=l1',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'r', '20561');				
		}
	},
	
	
	
	/* 
	 * ASPENGROVESTUDIOS.COM
	 * 
	 * */
	'aspengrovestudios.com' : {		
		ads: [
			{			
				name: 'Divi AG Themes',
				keywords: 'wordpress, theme, divi',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://aspengrovestudios.com/product/?ref=96',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, '96', '96');				
		}
	},
	
	
	
	/* 
	 * SHOPIFY.COM
	 * 
	 * */
	'shopify.com' : {		
		weight: 1000,
		ads: [
			{			
				name: 'Shop Themes',
				keywords: 'shop, template, store, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://www.shopify.com/?ref=sneeit',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', 'sneeit');				
		}
	},
	
	
	
	/* 
	 * B3MULTIMEDIA.IE
	 * 
	 * */
	'b3multimedia.ie' : {		
		ads: [
			{			
				name: 'Design Service',
				keywords: 'web, design, service',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://www.b3multimedia.ie/https://www.b3multimedia.ie/services/web-design-service/?ref=41',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', '41');				
		}
	},
	
	
	
	/* 
	 * THEMEISLE.COM
	 * 
	 * */
	'themeisle.com' : {		
		ads: [
			{			
				name: 'Isle Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://themeisle.com/wordpress-themes/?ref=8185',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', '8185');				
		}
	},
	
	
	
	/* 
	 * CREATIVEMARKET.COM
	 * 
	 * */
	'creativemarket.com' : {
		weight: 1000,
		ads: [
			{			
				name: 'Creative Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://creativemarket.com/themes/wordpress?u=tiennguyenvan',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'u', 'tiennguyenvan');				
		}
	},
	
	
	
	/* 
	 * MUSE-THEMES.COM
	 * 
	 * */
	'muse-themes.com' : {		
		ads: [
			{			
				name: 'Adobe Muse Themes',
				keywords: 'muse, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'http://www.muse-themes.com/#_l_7a',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, '#', '_l_7a');				
		}
	},
	
	
	
	/* 
	 * TORETTHEMES.COM
	 * 
	 * */
	'toretthemes.com' : {		
		ads: [
			{			
				name: 'Toret Divi Theme',
				keywords: 'wordpress, divi, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://toretthemes.com/https://toretthemes.com/child-themes/?ref=6',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', '6');				
		}
	},
	
	
	
	/* 
	 * TEMPLATIC.COM
	 * 
	 * */
	'templatic.com' : {		
		ads: [
			{			
				name: 'Templatic WP Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://templatic.com/wordpress-themes-store/?ref=tiennguyenvan',
			}
		],
		replacer: function (href) {
			if ('https://templatic.com/' == href || 
				'https://templatic.com' == href || 
				href.indexOf('templatic.com') !== false && 
				href.indexOf('i=') !== false
			) {		
				href = sneeit_aff_query(href, '/aff/go/', 'tiennguyenvan');
			}
			href = sneeit_aff_query(href, 'ref', 'tiennguyenvan');
			href = sneeit_aff_query(href, 'aff', 'tiennguyenvan');
			
			return href;
		}
	},
	
	
	
	/* 
	 * DIVITHEMESTORE.COM
	 * 
	 * */
	'divithemestore.com' : {		
		ads: [
			{			
				name: 'Divi Theme Store',
				keywords: 'wordpress, divi, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://divithemestore.com/theme-store/ref/61/',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, '/ref/', '61');				
		}
	},
	
	
	
	/* 
	 * BESUPERFLY.COM
	 * 
	 * */
	'besuperfly.com' : {		
		ads: [
			{			
				name: 'Divi Superfly Themes',
				keywords: 'wordpress, divi, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://besuperfly.com/shop/aff/232/',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, '/aff/', '232');				
		}
	},
	
	
	
	/* 
	 * GRAYGRIDS.COM
	 * 
	 * */
	'graygrids.com' : {		
		ads: [
			{			
				name: 'HTML5 Grid Templates',
				keywords: 'html5, template, boostrap',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://graygrids.com/bootstrap-templates/ref/tiennguyenvan/',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, '/ref/', 'tiennguyenvan');				
		}
	},
	
	
	
	/* 
	 * 7THEME.NET
	 * 
	 * */
	'7theme.net' : {		
		ads: [
			{			
				name: '7 WP Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'http://7theme.net?ref=6338',
			}
		],
		replacer: function (href) {
			href = sneeit_aff_query(href, 'ref', '6338');				
			return sneeit_aff_query(href, 'aff', '6338');				
		}
	},
	
	
	
	/* 
	 * PROTEUSTHEMES.COM
	 * 
	 * */
	'proteusthemes.com' : {		
		ads: [
			{			
				name: '',
				keywords: '',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: '',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', 'tvnguyen');				
		}
	},
	
	
	/* 
	 * DESIGNORBITAL.COM
	 * 
	 * */
	'designorbital.com' : {		
		ads: [
			{			
				name: 'Orbital WP Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://designorbital.com/wordpress-themes/?ref=tiennguyenvan',
			}
		],
		replacer: function (href) {
			href = sneeit_aff_query(href, 'ref', 'tiennguyenvan');				
			return sneeit_aff_query(href, 'aff', 'tiennguyenvan');				
		}
	},
	
	
	/* 
	 * THEMEFOREST.NET
	 * 
	 * */
	'themeforest.net' : {		
		weight: 1000,
		ads: [
			{			
				name: 'Popular WordPress Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://themeforest.net/popular_item/by_category?category=wordpress?ref=tiennguyenvan',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', 'tiennguyenvan');				
		}
	},
	
	
	/* 
	 * GRAPHICRIVER.NET
	 * 
	 * */
	'graphicriver.net' : {		
		ads: [
			{			
				name: 'Graphic River',
				keywords: 'graphic, design',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://graphicriver.net/page/top_sellers?ref=tiennguyenvan',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', 'tiennguyenvan');				
		}
	},
	
	
	/* 
	 * AUDIOJUNGLE.NET
	 * 
	 * */
	'audiojungle.net' : {		
		ads: [
			{			
				name: 'Audio Jungle',
				keywords: 'audio, sound',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://audiojungle.net/page/top_sellers?ref=tiennguyenvan',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', 'tiennguyenvan');				
		}
	},
	
	
	/* 
	 * VIDEOHIVE.NET
	 * 
	 * */
	'videohive.net' : {		
		ads: [
			{			
				name: 'Video Hive',
				keywords: 'video, clip, animation',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://videohive.net/page/top_sellers?ref=tiennguyenvan',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', 'tiennguyenvan');				
		}
	},
	

	/* 
	 * CODECANYON.NET
	 * 
	 * */
	'codecanyon.net' : {		
		ads: [
			{			
				name: 'WordPress Plugins',
				keywords: 'wordpress, plugin',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://codecanyon.net/popular_item/by_category?category=wordpress?ref=tiennguyenvan',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'ref', 'tiennguyenvan');				
		}
	},	
	
	
	/* 
	 * ENVATO.MARKET
	 * 
	 * */
	'envato.market' : {		
		ads: [
			{			
				name: '',
				keywords: '',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: '',
			}
		],
		replacer: function (href) {
			href = href.split('?');
			href[0] = '//1.envato.market/c/490795/298927/4662';
			return href.join('?');
		}
	},	
	
	
	/* 
	 * ELEMENTS.ENVATO.COM
	 * 
	 * */
	'elements.envato.com' : {
		weight: 1000,
		ads: [
			{			
				name: 'Web Elements',
				keywords: 'web, element',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: '//1.envato.market/c/490795/298927/4662?u=url',
			}
		],
		replacer: function (href) {
			if (href.indexOf('elements.envato.com?') != -1 ||
				href.indexOf('elements.envato.com/') != -1) {
				href = '//1.envato.market/c/490795/298927/4662?u=' . encodeURIComponent(href);		
			}
						
			return href;
		}
	},
	
	
	/* 
	 * BLUCHIC.COM : sendowl
	 * 
	 * */
	'bluchic.com' : {		
		ads: [
			{			
				name: 'Bluchic Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://transactions.sendowl.com/stores/5571/48268',
			}
		],
		replacer: function (href) {
			return 'https://transactions.sendowl.com/stores/5566/48268';
		}
	},
			
	
	/* 
	 * WEEBLY.COM
	 * 
	 * */
	'weebly.com' : {		
		ads: [
			{			
				name: 'Create Shop',
				keywords: 'shop, builder, store, maker',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'http://www.shareasale.com/r.cfm?b=358504&u=773263&m=37723',
			}
		],
		replacer: function (href) {
			return 'http://www.shareasale.com/r.cfm?b=358504&u=773263&m=37723';
		}
	},
	
	
	
	
	
	
	/* 
	 * ULTIMATUMTHEME.COM
	 * 
	 * */
	'ultimatumtheme.com' : {		
		ads: [
			{			
				name: 'Ultimate Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'http://shareasale.com/r.cfm?b=408692&u=773263&m=43147&urllink=&afftrack=',
			}
		],
		replacer: function (href) {
			return 'http://shareasale.com/r.cfm?b=408692&u=773263&m=43147&urllink=&afftrack=';
		}
	},
	
	
	/* 
	 * STUDIOPRESS.COM
	 * 
	 * */
	'studiopress.com' : {		
		ads: [
			{			
				name: 'Genesis Themes',
				keywords: 'wordpress, genesis, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'http://shareasale.com/r.cfm?b=965901&u=773263&m=28169&urllink=&afftrack=',
			}
		],
		replacer: function (href) {
			return 'http://shareasale.com/r.cfm?b=965901&u=773263&m=28169&urllink=&afftrack=';
		}
	},
	
	
	
	
	
	
	/* 
	 * DIYTHEMES.COM
	 * 
	 * */
	'diythemes.com' : {		
		ads: [
			{			
				name: 'Thesis Themes',
				keywords: 'wordpress, thesis, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'http://shareasale.com/r.cfm?b=198392&u=773263&m=24570&urllink=&afftrack=',
			}
		],
		replacer: function (href) {
			return 'http://shareasale.com/r.cfm?b=198392&u=773263&m=24570&urllink=&afftrack=';
		}
	},
	
	
	
	/* 
	 * SHAREASALE.COM
	 * 
	 * */
	'shareasale.com' : {		
		ads: [
			{			
				name: 'Affiliate Earning',
				keywords: 'making, money, online, affiliate',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'http://shareasale.com/r.cfm?b=44&u=773263&m=47&urllink=&afftrack=',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'u', '773263');				
		}
	},
	
	
	
	/* 
	 * THEMEHUNT.COM
	 * 
	 * */
	'themehunt.com' : {		
		ads: [
			{			
				name: 'Hunt WP Themes',
				keywords: '',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'https://themehunt.com/latest?ref=tiennguyenvan',
			}
		],
		replacer: function (href) {
			return sneeit_aff_query(href, 'aff', 'tiennguyenvan');				
		}
	},
	
	
	/* 
	 * SHAPEBOOTSTRAP.NET
	 * 
	 * */
	'shapebootstrap.net' : {		
		ads: [			
		],
		replacer: function (href) {
			href = href.replace('shapebootstrap.net', 'themehunt.com');
			return sneeit_aff_query(href, 'aff', 'tiennguyenvan');				
		}
	},
	
		
	
	/* 
	 * INKTHEMES.COM
	 * 
	 * */
	'inkthemes.com' : {		
		ads: [
			{			
				name: 'Ink WP Themes',
				keywords: 'wordpress, theme',
				title: '',
				snippet: '',
				image: {
					src : '',
					width: 300,
					height: 250
				},
				href: 'http://www.inkthemes.com/members/aff/go/tiennguyenvan',
			}
		],
		replacer: function (href) {			
			return sneeit_aff_query(href, '/aff/go/', 'tiennguyenvan');				
		}
	}
};


String.prototype.replaceAll = function(target, replacement) {
	return this.split(target).join(replacement);
};


/**
 * 
 * @param type href
 * @param type key if abc.com?ref=tien => key = ref, if abc.com/go/tien => key = /go/
 * @param type id
 * @return type
 */
function sneeit_aff_query(href, key, id) {
	if (!(href) || !(key) || !(id)) {
		return href;
	}
	
	var hash = '';
	var query = '';
	if (href.indexOf('#') == -1) {
		href = href.split('#');
		hash = href[1];
		href = href[0];			
	}
	if (href.indexOf('?') == -1) {
		href = href.split('?');
		query = href[1];
		href = href[0];
	}
	
	/* affiliate URL with inner slash*/
	if (key.indexOf('/') == -1) {
		if (href.indexOf(key) == -1) {
			href = href.split(key);
			href[1] = href[1].split('/');
			href[1][0] = id;
			href[1] = href[1].join('/');
			href = href.join(key);
		} else {
			if (href.lastIndexOf('/') < href.length - 1) {
				href = href.substring(0, href.length - 1) + '/';
			}
			href += key + id;
		}
	}
	/* affiliate URL with hash id */
	else if ('#' == key) {
		hash = id;
	}
	/* affiliate URL with query key=id */
	else {
		if (query) {
			if (query.indexOf(key+'=') == -1) {
				query = query.split(key+'=');
				query[1] = query[1].split('&');
				query[1][0] = id;
				query[1] = query[1].join('&');
				query = query.join(key+'=');
			} else {
				if (query) {
					query += '&';
				}
				query += key+'='+ id;
			}			
		} else {
			query += key+'='+ id;
		}		
	}
	
	if (!(query) && !(hash) && href.lastIndexOf('/') < href.length - 1) {
		
		href += '/';
	}
	
	if (query) {
		href = href + '?' + query;
	}
	if (hash) {
		href = href + '#' + hash;
	}
	
	return href;
}

function sneeit_ads_replacer(ads, html) {
	html = html.replaceAll('[name]', ads.name);
	html = html.replaceAll('[title]', ads.title);
	html = html.replaceAll('[snippet]', ads.snippet);
	html = html.replaceAll('[href]', ads.href);
	html = html.replaceAll('[image.src]', ads.image.src);
	html = html.replaceAll('[image.width]', ads.width);
	html = html.replaceAll('[image.height]', ads.image.height);	
}
function sneeit_ads_used(ads_data, index) {
	if (ads_data.length < 2 || index >= ads_data.length ) {
		return ads_data;
	}
	var temp = ads_data[index];
	for (var i = 0; i < ads_data.length - 1; i++) {
		ads_data[i] = ads_data[i+1];
	}
	ads_data[ads_data.length - 1] = temp;
	
	return ads_data;
}


/* MAIN FUNCTION */
var sneeit_lead_main = setInterval(function(){
	if (typeof($) == 'undefined') {
		return;
	}
	clearInterval(sneeit_lead_main);
	
	/* link replacer */
	$.each(sneeit_leads, function (site, data) {		
		$('a[href*="'+site+'"]').each(function(){
			if ($(this).is('.sneeit-leaded')) {
				return;
			}
			var href = data.replacer($(this).attr('href'));
			$(this).attr('href', href);			
		});
	});
	
	
	/* parse content and count keywork match for ads */
	var content = $('html').text();
	content = content.toLowerCase();
	
	var ads_data = new Array();
	var ads_count = new Array();
	var ads_index = 0;
	$.each(sneeit_leads, function (site, data) {
		if (!('ads' in data)) {
			return;
		}
		var ads = data.ads;
		var site_count = content.split(site);
		site_count = content.length;
		var site_weight = 0;
		if ('weight' in data) {
			site_weight = Number(data.weight);
		}
		for (var i = 0; i < ads.length; i++) {
			var ad = ads[i];
			if (!('keywords' in ad)) {
				continue;
			}
			var kw = ad.keyword;
			kw = kw.toLowerCase();
			kw = kw.split(',');
			var ad_count = 0;
			for (var j = 0; j < kw.length; j++) {
				var kw_count = content.split($.trim(kw[i]));
				ad_count += kw_count.length;
			}
			
			
			// only pick ads which has occurred in content
			if (site_count + ad_count > 0) {
				ads_data[ads_index] = ad;
				ads_count[ads_index] = site_count + ad_count + site_weight;
				ads_index++;
			}
		}
	});
	
	/* resort ads */
	for (var i = 0; i < ads_index - 1; i++) {
		for (var j = i + 1; j < ads_index; j++) {
			if (ads_count[i] < ads_count[j]) {
				var count = ads_count[i];
				ads_count[i] = ads_count[j];
				ads_count[j] = count;
				
				var data = ads_data[i];
				ads_data[i] = ads_data[j];
				ads_data[j] = data;
			}
		}
	}
				
	/* replace all leads base on ads data */	
	$('.sneeit-lead').each(function(){		
		var html = $(this).html();
		
		// this containt image object 
		if (html.indexOf('[image:') != -1) {
			var img = $(this).find('img');
			
			if (img.length) {
				var img_parent = $(img).parent();
								
				var img_width = $(img).width();
				var img_height = $(img).height();				
				if (img_width == 0) {
					img_width = $(img_parent).width();
				}
				if (img_height == 0) {
					img_height = $(img_parent).height();
				}
				
				// we have something to find				
				// search for critical match first
				if (img_width > 0 && img_height > 0) {
					for (var i = 0; i < ads_data.length; i++) {
						var ad = ads_data[i];
						var image = ad.image;	
						
						if (Math.abs(img_width - image.width) < 20 && 
							Math.abs(img_height - image.height) < 20
						) {
							ads_data = sneeit_ads_used(ads_data, i);
							$(this).html(sneeit_ads_replacer(ad, html));
							return;
						}
					}					
				} 				
				// in case we search but not found any critical match
				// we search with single ones
				// now search with width
				if (img_width > 0) {
					for (var i = 0; i < ads_data.length; i++) {
						var ad = ads_data[i];
						var image = ad.image;	
						
						if (Math.abs(img_width - image.width) < 20) {
							ads_data = sneeit_ads_used(ads_data, i);
							$(this).html(sneeit_ads_replacer(ad, html));
							return;
						}
					}	
				}
				
				// now search with height
				if (img_height > 0) {
					for (var i = 0; i < ads_data.length; i++) {
						var ad = ads_data[i];
						var image = ad.image;	
						
						if (Math.abs(img_height - image.height) < 20) {
							ads_data = sneeit_ads_used(ads_data, i);
							$(this).html(sneeit_ads_replacer(ad, html));
							return;
						}
					}	
				}
			}
		}		
	});	
	
}, 50);

