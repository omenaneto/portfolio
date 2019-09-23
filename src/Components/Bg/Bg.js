import React from 'react';
import './Bg.scss';

//Assets
import miniBg from './img/bgmobile.png';
import bg from './img/bg.png';
import profile from './img/me.png';
// import miniBgDark from './img/bgmobileDARK.png';
// import bgDark from './img/bgDARK.png';
// import profileDark from './img/meDARK.png';

const Bg = (props) => {
	return (
		<div className='Bg'>
			<img className='desktopProfile' alt='desktop background' src={profile} />
			<img className='mobileBg' alt='mobile background' src={miniBg} />
			<img className='desktopBg' alt='desktop background' src={bg} />
			{/* <img className='desktopProfile' alt='desktop background' src={profileDark} />
					<img className='mobileBg' alt='mobile background' src={miniBgDark} />
					<img className='desktopBg' alt='desktop background' src={bgDark} /> */}
		</div>
	);
};

export default Bg;
