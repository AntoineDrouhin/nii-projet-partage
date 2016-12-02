import React from 'react';
import { Button, Col, ButtonToolbar, Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'

const TopBar = (props) => {

  return (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
    <Navbar.Brand>
      <a href="#">HelpGiveShare</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">MyLists</NavItem>
      <NavItem eventKey={2} href="#">All lists</NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )

}

export default TopBar
