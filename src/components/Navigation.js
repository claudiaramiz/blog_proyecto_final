import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';


function Navigation() {

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" >
            <Navbar.Brand as={NavLink} to="/">
                Task Manager
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/bloglist">Blog List</Nav.Link>
                    <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                    <Nav.Link as={NavLink} to="/account">Account</Nav.Link>
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;

