/*-------------------------------------------------------------------
	분류순서
	- @@ 환경설정
	- @@ 레이아웃
	- @@ 공통함수
	- @@ 초기실행
-------------------------------------------------------------------*/
/*-------------------------------------------------------------------
	@@ 환경설정
-------------------------------------------------------------------*/
/* 디바이스 설정 */
function setDeviceStatus(){
    // 플랫폼 정보 가져오기
    var os = platform.os.family;  // 운영체제 정보
    var browserName = platform.name;  // 브라우저 이름
    var browserVersion = platform.version;  // 브라우저 버전
    var isMobile = platform.mobile;  // 모바일 여부

	// OS에 따른 클래스 추가
	var osClasses = {
		'iOS': 'os-ios',
		'Android': 'os-android',
		'Windows': 'os-windows',
		'macOS': 'os-macos',
		'Linux': 'os-linux'
	};
	$('html').addClass(osClasses[os] || 'os-unknown');

	// 브라우저 이름에 따른 클래스 추가
	var browserClasses = {
		'Chrome': 'browser-chrome',
		'Firefox': 'browser-firefox',
		'Safari': 'browser-safari',
		'Edge': 'browser-edge',
		'IE': 'browser-ie'
	};
	$('html').addClass(browserClasses[browserName] || 'browser-unknown');

	// 모바일 여부에 따른 클래스 추가
	$('html').addClass(isMobile ? 'is-mobile' : 'is-desktop');

    // 추가적으로 원하는 클래스는 여기에 추가 가능
    // console.log("OS: " + os, "브라우저: " + browserName + " " + browserVersion);
}

/* 스크롤 상태 설정 */
function setScrollStatus(){
    var scrollEndTime;
    var oldScrTop = $(window).scrollTop(); // 초기 스크롤 위치 설정
    var isScrFirst = oldScrTop === 0;    // 스크롤이 처음인지 확인
    var isScrLast = oldScrTop + $(window).outerHeight() === $(document).height(); // 스크롤이 끝인지 확인
	var isScrStarted = oldScrTop !== 0;

    // 처음과 마지막 스크롤 상태 설정
	$('body')
		.toggleClass('is-scroll-first', isScrFirst)
		.toggleClass('is-scroll-last', isScrLast)
		.toggleClass('is-scroll-started', isScrStarted); // ✅ 추가된 상태

    // 스크롤 이벤트 처리
	$(window).off('scroll.customEvent').on('scroll.customEvent', function() {
		var curScrTop = $(window).scrollTop();

		// 스크롤 방향 처리
		if (oldScrTop > curScrTop) {
			$('body').addClass('is-scroll-up').removeClass('is-scroll-down');
			$(window).trigger('scrollUp');
		} else if (oldScrTop < curScrTop) {
			$('body').addClass('is-scroll-down').removeClass('is-scroll-up');
			$(window).trigger('scrollDown');
		}
		oldScrTop = curScrTop;

		// 스크롤 종료 처리
		clearTimeout(scrollEndTime);
		scrollEndTime = setTimeout(function() {
			$(window).trigger('scrollEnd');
		}, 100);

		// 스크롤 상태 업데이트
		isScrFirst = curScrTop === 0;
		isScrLast = curScrTop + $(window).outerHeight() >= $(document).height();
		isScrStarted = curScrTop !== 0;

		$('body')
			.toggleClass('is-scroll-first', isScrFirst)
			.toggleClass('is-scroll-last', isScrLast)
			.toggleClass('is-scroll-started', isScrStarted); // ✅ 상태 적용
	});
}


/*-------------------------------------------------------------------
	@@ 레이아웃
-------------------------------------------------------------------*/


/*-------------------------------------------------------------------
	@@ 공통함수
-------------------------------------------------------------------*/
// Input Clear
function InputClearHandler(id) {
	$(id).val('').focus();
}

/* 부드러운 스크롤 디바이스 설정 */
let lenis;
function setLenisScroll() {
	if (lenis) lenis.destroy(); // 재설정 대응

	lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smooth: true,
	});
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	setLenisIgnore();
}

// Lenis 적용안함
function setLenisIgnore(){
	const lenisIgnores = document.querySelectorAll('.lenis-ignore');

	lenisIgnores.forEach(box => {
	box.addEventListener('wheel', e => {
		e.stopPropagation();
	}, { passive: false });

	box.addEventListener('touchstart', e => {
		e.stopPropagation();
	}, { passive: false });

	box.addEventListener('touchmove', e => {
		e.stopPropagation();
	}, { passive: false });
	});
}


/*-------------------------------------------------------------------
	@@ 초기실행
-------------------------------------------------------------------*/
function initUI() {
	/* GSAP Plugins */
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	// 환경설정
	setDeviceStatus(); // 디바이스 설정
	setScrollStatus(); // 스크롤 상태 설정

	// Layout

	// Layout
}

$(function(){
	initUI();
});
