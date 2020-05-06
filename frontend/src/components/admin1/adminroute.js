import React, { Component } from 'react'
import ANav from './navbar'
import Footer from './footer'
import '../../App.css';
import {Link, Switch, Route,BrowserRouter as Router} from 'react-router-dom'
import AddCategory from './addcat';
import Showcat from './showcat'
import Institution from './collegelist'
import Students from './studentlist'
import Events from './eventlist'
export default class adminroute extends Component {
    render() {
        return (
            <Router>
            <ANav/>
              <Switch>

                <Route path="/admin/addcat" component={AddCategory}/>
                <Route path="/admin/showcat" component={Showcat}/>
                <Route path="/admin/institution" component={Institution}/>
                <Route path="/admin/students" component={Students}/>
                <Route path="/admin/events" component={Events}/>
              </Switch>
              <Footer/>
            </Router>
        )
    }
}
