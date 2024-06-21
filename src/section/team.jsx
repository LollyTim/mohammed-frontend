import React from 'react';

import AOS from 'aos';
AOS.init();


const hero = () => {
    return(
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 text-center">
                    <h2 data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true">Meet The Team</h2>
                    <div className="space-border"
                        data-aos="fade-up"
                        data-aos-delay="20"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true"
                        ></div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6" >
                            <div className="f-profile text-center">
                                <div className="fp-wrap f-invert">
                                    <div className="fpw-overlay">
                                        <div className="fpwo-wrap">
                                            <div className="fpwow-icons">
                                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-lg"></i></a>
                                                <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fpw-overlay-btm"></div>
                                    <img src="./img/team-lawyer/1.jpg" className="fp-image img-fluid" alt="imgteam"/>
                                </div>
                                <h4>Fynley Wilkinson</h4>
                                Managing Partner
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6" >
                            <div className="f-profile text-center">
                                <div className="fp-wrap f-invert">
                                    <div className="fpw-overlay">
                                        <div className="fpwo-wrap">
                                            <div className="fpwow-icons">
                                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-lg"></i></a>
                                                <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fpw-overlay-btm"></div>
                                    <img src="./img/team-lawyer/2.jpg" className="fp-image img-fluid" alt="imgteam"/>
                                </div>
                                <h4>Sasha Welsh</h4>
                                Senior Partner
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6" >
                            <div className="f-profile text-center">
                                <div className="fp-wrap f-invert">
                                    <div className="fpw-overlay">
                                        <div className="fpwo-wrap">
                                            <div className="fpwow-icons">
                                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-lg"></i></a>
                                                <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fpw-overlay-btm"></div>
                                    <img src="./img/team-lawyer/3.jpg" className="fp-image img-fluid" alt="imgteam"/>
                                </div>
                                <h4>John Shepard</h4>
                                Associate
                            </div>
                        </div>
                        <div className="spacer-double"></div>
            </div>
        </div>
    );
}

export default hero;