import React  from 'react';
import MenuLogo from '../menuLogo/menuLogo';
import MainNav from '../mainNav/MainNav';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

function About(props) {
    const skills = [{
        id: 1,
        name: "React, Redux",
        experience: "1+"
    },{
        id: 2,
        name: "Es6",
        experience: "2"
    },{
        id: 3,
        name: "Angular JS",
        experience: "3"
    },{
        id: 4,
        name: "Angular 2-6",
        experience: "2.5"
    },{
        id: 5,
        name: "Javascript",
        experience: "4"
    },{
        id: 6,
        name: "HTML5 and css3",
        experience: "3"
    },{
        id: 7,
        name: "JQuery and bootstrap",
        experience: "3"
    },
    {
        id: 8,
        name: "git, jira, gerrit and sass",
        experience: "relevant"
    },
    {
        id: 9,
        name: "Jasmin and karma",
        experience: "relevant"
    }];

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

                                <BootstrapTable data={skills} striped={true} hover={true}>
                                    <TableHeaderColumn dataField="id" dataAlign="center" isKey={true} dataSort={true}>Sr.</TableHeaderColumn>
                                    <TableHeaderColumn dataField="name" dataAlign="left" dataSort={true}>Skill Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField="experience" dataAlign="center" dataSort={true}>Experience (Years) </TableHeaderColumn>
                                </BootstrapTable>
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
