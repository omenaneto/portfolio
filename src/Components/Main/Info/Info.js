import React from 'react';
import './Info.scss';
import Heading from './Heading/Heading';
import Social from './Social/Social';
import About from './About/About';
import Cta from './Cta/Cta';
import Cards from './Cards/Cards';

const Info = (props) => {
	if (props.page != null) {
		if (props.page === 0) {
			let cta;
			if (props.laguageSelected === "en") {
				cta = <Cta page={props.page} laguageSelected={props.laguageSelected} job='hire' title={"Let's Work Together!"} icon='fa fa-user' />;
			}
			else if (props.laguageSelected === "pt") {
				cta = <Cta page={props.page} laguageSelected={props.laguageSelected} job='hire' title={"Vamos Trabalhar Juntos!"} icon='fa fa-user' />;
			}
			return (
				<div className='Info'>
					<Heading page={props.page} laguageSelected={props.laguageSelected}/>

					<Social page={props.page} laguageSelected={props.laguageSelected}/>

					{cta}
				</div>
			);
		}
		else if (props.page === 1) {
			let cta;
			if (props.laguageSelected === "en") {
				cta = <Cta page={props.page} laguageSelected={props.laguageSelected} job='hire' title={"Let's Work Together!"} icon='fa fa-user' />;
			}
			else if (props.laguageSelected === "pt") {
				cta = <Cta page={props.page} laguageSelected={props.laguageSelected} job='hire' title={"Vamos Trabalhar Juntos!"} icon='fa fa-user' />;
			}
			return (
				<div className='Info'>
					<Heading page={props.page} laguageSelected={props.laguageSelected} />

					<Social page={props.page} laguageSelected={props.laguageSelected} />

					<About page={props.page} laguageSelected={props.laguageSelected} />

					{cta}
				</div>
			);
		}
		else if (props.page === 2) {
			return (
				<div className='Info'>
					<Heading page={props.page} laguageSelected={props.laguageSelected} />

					<Cards />
				</div>
			);
		}
		else if (props.page === 3) {
			let cta;
			if (props.laguageSelected === "en") {
				cta = <Cta page={props.page} laguageSelected={props.laguageSelected} job='message' title='Send Message' icon='fa fa-envelope' url='mailto:omenaneto@gmail.com?Subject=Hello%20Milton' />;
			}
			else if (props.laguageSelected === "pt") {
				cta = <Cta page={props.page} laguageSelected={props.laguageSelected} job='message' title='Enviar Mensagem' icon='fa fa-envelope' url='mailto:omenaneto@gmail.com?Subject=Olá%20Milton' />;
			}
			return (
				<div className='Info'>
					<Heading page={props.page} laguageSelected={props.laguageSelected} />

					<Social page={props.page} laguageSelected={props.laguageSelected} />

					<About page={props.page} laguageSelected={props.laguageSelected} />

					{cta}
				</div>
			);
		}
	}
	else {
		return (
			<div className='Info'>
				<Heading page={-1} laguageSelected={props.laguageSelected} />
			</div>
		);
	}
};

export default Info;
