function dropdown(id, btn){
    var $id = $(id);
    var $btn = $(btn);
    $id.stop().slideToggle('fast').toggleClass('is-visible');

    $(document).off('click.dropdown focusin.gnb').on('click.dropdown focusin.gnb', function(e){
        var isTarget = $id.parent().has(e.target).length === 0;
        if (isTarget){
            $id.slideUp('fast').removeClass('is-visible');
        }
    })
}

function setPage(idx) {
	if (idx === 0){
		var swiper = new Swiper(".main-swiper", {
			direction: "vertical",
			loop: true,
			speed: 600,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".main-swiper-pagination",
			},
		});
	} else {
		var $window = $(window);
		var $wrapper = $('.wrapper');
		var $gnbItems = $('.gnb-item');
		var $mnbItems = $('.mnb-item');
		$gnbItems.eq(idx - 1).addClass('is-current');
		$mnbItems.eq(idx - 1).addClass('is-current');
		$window.off('scroll.sub').on('scroll.sub', function(){
			if ($window.scrollTop() > 280) {
				$wrapper.addClass('is-dark');
			} else {
				$wrapper.removeClass('is-dark');
			}
		})
	}
}

function mobileNav(id, btn) {
	var $id = $(id);
    var $btn = $(btn);
    $id.stop().fadeToggle(100);
	$btn.toggleClass('is-opend');
	$('body').toggleClass('is-scroll-lock');

	$id.off('click.dimm').on('click.dim', function(e){
		$id.stop().fadeOut(100);
		$btn.removeClass('is-opend');
		$('body').removeClass('is-scroll-lock');
	})
}