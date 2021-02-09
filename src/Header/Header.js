import './Header.scss';
import logo from '../Assets/img/logo-k_cntt.png';
import {
    Link
} from "react-router-dom";

function Header() {
    return (
        <div className="header-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/#">
                        <img src={logo} alt="Công Nghệ Thông Tin" />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link-custom" to="/">HOME</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link-custom" to="/link">LINK</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link-custom" to="/about">ABOUT</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link-custom" to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;