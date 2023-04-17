import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Projects.css';
import linuxLogo from '../logos/linuxLogo.png';
import cLogo from '../logos/cLogo.png';
import githubLogo from '../logos/githubLogo.png';
import pythonLogo from '../logos/pythonLogo.png';
import htmlLogo from '../logos/htmlLogo.png';
import cssLogo from '../logos/cssLogo.png';
import javascriptLogo from '../logos/javascriptLogo.png';
import sqlLogo from '../logos/sqlLogo.png';
import postgreSQLLogo from '../logos/postgreSQLLogo.png';
import bootstrapLogo from '../logos/bootstrapLogo.png';
import flaskLogo from '../logos/flaskLogo.png';
import socketioLogo from '../logos/socketioLogo.png';
import reactLogo from '../logos/reactLogo.png';
import rbootstrapLogo from '../logos/rbootstrapLogo.png';
import Footer from './Footer.js';
import nittanyreads from '../images/nittanyreads.png';
import oldwebsite from '../images/oldwebsite.png';

export const Projects = () => {
    return (
		<div class="container"> 
			<div class="projects">
				<h1>Projects</h1>
				<p>Below are projects I have completed in the past or currently working on.</p>
				<p>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
						<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
					</svg>
					&nbsp; = &nbsp; Projects I want to highlight
				</p>
				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  							<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
						</svg>
						<span style={{fontWeight: 'bold'}}>&nbsp; mdadm Linear Device &nbsp; </span>(Jan 2023 -  Present)</Accordion.Header>
						<Accordion.Body>
							<div class="projectDescription">
								<h2>mdadm Linear Device</h2>
								<div class="section">
									<h5>Summary</h5>
									<p>
										mdadm Linear Device
									</p>
								</div>
								<div class="section">
									<h5>Tools</h5>
									<img src={cLogo} class="logo" alt=""/>
									<img src={linuxLogo} class="logo" alt=""/>
								</div>			
								<div class="section">
									<h5>GitHub</h5>
									<p>
										GitHub unavailable due to Penn State EECS regulations on Academic Integrity. 
										In other words, I do not want future CMPSC 311 students to plagiarize my code.
									</p>
								</div>
								<div class="section">
									<h5>Preview</h5>
								</div>		
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header><span style={{fontWeight: 'bold'}}>ChitChat &nbsp; </span>(Mar 2023)</Accordion.Header>
						<Accordion.Body>
							<div class="projectDescription">
									<h2>ChitChat</h2>
									<div class="section">
										<h5>Summary</h5>
										<p>
											Need to complete. Also running a test on deployment
										</p>
									</div>
									<div class="section">
										<h5>Tools</h5>
										<img src={pythonLogo} class="logo" alt=""/>
										<img src={htmlLogo} class="logo" alt=""/>
										<img src={cssLogo} class="logo" alt=""/>
										<img src={javascriptLogo} class="javascript" alt=""/>
										<img src={bootstrapLogo} class="bootstrap" alt=""/>
										<img src={socketioLogo} class="logo" alt=""/>
										<img src={flaskLogo} class="flask" alt=""/>
									</div>			
									<div class="section">
										<h5>GitHub</h5>
										<a href="https://github.com/zsherry168/chitchat" target="_blank" rel="noreferrer">
											<img src={githubLogo} class="github" alt=""/>
											Click to view repository
										</a>
									</div>
									<div class="section">
										<h5>Preview</h5>
									</div>		
								</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
								<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
							</svg>
							<span style={{fontWeight: 'bold'}}>&nbsp; Nittany Reads &nbsp; </span>(Feb 2023 - Apr 2023)</Accordion.Header>
						<Accordion.Body>
							<div class="projectDescription">
								<h2>Nittany Reads</h2>
								<div class="section">
									<h5>Summary</h5>
									<p>
										Nittany Reads is a book review website built with Flask. Users can 
										create an account, log in, search for books, view book details, and 
										write reviews. Languages used include Python, SQL, HTML, and CSS. 
										As mentioned, Flask serves as the web framework of the application. 
										SQLAlchemy connects the SQL database (PostgreSQL) to the Flask application, 
										and Bootstrap is used to provide web responsiveness. Last, the Google 
										Books API is used to extract a book's average rating and number of ratings 
										and returns the details of a book as a JSON object.
									</p>
								</div>
								<div class="section">
									<h5>Tools</h5>
									<img src={pythonLogo} class="logo" alt=""/>
									<img src={htmlLogo} class="logo" alt=""/>
									<img src={cssLogo} class="logo" alt=""/>
									<img src={sqlLogo} class="sql" alt=""/>
									<img src={postgreSQLLogo} class="logo" alt=""/>
									<img src={bootstrapLogo} class="bootstrap" alt=""/>
									<img src={flaskLogo} class="flask" alt=""/>
								</div>			
								<div class="section">
									<h5>GitHub</h5>
									<a href="https://github.com/zsherry168/nittanyreads" target="_blank" rel="noreferrer">
										<img src={githubLogo} class="github" alt=""/>
										Click to view repository
									</a>
								</div>
								<div class="section">
									<h5>Preview</h5>
									<img src={nittanyreads} alt="" class="d-block w-75" style={{borderRadius: 10}}/>
								</div>		
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header><span style={{fontWeight: 'bold'}}>Personal Website &nbsp; </span>(Jan 2023 - Present)</Accordion.Header>
						<Accordion.Body>
							<div class="projectDescription">
									<h2>Personal Website</h2>
									<div class="section">
										<h5>Summary</h5>
										<p>
											Ever since high school, I always wanted a personal website. I tried Wix.com and other 
											web development services; however, I never yielded any successful results. It wasn't 
											until I self-taught myself the basics of HTML and CSS did I finally create my first website. 
											Once completed, I eagerly launched my website on GitHub Pages but told myself I could do better. 
											In turn, I rebuilt my website (the one you see today) using React.js and React Bootstrap and 
											replaced the old one. While I work on other projects, I hope to continue improving this website 
											and further developing my skills in web development. 
										</p>
									</div>
									<div class="section">
										<h5>Tools</h5>
										<img src={htmlLogo} class="logo" alt=""/>
										<img src={cssLogo} class="logo" alt=""/>
										<img src={javascriptLogo} class="javascript" alt=""/>
										<img src={reactLogo} class="logo" alt=""/>
										<img src={rbootstrapLogo} class="bootstrap" alt=""/>
									</div>			
									<div class="section">
										<h5>GitHub</h5>
										<a href="https://github.com/zsherry168/zsherry168.github.io" target="_blank" rel="noreferrer">
											<img src={githubLogo} class="github" alt=""/>
											Click to view repository
										</a>
									</div>
									<div class="section">
										<h5>Preview</h5>
										<p>* Below is an image of my old website, which is very similar to my current one.</p>
										<img src={oldwebsite} alt="" class="d-block w-75" style={{borderRadius: 10}}/>
									</div>		
								</div>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
			<Footer/>
		</div>
    )
}