import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import { useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import './Header.css'

const Header = () => {
    // const {pathname} =useLocation()
    // style={pathname.includes('blog')?{display:"none"}:{display:"block"}}  
    const [user] = useAuthState(auth);
    const Navigate=useNavigate()
    const logout = () => {
        signOut(auth);
        Navigate('/')
      };
    return (
        <Navbar sticky="top"  className='px-md-5 navbarContainer'  expand="lg">
            <Container fluid >
                <Navbar.Brand  href="#">
                    <img className='logo' src={require('../../images/car-logo-png.png')} alt='' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto gap-3">
                        <Nav.Link  as={Link} to='home'>Home</Nav.Link>
                        <Nav.Link  >Blog</Nav.Link>  
                        <Nav.Link  as={Link} to='order'>Order</Nav.Link>  
                        <Nav.Link  as={Link} to='about'>About</Nav.Link>  
                    </Nav>
                    <Form className="px-3 d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    {
                        user? <Nav.Link onClick={logout} as={Link} to='/'>Logout</Nav.Link>:<Nav.Link as={Link} to='login'>Login</Nav.Link>
                    }
                     
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;