import React, { Component } from 'react';
import './App.css';
import Home from './home/home';
import About from './about/about';
import Experience from './experience/experience';
import Resume from './resume/resume';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
    state = {
        isMenuOpen : false
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen : !prevState.isMenuOpen
        }));
    }

  render() {
    return (
        <BrowserRouter>
        <React.Fragment>
            {/*<div class='preloader'><div class='loaded'>&nbsp;</div></div>*/}

            <Route exact path="/" render={() => <Home isMenuOpen={this.state.isMenuOpen} toggleMenu={this.toggleMenu} />} />
            <Route path="/about" render={() => <About isMenuOpen={this.state.isMenuOpen} toggleMenu={this.toggleMenu} />} />
            <Route path="/experience" render={() => <Experience isMenuOpen={this.state.isMenuOpen} toggleMenu={this.toggleMenu} />} />
            <Route path="/resume" render={() => <Resume isMenuOpen={this.state.isMenuOpen} toggleMenu={this.toggleMenu} />} />

        </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
