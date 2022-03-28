import React from 'react';
import ResultDataImg1 from '../../assets/images/demo/confirm.png'
import './style.css';

const ResultData = ({src, alt, className, children}) => {
	if (src === undefined || src === '') {
		src = ResultDataImg1;
	}
	return (
		<div className={'result_data '+ className}>
			<span className='img'>
				<img src={src} alt={alt} />
			</span>
			{children}
		</div>
	)
}

export default ResultData