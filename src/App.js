import React from 'react';
import './_main.scss';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Page2 from './components/Page2/Page2';
import Home from './components/Home/Home';
import Page404 from './components/Page404/Page404';
import Search from './components/Search/Search';
import {BaseUrl} from './Const';
import Slider from './components/Slider/Slider';

function App(props) {
  const navigateTo = function(page,index){
    if(!index){
      console.log('page',page);
      // props.history.push(`/${page}`);
    }
    else{
      console.log('section',page);
    }
  }

  return (
    <Router>
    <div>
      <div className={'menu-container'}>
        <div className={'navbar-container'}>
          <ul className="nav-bar">
            <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/page-2">
                Page 2
              </NavLink>
            </li>

          </ul>
      </div>
      <div className={'search-container'}>
        <Search navigateTo={navigateTo}/>
      </div>
      </div>
      <Slider/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page-2" component={Page2} />
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
