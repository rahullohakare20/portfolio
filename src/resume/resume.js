import React , {Component} from 'react';
import MenuLogo from '../menuLogo/menuLogo';
import MainNav from '../mainNav/MainNav';
import { Document, Page } from 'react-pdf';
import Button from 'react-bootstrap/Button'

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
                            <div className="about-wrapper">
                                <div>
                                    <Document
                                        file="assets/Rahul-Lohakare-Resume.pdf"
                                        onLoadSuccess={this.onDocumentLoadSuccess}
                                    >
                                        <Page pageNumber={pageNumber} />
                                    </Document>
                                    <p>Page {pageNumber} of {numPages}</p>
                                </div>
                                <Button href="assets/Rahul-Lohakare-Resume.pdf" download variant="success">
                                    <i className="fa fa-download"></i> Download Resume</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        );
    }
}

export default Resume;
