import { Navbar, Nav, Button, Container, NavDropdown, Row, Col } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Switch, Route, Link } from "react-router-dom";
import newOrderComp from './Pages/newOrder';
import CheckOutComp from './Pages/checkOut';
import OrderConfimComp from './Pages/order';
import HomePageComp from './homePage';
import MyOrdersComp from './Pages/myOrders';
import LoginComp from './login/Login';
import logo from './logo.png';
import { useState } from 'react';
import { authService } from '../_services/auth.service';

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return true;
}

function MenuComp() {
  const [session] = useState(getSessionStorageOrDefault('member', false));

  return <div>

    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/">משלוחים דואר-מיתר</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse     id="responsive-navbar-nav">
          <Nav  className="me-auto">
            <LinkContainer style={{display : session? 'block' : 'none' }} to="/neworder">
              <Nav.Link>הזמנת משלוח</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{display : session? 'block' : 'none' }} to="/myorders">
              <Nav.Link>המשלוחים שלי</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" style={{ display: session ? 'none' : 'block' }}>
          <Link to="/login"> <Button >התחברות</Button></Link>
        </Nav>
        <Nav className="me-auto" style={{ display: session ? 'block' : 'none' }}>
          <Button onClick={authService.logout} >התנתק</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


  <Container>
    <Row>
      <Col >
      <Switch>
      <Route path='/myorders' component={MyOrdersComp} />
      <Route exact path='/' component={HomePageComp} />
      <Route path='/home' component={HomePageComp} />
      <Route path='/checkout/:id' component={CheckOutComp} />
      <Route path='/checkout' component={CheckOutComp} />


      <Route path='/neworder' component={newOrderComp} />
      <Route path='/checkout' component={CheckOutComp} />
      <Route path='/OrderConfim' component={OrderConfimComp} />
      <Route path='/login' component={LoginComp} />
    </Switch>
      </Col>
    </Row>
  </Container>
    
  </div>;
}

export default MenuComp;