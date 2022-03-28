import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

const Sample1 = ({swipeName}) => {
	// S: Autoplay 재생/정지 대응
    const [mySwiper, setMySwiper] = useState(null);
    const [play, setPlay] = useState(true);

    useEffect(() => {
		const swiperInstance = document.querySelector('.swiper-container').swiper;
		setMySwiper(swiperInstance);

		// disableOnInteraction: true && pagination.clickable: true 일때 (pagination 클릭시 정지)
		if (swiperParam.autoplay.disableOnInteraction === true && swiperParam.pagination.clickable === true) {
			const paginationEl = document.querySelector('.' + swipeName + ' .swiper-pagination');
			const handlerPaginationPause = (e) => {
				(e.target === paginationEl.querySelector('.swiper-pagination-bullet-active')) && setPlay(false);
			}
			paginationEl.addEventListener('click', handlerPaginationPause);			
			return () => {
				paginationEl.removeEventListener('click', handlerPaginationPause);
			}
		}
    }, []);

    useEffect(() => {
		if (mySwiper !== null) {
			if (play) {
				mySwiper.autoplay.start();
			} else {
				mySwiper.autoplay.stop();
			}
		}
    }, [mySwiper, play]);
	
	const handlerAutoplayToggle = () => {
		setPlay(!play);
	}

	// disableOnInteraction: true && navigation 사용시 (navigation 클릭시 정지)
	const handlerAutoplayPause = () => {
		(swiperParam.autoplay.disableOnInteraction === true) && setPlay(false);
	}	
	// E: Autoplay 재생/정지 대응

	const swiperParam = {
		threshold: 5,
		speed:300,
		loop: true,
        autoplay: {
            delay: 1000, // Test Delay
			disableOnInteraction: true
        },
		navigation: {
			nextEl: '.' + swipeName + '> .swiper-button-next',
			prevEl: '.' + swipeName + '> .swiper-button-prev',
		},
		pagination: {
			el: '.'+ swipeName +'> .swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		on: {
			// disableOnInteraction: true 일때 사용 (터치대응)
			touchMove: () => {
				(swiperParam.autoplay.disableOnInteraction === true) && setPlay(false);
			}
		}
	}

	return (
		<div className={'swiper ' + swipeName}>
			<Swiper {...swiperParam}>
				<div>Basic #1</div>
				<div>Basic #2</div>
				<div>Basic #3</div>
				<div>Basic #4</div>
				<div>Basic #5</div>
			</Swiper>
			<div className='swiper-controller'>
				<button type='button' className='swiper-button-prev' onClick={handlerAutoplayPause}></button>
				<button type='button' className='swiper-button-next' onClick={handlerAutoplayPause}></button>
				<div className='swiper-pagination'></div>
				<div className='swiper-autoplay'>
					<button className={'swiper-autoplay-button'+ (play?' is-pause':' is-play')} onClick={handlerAutoplayToggle}><span>{play?'정지':'재생'}</span></button>
				</div>
			</div>
		</div>
	)
}

export default Sample1