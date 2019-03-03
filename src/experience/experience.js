import React  from 'react';
import MenuLogo from '../menuLogo/menuLogo';
import MainNav from '../mainNav/MainNav';
import './experience.css'

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
                                            <h5>Varian Medical Systems</h5>
                                            <h6>July 2018 - March 2019, Pune Maharashtra</h6>
                                            <p>Worked on varian's Halo 360 product using technologies such as angularJs, angular 6 and React with redux </p>
                                        </div>


                                        <div className="content-details content-border">
                                            <h5>Xento Systems</h5>
                                            <h6>October 2015 - July 2018, Pune Maharashtra</h6>
                                            <p>Worked on various products of xento systems including Message center and Document management</p>
                                            <p>Worked on transforming front end part into react js</p>
                                        </div>

                                        <div className="content-details">
                                            <h5>Futurism Technologies</h5>
                                            <h6>August 2014 - October 2015, Pune Maharashtra</h6>
                                            <p>More than 5 client websites built with technology stack of Javascript, JQuery and php.</p>
                                            <p>Worked on websites including e-commerce, informative, blogs and product portfolios.</p>
                                            <p>Got star performer 2015</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="experience-content">

                                        <h4>Education</h4>

                                        <div className="content-details content-border">
                                            <h5>University of Pune</h5>
                                            <h6>July 2010 - July 2014</h6>
                                            <p>Bachelor of Engineering in computer engineering from Samanway pratishthan's Institute of knowledge, college of engineering, pune.</p>
                                        </div>
                                        <div className="content-details content-border">
                                            <h5>Amravati University</h5>
                                            <h6>July 2008 - July 2010</h6>
                                            <p>Hsc from sudhakarrao naik college of science, akola.</p>
                                            <br/>
                                            <br/>
                                        </div>
                                        <div className="content-details">
                                            <h5>Amravati University</h5>
                                            <h6>July 2007 - July 2008</h6>
                                            <p>Ssc from Hindu Dnyanpeeth convent, akola.</p>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
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
