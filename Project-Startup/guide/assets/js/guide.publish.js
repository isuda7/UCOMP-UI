/*-------------------------------------------------------------------
	분류순서
	- @ Publish	    : 레이아웃
	- @ Init	    : 초기실행
-------------------------------------------------------------------*/
$(function(){
	$(".g-header").each(function(){
		$(this).load("../include/include_guide_header.html", function(){
			console.log('[INFO] 퍼블리싱 header.html 인클루드 완료');
			initUI();

			// 퍼블리싱 바로 볼 수 있도록 호출
			// var anbModal = new bootstrap.Modal(document.getElementById('anbModal'));
			// anbModal.show();

		});
	})
});
