'use client';

import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MainNavbar = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Link className='navbar-brand' href='/'>
          Blog Website
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link className='nav-link' href='/'>
              Home
            </Link>
            <Link className='nav-link' href='/todo'>
              Todo
            </Link>
            <Link className='nav-link' href='/ticket'>
              Ticket
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
