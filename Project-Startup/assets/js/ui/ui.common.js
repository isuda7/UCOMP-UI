/*-------------------------------------------------------------------
	분류순서
	- @ Init		: 초기실행
	- @ Settings	: 기본설정
	- @ Layout		: 레이아웃
	- @ Contents	: 컨텐츠전체
-------------------------------------------------------------------*/
/*-------------------------------------------------------------------
	@ Init
-------------------------------------------------------------------*/
function initUI() {
	// Setting
	setDeviceStatus(); // 디바이스 설정
	setScrollStatus(); // 스크롤 상태 설정

	// Layout
}

$(function(){
	initUI();
});

/*-------------------------------------------------------------------
	@ Settings
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

    // 처음과 마지막 스크롤 상태 설정
    $('body').toggleClass('is-scroll-first', isScrFirst);
    $('body').toggleClass('is-scroll-last', isScrLast);

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
        $('body').toggleClass('is-scroll-first', isScrFirst);
        $('body').toggleClass('is-scroll-last', isScrLast);
    });
}

/*-------------------------------------------------------------------
	@ Layout
-------------------------------------------------------------------*/


/*-------------------------------------------------------------------
	@ Content
-------------------------------------------------------------------*/
// Input Clear
function InputClearHandler(id) {
	$(id).val('').focus();
}
