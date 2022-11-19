import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import  { useState, useEffect } from 'react';

import { Outlet,NavLink} from 'react-router-dom';

export default function NAV()
{
    return(
        <>
        
        <Navbar  >
            <Container>
            <Nav >
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/form">ADD</NavLink>
            </Nav>
            </Container>
        </Navbar>
        
        <Outlet />
        </>
    );
}