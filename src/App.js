
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import NotFound from './Components/NotFound/NotFound';
import AboutUs from './Components/AboutUs/AboutUs';
import Instructors from './Components/Instructors/Instructors';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "/home">
          <Home></Home>
        </Route>
        <Route path = "/courses">
          <Courses></Courses>
        </Route>
        <Route path = "/instructors">
          <Instructors></Instructors>
        </Route>
        <Route path = "/aboutus">
          <AboutUs></AboutUs>
        </Route>
        <Route path = "/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
