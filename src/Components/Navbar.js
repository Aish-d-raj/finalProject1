import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './css/Navbar.css'

const NavbarComponent = ()=> {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        
          <Navbar.Brand><Link to="/home" >TopJobs</Link></Navbar.Brand>
          
          <Nav className="nav">
          <Link to="/home" >
            <button className='btn btn-light'>Home</button>
            </Link>
            <Link to="/Contact">
            <button className='btn btn-light'>Contact US</button>
            </Link>
            <Link to="/Jobs" >
            <button className='btn btn-light'>Jobs</button>
            </Link>
            
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavbarComponent;