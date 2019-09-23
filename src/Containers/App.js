//Basics
import React, { Component } from 'react';
//Styling
import './font-awesome.scss';
import './App.scss';

//Components
import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuActive    : false,
			menuClass       : '',
			pageSelected    : 0,
			laguageSelected : 'en',
		};
	}

	toggleMenu = () => {
		if (this.state.isMenuActive) {
			return this.setState({ isMenuActive: false });
		}
		else {
			return this.setState({ isMenuActive: true });
		}
	};

	toggleLanguage = () => {
		if (this.state.laguageSelected === 'en') return this.setState({ laguageSelected: 'pt' });
		if (this.state.laguageSelected === 'pt') return this.setState({ laguageSelected: 'en' });
	};

	choosePage = (pageId) => {
		if (this.state.pageSelected !== pageId) {
			this.setState({ pageSelected: pageId });
			return this.setState({ isMenuActive: false });
		}
		else {
			return this.setState({ isMenuActive: false });
		}
	};

	clikcHandler = (e) => {
		console.log('Click Handle Activated');
		if (e.target.attributes.job) {
			const clickedOn = e.target.attributes.job.value;
			//Toggles
			if (clickedOn === 'lang-select') {
				return this.toggleLanguage();
			}
			if (clickedOn === 'menu-btn') {
				return this.toggleMenu();
			}
			//Navigation
			if (clickedOn === 'home') {
				return this.choosePage(0);
			}
			if (clickedOn === 'resume') {
				return this.choosePage(1);
			}
			if (clickedOn === 'work') {
				return this.choosePage(2);
			}
			if (clickedOn === 'contact') {
				return this.choosePage(3);
			}
		}
		return;
	};

	render() {
		const slectedPage = this.state.pageSelected;

		return (
			<div className='App' onClick={this.clikcHandler}>
				<Header
					pageSelected={slectedPage}
					menuActive={this.state.isMenuActive}
					laguageSelected={this.state.laguageSelected}
				/>
				<Main page={slectedPage} laguageSelected={this.state.laguageSelected} />
			</div>
		);
	}
}

export default App;
