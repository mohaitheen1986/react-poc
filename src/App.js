import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon
} from 'mdbreact';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Routes';
import { ReactComponent as Logo } from './logo.svg';

// import { MDBSideNavCat, MDBSideNavNav, MDBSideNav,  MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

// import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className="flyout">
          <MDBNavbar color='pink' dark expand='md' fixed='top' scrolling>
          <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
              <Logo style={{ height: '2.5rem', width: '2.5rem' }} />
              <strong className='align-middle'>MDB POC</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            /> 
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                <MDBNavItem active>
                  <Link
                  exact
                  to='/'
                  onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong style={{color: "white"}}>Dashboard</strong>

                  </Link>
                </MDBNavItem>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem >
                <img
          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
          class="rounded-circle"
          style={{height: '2.5rem', width: '2.5rem'}}
          alt=""
          loading="lazy"
        />

        
                
                </MDBNavItem>
                
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <main style={{ marginTop: '70px', marginBottom: '30px' }}>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
  

}



export default App;
