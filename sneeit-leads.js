/*

You will markup your ads like this:
<div class="sneeit-lead">
	[title][keyword][snippet][image.src][image.width][image.height][href]
	[title.attr] for attribute
</div>
If you use [image. we will search all leads which has image width x height 
nearly match your image size or image parent size if image size not specific

the parent must be not contain anything else of image will be count as size

if both image and parent size are missing, we pick random

after pick most nearly size images, we pick base on nearly keyword (parse from your body texts)
 */

var sneeit_leads = {
	/* 
	 * TEMPLATEMONSTER.COM
	 * 
	 * */
	'templatemonster' : {		
		ads: [
			{				
				keyword: 'Web Templates',
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
		replace: function (href) {
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
	'amazon.com' : {		
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {			
			href = sneeit_aff_query(href, 'tag', 'myfavgifcar-20');
			href = sneeit_aff_query(href, 'camp', '1789');
			href = sneeit_aff_query(href, 'creative', '9325');						
			return href;
		}
	},
	
	
	/* 
	 * SERVERPRESS.COM 
	 * 
	 * */
	'serverpress.com' : {		
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {
			return sneeit_aff_query(href, '/ref/', '376');					
		}
	},
	
	
	/* 
	 * BLUEHOST.COM
	 * 
	 * */
	'bluehost.com' : {		
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {
			return sneeit_aff_query(href, '/track/', 'tiennguyenvan');							
		}
	},
		
	
	
	/* 
	 * HAPPYTHEMES.COM
	 * 
	 * */
	'happythemes.com' : {		
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
			return sneeit_aff_query(href, 'aid', '46045');			
		}
	},
	
	/* 
	 * ELEGANTTHEMES.COM
	 * 
	 * */
	'elegantthemes.com' : {		
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {
			return sneeit_aff_query(href, 'id', '44642');			
		}
	},
	
	
	
	/* 
	 * ATHEMES.COM
	 * 
	 * */
	'athemes.com' : {		
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
			return sneeit_aff_query(href, '96', '96');				
		}
	},
	
	
	
	/* 
	 * SHOPIFY.COM
	 * 
	 * */
	'shopify.com' : {		
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
			return sneeit_aff_query(href, 'ref', '8185');				
		}
	},
	
	
	
	/* 
	 * CREATIVEMARKET.COM
	 * 
	 * */
	'creativemarket.com' : {		
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
			href = sneeit_aff_query(href, 'ref', 'tiennguyenvan');				
			return sneeit_aff_query(href, 'aff', 'tiennguyenvan');				
		}
	},
	
	
	/* 
	 * THEMEFOREST.NET
	 * 
	 * */
	'themeforest.net' : {		
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {
			if (href.indexOf('elements.envato.com?') != -1 ||
				href.indexOf('elements.envato.com/') != -1) {
				href = '//1.envato.market/c/490795/298927/4662?u=' . encodeURIComponent(href);		
			}
						
			return href;
		}
	},
	
	
	/* 
	 * BLUCHIC.COM
	 * 
	 * */
	'bluchic.com' : {		
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {
			return sneeit_aff_query(href, 'aff', 'tiennguyenvan');				
		}
	},
	
	
	/* 
	 * SHAPEBOOTSTRAP.NET
	 * 
	 * */
	'shapebootstrap.net' : {		
		ads: [
			{				
				keyword: '',
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
		replace: function (href) {
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
				keyword: '',
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
		replace: function (href) {			
			return sneeit_aff_query(href, '/aff/go/', 'tiennguyenvan');				
		}
	}
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


/* MAIN FUNCTION */
var sneeit_lead_main = setInterval(function(){
	if (typeof($) == 'undefined') {
		return;
	}
	clearInterval(sneeit_lead_main);
	
	/* parse content and count keywork match for ads*/
	var content = $('body').text();
	content = content.toLowerCase();
	
	$.each(sneeit_leads, function (site, data) {
		var ads = data.ads;
		var kw = ads.keyword.toLowerCase();
		console.log(ads);
	});
			
	/* replace all leads */
	$('.sneeit-lead').each(function(){
		
	});
	
}, 50);