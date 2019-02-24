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
                                <img src="assets/images/man.png" alt="About Photo"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="about-content text-left">
                                <h4>Hi, i’m Rahul Lohakare, Experience Crafter from Canada.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                    aliquipex ea commodo consequat.</p>
                                <p> Duis autem vel eum iriure dolorin hendrerit in vulputate velit esse molestie
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                    iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                                    dolore.</p>
                                <a href="#" className="btn btn-default">Hire Me !</a>
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
