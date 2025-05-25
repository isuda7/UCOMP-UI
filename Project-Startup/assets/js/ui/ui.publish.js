/*-------------------------------------------------------------------
	분류순서
	- @ Publish	    : 레이아웃
	- @ Init	    : 초기실행
-------------------------------------------------------------------*/
$(function () {
	$("template[data-include]").each((_, el) =>
		$(el).load($(el).data("include"), () => {
			console.log(`[INFO] 퍼블리싱 ${$(el).data("include")} 인클루드 완료`);
			if (window.initUI) initUI();
		})
	);
});
