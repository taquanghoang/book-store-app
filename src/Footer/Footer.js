import "./Footer.scss"

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="widget">
                            <h5>Get in touch with us</h5>
                            <div>
                                <strong>Moderna company Inc</strong><br/>
                                Modernbuilding suite V124, AB 01<br/>
                                Someplace 16425 Earth
                            </div>
                            <div>
                                (123) 456-7890 - (123) 555-7891<br/>
                                email@domainname.com
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="widget">
                            <h5>Pages</h5>
                            <ul className="link-list">
                                <li><a href="/#">Press release</a></li>
                                <li><a href="/#">Terms and conditions</a></li>
                                <li><a href="/#">Privacy policy</a></li>
                                <li><a href="/#">Career center</a></li>
                                <li><a href="/#">Contact us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="widget">
                            <h5>Latest posts</h5>
                            <ul className="link-list">
                                <li><a href="/#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                                <li><a href="/#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
                                <li><a href="/#">Natus error sit voluptatem accusantium doloremque</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <h5>Flickr photostream</h5>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;