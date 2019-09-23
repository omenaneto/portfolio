import React from 'react';
import './Main.scss';
import Asside from './Asside/Asside';
import Info from './Info/Info';
import Bg from '../../Components/Bg/Bg';

const Main = (props) => {
	const selectedPage = props.page;
	let page = '';
	if (selectedPage === 0) {
		page = 'Home';
	}
	if (selectedPage === 1) {
		page = 'Resume';
	}
	if (selectedPage === 2) {
		page = 'Work';
	}
	if (selectedPage === 3) {
		page = 'Contact';
	}
	return (
		<main className={'Main ' + page}>
			<Info page={selectedPage} laguageSelected={props.laguageSelected} />

			<Asside page={selectedPage} laguageSelected={props.laguageSelected} />

			<Bg />
		</main>
	);
};

export default Main;
