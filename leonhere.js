function ucweb(){
	$("a").each(function(index, element) {
		try{
        var thishref=$(this).attr("href");
		var thisText=$(this).html();
		if(thishref.indexOf("uc.cn")>=0){
			$(this).replaceWith(thisText);	
		}
		}
		catch(e){
		}
    });
	$("script").each(function(index, element) {
		try{
        var thissrc=$(this).attr("src");
		
		if(thissrc.indexOf("ucbrowser")>=0){
			$(this).remove();	
		}
		}
		catch(e){
		}
    });	
}
$(function(){
	FastClick.attach(document.body);
	var pageDATA_ua = window.navigator.userAgent.toLowerCase(); 
	if(pageDATA_ua.indexOf('ucbrowser')>=0){
		ucweb();
	}
	$('.schBtn').click(function(){
		$('.search').toggleClass('show');
	});

	$('.sideNav .back').click(function(){
		$('html,body').animate({scrollTop:0},300);
	});

	$('.sideNav .qr').hover(function(){
		$(this).children('.qrcode').addClass('open');
	},function(){
		$(this).children('.qrcode').removeClass('open');
	});
	$('.menu > ul > li').each(function(){
		if($(this).children('ul').length > 0){
			$(this).children('a').addClass('drop');
			$(this).prepend('<em></em>');
		}
	});
	$('.nav li').hover(function(){
		$(this).children('ul').addClass('show');
	},function(){
		$(this).children('ul').removeClass('show');
	});

	$('.nav li em').click(function(){
		$(this).siblings('ul').slideToggle('fast').parent().siblings().children('ul').slideUp('fast');
	});
	$('.navBtn').click(function(){
		$(this).toggleClass('open');
		$('.nav').toggleClass('open');
	});	
	

	$('.scial .wx').click(function(){
		$('.wxQrcode').addClass('open');
	});
	$('.wxQrcode .close').click(function(){
		$('.wxQrcode').removeClass('open');
	});	
	
	$('.postShare li.wx a').click(function(){
		$(this).siblings('.qrcode').fadeToggle('fast');
	});
});
