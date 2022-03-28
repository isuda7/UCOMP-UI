import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

const Sample3 = ({swipeName}) => {
	const swiperParam = {
		threshold: 5,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		resistanceRatio: false,
		speed:300,
		navigation: {
			nextEl: '.' + swipeName + '> .swiper-button-next',
			prevEl: '.' + swipeName + '> .swiper-button-prev',
		},
	}

	return (
		<div className={'swiper ' + swipeName}>
			<Swiper {...swiperParam}>
				<div>Menu #1</div>
				<div>Menu #2</div>
				<div>Menu #3</div>
				<div>Menu #4</div>
				<div>Menu #5</div>
				<div>Menu #6</div>
				<div>Menu #7</div>
				<div>Menu #8</div>
			</Swiper>
			<button type='button' className='swiper-button-prev'></button>
			<button type='button' className='swiper-button-next'></button>
		</div>
)
}

export default Sample3