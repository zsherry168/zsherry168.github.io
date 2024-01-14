import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { RelevantCourses } from './components/RelevantCourses';
import { Fun } from './components/Fun';
import icon from './sherry.png';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Nav.Link as={Link} to="/">
              <img src={icon} alt="" class="icon"/>
            </Nav.Link>
            <Navbar.Brand as={Link} to="/">
              Sherry Zhang
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">About</Nav.Link>
              <Nav.Link href="https://github.com/zsherry168" target="_blank">GitHub</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/relevantcourses" className="justify-content-end">Relevant Courses</Nav.Link>
              <Nav.Link as={Link} to="/fun">Fun Stuff</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/relevantcourses" element={<RelevantCourses/>}/>
          <Route path="/fun" element={<Fun/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
