import React from 'react';
import './About.scss';

const About = (props) => {
	if (props.page === 1) {
		let bioTitle, bio, skillTitle, languagesTitle, languages;
		if (props.laguageSelected === 'en') {
			bioTitle = 'Bio';
			bio = `I'm an software developer with an entrepreneur spirit. I love creating new things and facing new
			challenges head on. I've worked on many full fledged applications as a developer, designer and as
			tech lead.`;
			skillTitle = 'Skills';
			languagesTitle = 'Languages';
			languages = 'English, Portuguese, Italian';
		}
		else if (props.laguageSelected === 'pt') {
			bioTitle = 'Bio';
			bio = `Sou um desenvolvedor de softwares com um espírito empreendedor. Eu amo criar coisas e encarar desafios. Já trabalhei em várias aplicações completas como desenvolvedor, designer, devops e lider técnico.`;
			skillTitle = 'Habilidades';
			languagesTitle = 'Idiomas';
			languages = 'Português, Inglês, Italiano';
		}
		return (
			<div className='About'>
				<h3>{bioTitle}</h3>
				<p>{bio}</p>
				<h3>{skillTitle}</h3>
				<div>Mern Stack</div> <div>Firebase</div> <div>SQL</div> <div>MongoDB</div> <div>RESTfull</div>{' '}
				<div>Flutter</div> <div>Dart</div> <div>C++</div> <div>C#</div> <div>React / React Native</div>{' '}
				<div>App Development</div> <div>Web Development</div> <div>VR/AR</div> <div>Software Engineering</div>{' '}
				<div>Product Design</div> <div>UI/UX</div> <div>Frontend Design</div> <div>SCRUM</div>{' '}
				<div>Project Management</div>
				<h3>{languagesTitle}</h3>
				<p>{languages}</p>
			</div>
		);
	}
	if (props.page === 3) {
		let emailTitle, email, messageTitle, message;
		if (props.laguageSelected === 'en') {
			emailTitle = 'Your email:';
			email = 'Write your email address';
			messageTitle = 'Your message:';
			message = 'Write what you wish to send me';
		}
		else if (props.laguageSelected === 'pt') {
			emailTitle = 'Seu email:';
			email = 'Escreva seu endereço de email';
			messageTitle = 'Sua mensagem:';
			message = 'Escreva o que gostaria de me dizer';
		}
		return (
			<div className='About'>
				<h3>{emailTitle}</h3>
				<input type='email' placeholder={email} />
				<h3>{messageTitle}</h3>
				<textarea placeholder={message} />
			</div>
		);
	}
};

export default About;
