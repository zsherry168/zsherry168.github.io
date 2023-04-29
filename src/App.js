import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { RelevantCourses } from './components/RelevantCourses';
import icon from './sherry.png';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Nav.Link as={Link} to="/">
              <img src={icon} alt="" class="icon"/>
            </Nav.Link>
            <Navbar.Brand as={Link} to="/">
              Sherry Zhang
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
              <Nav.Link href="https://github.com/zsherry168" target="_blank">GitHub</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/relevantcourses">Relevant Courses</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/relevantcourses" element={<RelevantCourses/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
