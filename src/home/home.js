import React  from 'react';
import MenuLogo from '../menuLogo/menuLogo';
import MainNav from '../mainNav/MainNav';

function Home(props) {
    return (
        <React.Fragment>
        <MainNav {...props} />
        <header id="home" className="home home-main-content">
            <div className="overlay sections">
                <div className="container text-center">
                    <div className="row">
                        <MenuLogo color="white" {...props} />

                        <div className="home-wrapper">
                            <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                                <div className="home-content">
                                    <h1>Rahul Lohakare</h1>
                                    <p>#UI Developer &nbsp; #Software Engineer </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </React.Fragment>
    )
}

export default Home;
