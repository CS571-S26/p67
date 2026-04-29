import React, { useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Link, Outlet, Route, Routes } from 'react-router';
import App from './App';
import BadLink from './Pages/BadLink';
import UnderConstruction from './Pages/UnderConstruction';
import QuestionsPage from './Pages/QuestionsPage';
import { Container, Nav, Navbar } from 'react-bootstrap';

function TopBar() {
    
    return(
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" style={{ zIndex: 1000 }}>
                <Container>
                    <Nav className='me-auto'>
                        <Nav.Link href="/p67/">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#/About">
                            About You
                        </Nav.Link>
                        <Nav.Link href="#/Contacts">
                            Contact Us
                        </Nav.Link>
                        <Nav.Link href="#/Forget">
                            Forget
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopBar;