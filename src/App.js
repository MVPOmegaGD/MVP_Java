import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddReview from './components/add-review';
import MoviesList from './components/movies-list';
import Movie from './components/movie';
import Login from './components/login';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/movies"}>Movies</Link>
              </Nav.Link>
              <Nav.Link>
                { user === null ? (
                  <a onClick={logout}>Logout User</a>
                ) : (
                  <Link to={"/login"}>Login</Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
