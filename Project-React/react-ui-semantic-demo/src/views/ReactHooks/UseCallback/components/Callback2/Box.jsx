import React, {useEffect, useState} from 'react';

const Box = ({createBoxStyle}) => {
	const [style, setStyle] = useState({});

	useEffect(() => {
		console.log('박스 스타일');
		setStyle(createBoxStyle());
	}, [createBoxStyle]);
	return (
		<div style={style}></div>
	)
}
export default Box;