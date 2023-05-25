import React, { Component } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";

import logo from "./yandex.png";

import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default function Header() {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto my-2 my-lg-0">
                <Nav.Link href="/"> Главная </Nav.Link>
                <Nav.Link href="/about"> О нас </Nav.Link>
                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                <Nav.Link href="/blog"> Блог </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="d-inline mx-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/blog" element={<Blog />}/>
          </Routes>
        </Router>

      </div>
    );


}
