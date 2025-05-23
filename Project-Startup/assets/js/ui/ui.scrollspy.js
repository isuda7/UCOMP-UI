gsap.registerPlugin(ScrollTrigger);

function initScrollSpy(globalOptions = {}) {
	const {
		scrollOffset: globalScrollOffset = 0,
		activeStart: globalActiveStart = 'top center',
		activeEnd: globalActiveEnd = 'bottom center',
	} = globalOptions;

	const links = document.querySelectorAll('.nav-link');

	links.forEach(link => {
		const targetId = link.getAttribute('href');
		const target = document.querySelector(targetId);
		if (!target) return;

		const scrollContainerSelector = link.dataset.scrollContainer;
		const scrollContainer = scrollContainerSelector === 'window' ? window : document.querySelector(scrollContainerSelector);
		if (!scrollContainer) return;

		// 개별 옵션
		const scrollOffset = parseFloat(link.dataset.scrollOffset) || globalScrollOffset;
		const activeStart = link.dataset.activeStart || globalActiveStart;
		const activeEnd = link.dataset.activeEnd || globalActiveEnd;
		const scrollFill = link.dataset.scrollFill === 'true'; // 추가 옵션

		// ScrollTrigger 설정
		ScrollTrigger.create({
			trigger: target,
			start: activeStart,
			end: activeEnd,
			scroller: scrollContainer === window ? undefined : scrollContainer,
			toggleClass: {
				targets: link,
				className: 'active'
			},
			onToggle: self => {
				if (self.isActive) {
					setActive(link);
				}
			}
		});

		// 클릭 스크롤 이동
		link.addEventListener('click', e => {
			e.preventDefault();

			const targetRect = target.getBoundingClientRect();
			const containerRect = scrollContainer === window ? { top: 0, height: window.innerHeight } : scrollContainer.getBoundingClientRect();
			const currentScrollTop = scrollContainer === window ? window.scrollY : scrollContainer.scrollTop;

			let scrollTargetPos;
			if (scrollContainer === window) {
				scrollTargetPos = currentScrollTop + targetRect.top - scrollOffset;
			} else {
				const containerStyle = window.getComputedStyle(scrollContainer);
				const paddingTop = parseFloat(containerStyle.paddingTop) || 0;
				scrollTargetPos = targetRect.top - containerRect.top + currentScrollTop - paddingTop - scrollOffset;
			}

			// data-scroll-fill = true인 경우, 스크롤 영역이 짧아 의도한 위치에 못 도달하면 여백을 추가해준다.
			if (scrollFill && scrollContainer !== window) {
				const scrollHeight = scrollContainer.scrollHeight;
				const clientHeight = scrollContainer.clientHeight;
				const maxScrollTop = scrollHeight - clientHeight;

				if (scrollTargetPos > maxScrollTop) {
					// 부족한 공간만큼 컨테이너에 패딩(또는 마진) 추가해서 스크롤 공간 확보
					const extraSpace = scrollTargetPos - maxScrollTop;

					// 기존 padding-bottom 읽고 더해주기 (style에 직접 설정된 값만)
					const currentPaddingBottom = parseFloat(window.getComputedStyle(scrollContainer).paddingBottom) || 0;

					scrollContainer.style.paddingBottom = (currentPaddingBottom + extraSpace) + 'px';
				}
			}

			scrollContainer.scrollTo({
				top: scrollTargetPos,
				behavior: 'smooth'
			});
		});
	});

	function setActive(activeLink) {
		document.querySelectorAll('.nav-link.active').forEach(link => {
			link.classList.remove('active');
		});
		activeLink.classList.add('active');
	}
}
