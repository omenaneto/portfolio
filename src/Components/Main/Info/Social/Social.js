import React from 'react';
import './Social.scss';

const Social = (props) => {
	return (
		<ul className='Social'>
			<li>
				<a
					href='https://www.linkedin.com/in/milton-neto'
					className='fa fa-linkedin-square'
					title='/milton-neto'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i />
				</a>
			</li>
			<li>
				<a
					href='https://github.com/omenaneto'
					className='fa fa-github-square'
					title='/omenaneto'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i />
				</a>
			</li>
			<li>
				<a
					href='https://www.behance.net/omenaneto'
					className='fa fa-behance-square'
					title='/omenaneto'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i />
				</a>
			</li>
			{/* <li>
				<a
					href='https://www.instagram.com/miltonneto.dev/'
					className='fa fa-instagram'
					title='@miltonneto.dev'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i />
				</a>
			</li> */}
			<li>
				<a
					href='tel:+5581981044282'
					className='fa fa-phone-square'
					title='+55 (81) 9 8104-4282'
					rel='noopener noreferrer'
				>
					<i />
				</a>
			</li>

			<li>
				<a
					href='mailto:omenaneto@gmail.com?Subject=Saw%20Your%20Portfolio'
					target='_top'
					className='fa fa-envelope-square'
					title='omenaneto@gmail.com'
				>
					<i />
				</a>
			</li>
		</ul>
	);
};

export default Social;
