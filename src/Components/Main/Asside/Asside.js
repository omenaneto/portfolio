import React from 'react';
import './Asside.scss';
import JobCards from './JobCards/JobCards';
import jobs from './jobs';

const Asside = (props) => {
	//const { company, title, time, details } = jobs;
	const jobList = jobs.map((job) => {
		return <JobCards key={job.id} company={job.company} title={job.title} time={job.time} details={job.details} />;
	});

	if (props.page != null) {
		if (props.page === 0) {
			return <div className='Asside' />;
		}
		else if (props.page === 1) {
			let title;
			if (props.laguageSelected === 'en') {
				title = 'Resumé';
			}
			else if (props.laguageSelected === 'pt') {
				title = 'Currículo';
			}
			return (
				<div className='Asside Resume'>
					<div className='box'>
						<h3>{title}</h3>
						<hr />
						{jobList}
					</div>
				</div>
			);
		}
		else if (props.page === 2) {
			return <div className='Asside' />;
		}
		else if (props.page === 3) {
			return <div className='Asside' />;
		}
	}
	else {
		return <div className='Asside' />;
	}
};

export default Asside;
