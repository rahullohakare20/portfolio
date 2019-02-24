import React  from 'react';
import MenuLogo from '../menuLogo/menuLogo';
import MainNav from '../mainNav/MainNav';

function Experience(props) {

    return (
        <React.Fragment>
        <MainNav {...props} />
            <section id="experience" className="experience">
                <div className="overlay sections">
                    <div className="container">
                        <div className="row">
                            <MenuLogo color="white" {...props} />
                            <div className="experience-wrapper">

                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="experience-content">

                                        <h4>Work Experience</h4>

                                        <div className="content-details content-border">
                                            <h5>Mad Max Design</h5>
                                            <h6>OCT 2013 - june 2014</h6>
                                            <p>orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                                volutpat.</p>
                                        </div>

                                        <div className="content-details">
                                            <h5>Crazy Design</h5>
                                            <h6>OCT 2013 - june 2015</h6>
                                            <p>orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                                volutpat.</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="experience-content">

                                        <h4>Education</h4>

                                        <div className="content-details content-border">
                                            <h5>Maddison University</h5>
                                            <h6>OCT 2013 - june 2014</h6>
                                            <p>orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                                volutpat.</p>
                                        </div>

                                        <div className="content-details">
                                            <h5>Max Design & Art Institute</h5>
                                            <h6>OCT 2013 - june 2015</h6>
                                            <p>orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                                volutpat.</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Experience;
