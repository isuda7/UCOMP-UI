import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import 'swiper/css/swiper.min.css';

const MainEventSwiper = ({swipeName}) => {
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

	const swiperParams = {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		threshold: 5,
		speed:300,
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
			<Swiper {...swiperParams}>
				<div>
					<Link to='' className='main_event_item'>Slide #1</Link>
				</div>
				<div>
					<Link to='' className='main_event_item'>Slide #2</Link>
				</div>
				<div>
					<Link to='' className='main_event_item'>Slide #3</Link>
				</div>
				<div>
					<Link to='' className='main_event_item'>Slide #4</Link>
				</div>
				<div>
					<Link to='' className='main_event_item'>Slide #5</Link>
				</div>
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
export default MainEventSwiper
