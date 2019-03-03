import React , {Component} from 'react';
import MenuLogo from '../menuLogo/menuLogo';
import MainNav from '../mainNav/MainNav';
import Button from 'react-bootstrap/Button'
import './resume.css';

class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <React.Fragment>
                <MainNav {...this.props} />
                <section id="about" className="sections3">
                    <div className="container">
                        <div className="row">
                            <MenuLogo color="grey" {...this.props} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                                <div className="about-wrapper">
                                    <div>
                                        <Button href="assets/Rahul-Lohakare-Resume.pdf" className="margin-bottom-10" download variant="success">
                                            <i className="fa fa-download"></i> Download Resume</Button>
                                    </div>
                                    <div>
                                        <embed src="assets/Rahul-Lohakare-Resume.pdf" width="100%" height="2100px" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        );
    }
}

export default Resume;
