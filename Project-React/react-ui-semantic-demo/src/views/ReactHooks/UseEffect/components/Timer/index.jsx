import React, { useEffect } from 'react';

const Timer = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			console.log('타이머가 돌아가는 중');
		}, 1000);

		return () => {
			clearInterval(timer);
			console.log('타이머가 종료 되었습니다.');
		}
		
	}, []);
	return (
		<div>
			타이머를 시작합니다. 콘솔을 보세요!
		</div>
	)
}
export default Timer