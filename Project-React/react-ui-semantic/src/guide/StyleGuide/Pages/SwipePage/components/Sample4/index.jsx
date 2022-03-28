import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

const Sample4 = ({swipeName}) => {
	const swiperParam = {
		threshold: 5,
		speed:300,
		spaceBetween: 10,
		slidesPerView: 2,
		slidesPerGroup: 2,
		navigation: {
			nextEl: '.' + swipeName + '> .swiper-button-next',
			prevEl: '.' + swipeName + '> .swiper-button-prev',
		},
		breakpoints: {			
			// >= 640
			640: {
				spaceBetween: 10,
				slidesPerView: 4,
				slidesPerGroup: 4
			},
		}
	}

	return (
		<div className={'swiper ' + swipeName}>
			<Swiper {...swiperParam}>
				<div>반응형 #1</div>
				<div>반응형 #2</div>
				<div>반응형 #3</div>
				<div>반응형 #4</div>
				<div>반응형 #5</div>
			</Swiper>
			<button type='button' className='swiper-button-prev'></button>
			<button type='button' className='swiper-button-next'></button>
		</div>
	)
}

export default Sample4