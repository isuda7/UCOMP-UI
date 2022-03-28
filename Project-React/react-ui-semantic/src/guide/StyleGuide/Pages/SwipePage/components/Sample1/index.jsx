import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

const Sample1 = ({swipeName}) => {
	// S: Autoplay 재생/정지 대응
    const [mySwiper, setMySwiper] = useState(null);
    const [play, setPlay] = useState(true);

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
	// E: Autoplay 재생/정지 대응

	const swiperParam = {
		threshold: 5,
		speed:300,
		loop: true,
        autoplay: {
            delay: 1000, // Test Delay
			disableOnInteraction: false
        },
		navigation: {
			nextEl: '.' + swipeName + '> .swiper-button-next',
			prevEl: '.' + swipeName + '> .swiper-button-prev',
		},
		pagination: {
			el: '.'+ swipeName +'> .swiper-controller .swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		getSwiper: setMySwiper
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
			<button type='button' className='swiper-button-prev'></button>
			<button type='button' className='swiper-button-next'></button>
			<div className='swiper-controller'>
				<div className='swiper-pagination'></div>
				<div className='swiper-autoplay'>
					<button className={'swiper-autoplay-button'+ (play?' is-pause':' is-play')} onClick={handlerAutoplayToggle}><span>{play?'정지':'재생'}</span></button>
				</div>
			</div>
		</div>
	)
}

export default Sample1