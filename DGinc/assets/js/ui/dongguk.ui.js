function dropdown(id, btn){
    var $id = $(id);
    var $btn = $(btn);
    $id.slideToggle('fast').toggleClass('is-visible');

    $(document).off('click.dropdown focusin.gnb').on('click.dropdown focusin.gnb', function(e){
        var isTarget = $id.has(e.target).length === 0;
        var exTarget = $btn.has(e.target).length === 0;
        if (isTarget && exTarget){
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
		var $items = $('.gnb-item');
		$items.eq(idx - 1).addClass('is-current');
		$window.off('scroll.sub').on('scroll.sub', function(){
			if ($window.scrollTop() > 280) {
				$wrapper.addClass('is-dark');
			} else {
				$wrapper.removeClass('is-dark');
			}
		})
	}
}