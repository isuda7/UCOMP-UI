import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

const Sample2 = ({swipeName}) => {
	const swiperParam = {
		threshold: 5,
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 10,
		loop: true,
		speed:300,
		navigation: {
			nextEl: '.' + swipeName + '> .swiper-button-next',
			prevEl: '.' + swipeName + '> .swiper-button-prev',
		},
	}

	return (
		<div className={'swiper ' + swipeName}>
			<Swiper {...swiperParam}>
				<div>Card #1</div>
				<div>Card #2</div>
				<div>Card #3</div>
				<div>Card #4</div>
				<div>Card #5</div>
			</Swiper>
			<button type='button' className='swiper-button-prev'></button>
			<button type='button' className='swiper-button-next'></button>
		</div>
	)
}

export default Sample2