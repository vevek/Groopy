import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './screens/contact/contact';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Submit from './screens/submit/submit';
import Complete from './screens/submit/complete';
import Works from './screens/works/works';
import Home from './screens/home/home';
import Listings from './screens/listings/listings';

function App() {

  return (
    <Router>
      <main>
        <section className="pb-0">
          {/* <div className="container"> */}
            <Navigation>

            </Navigation>
          {/* </div> */}
        </section>
      </main>
    
      <switch>
        <Route path="/home-page">
          <Home />
        </Route>
        <Route path="/works-page">
          <Works />
        </Route>
        <Route path="/contact-page">
          <Contact />
        </Route>
        <Route path="/submit-page">
          <Submit />
        </Route>
        <Route path="/listings-page">
          <Listings />
        </Route>
        <Route path="/complete-page">
          <Complete />
        </Route>
      </switch>
    </Router>
  );
}

export default App;
