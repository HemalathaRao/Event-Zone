import React from 'react';
// import logo from './logo.svg';
import '../../App.css';
import {Link, Switch, Route,BrowserRouter as Router} from 'react-router-dom'
import Nav from './navbar'
import Footer from './footer'
import Homep from './phome'
import Slogin from './slogin'
import Alogin from './alogin'
import Clogin from './clogin'
import Registration from './signup'
import StudentReg from './Studentreg'
import CollegeReg from './Collegereg'
import Forgot from './forgot'
// import About from './about'
// import Contact from './contact'
// import Events from './events'
// import Profile from './profile'
// import Editprof from './editprof'


function Allp() {
  return (

        
        <Router>
        <Nav/>
          <Switch>
          <Route  exact path="/" component={Homep}/>
          <Route  path="/slogin" component={Slogin}/>
          <Route  path="/alogin" component={Alogin}/>
          <Route path="/clogin" component={Clogin}/>
          <Route  path="/forgot" component={Forgot}/>
          <Route  path="/registration" component={Registration}/>
          <Route  path="/studentreg" component={StudentReg}/>
          <Route  path="/collegereg" component={CollegeReg}/>
             {/* <Route  path="/student/sevents" component={Events}/>
             <Route  path="/student/sabout" component={About}/>
             <Route  path="/student/scontact" component={Contact}/>
             <Route  path="/student/sprofile" component={Profile}/>
             <Route path="/student/seditprof" component={Editprof}/> */}
             {/* <Route  path="/addevent" component={Addevent}/> */}
             {/* <Route  path="/showevent" component={Showevent}/> */}
          </Switch>
          <Footer/>
        </Router>
    
  
  );
}

export default Allp;
