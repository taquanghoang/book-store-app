import './App.scss';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Pages/Home/Home";
import Link from "./Pages/Link/Link";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <div className="container content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>

                        <Route path="/link">
                            <Link/>
                        </Route>

                        <Route path="/about">
                            <About/>
                        </Route>

                        <Route path="/contact">
                            <Contact/>
                        </Route>
                    </Switch>
                </div>
                <div className="flex-1"/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
