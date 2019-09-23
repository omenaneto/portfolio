import React from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

const Header = (props) => {
	let nav = [];
	if (props.laguageSelected === 'en') {
		nav = [
			'Home',
			'Resumé',
			'My Work',
			'Contacts',
		];
	}
	else if (props.laguageSelected === 'pt') {
		nav = [
			'Início',
			'Currículo',
			'Portfólio',
			'Contatos',
		];
	}
	return (
		<header className='Header'>
			<Logo />

			<Menu active={props.menuActive} />

			<nav
				className={
					'nav-menu ' +
					(
						props.menuActive ? '' :
						' hide-mobile')
				}
			>
				<ul>
					<li
						className={

								props.pageSelected === 0 ? 'highlighted' :
								''
						}
						job='home'
					>
						<h6 job='home'>{nav[0]}</h6>
					</li>
					<li
						className={

								props.pageSelected === 1 ? 'highlighted' :
								''
						}
						job='resume'
					>
						<h6 job='resume'>{nav[1]}</h6>
					</li>
					<li
						className={

								props.pageSelected === 2 ? 'highlighted' :
								''
						}
						job='work'
					>
						<h6 job='work'>{nav[2]}</h6>
					</li>
					<li
						className={

								props.pageSelected === 3 ? 'highlighted' :
								''
						}
						job='contact'
					>
						<h6 job='contact'>{nav[3]}</h6>
					</li>
					<li className='Language' job='lang-select'>
						<h6
							className={

									props.laguageSelected === 'pt' ? 'highlighted' :
									''
							}
							job='lang-select'
						>
							BR
						</h6>
						<h6
							className={

									props.laguageSelected === 'en' ? 'highlighted' :
									''
							}
							job='lang-select'
						>
							EN
						</h6>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
