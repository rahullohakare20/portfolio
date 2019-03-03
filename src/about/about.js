import React  from 'react';
import MenuLogo from '../menuLogo/menuLogo';
import MainNav from '../mainNav/MainNav';

function About(props) {

    return (
        <React.Fragment>
        <MainNav {...props} />
        <section id="about" className="sections3">
            <div className="container">
                <div className="row">
                   <MenuLogo color="grey" {...props} />
                    <div className="about-wrapper">

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="about-photo">
                                <img src="assets/images/man.png" alt="About"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="about-content text-left">
                                <h4>Hi, I’m Rahul Lohakare, Experienced UI developer from Pune.</h4>
                                <p>I've <b>4.6</b> years of extensive hands on experience in Web and UI developement</p>
                                <p><b>Skills:</b></p>
                                <p>
                                    <ul>
                                        <li>React : 1 year</li>
                                        <li>Es6 : 2 years</li>
                                        <li>Angular JS : 3 years</li>
                                        <li>Angular 2-6 : 2.5 years</li>
                                        <li>Javascript : 4 years</li>
                                        <li>HTML5, css3, JQuery, bootstrap, git, jira, gerrit, Jasmin, karma, redux and sass</li>
                                    </ul>
                                </p>
                                {/*<a className="btn btn-default">Hire Me !</a>*/}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}

export default About;
